/**
 * DMB Seguridad — Service Worker
 * Offline-first caching strategy with stale-while-revalidate
 * Version: 2.0.0
 */

const CACHE_NAME = 'dmb-seguridad-v2';
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/webgl-bg.js',
    '/manifest.json'
];

const CACHE_STRATEGIES = {
    // Cache First - for static assets that rarely change
    cacheFirst: [
        '/styles.css',
        '/app.js',
        '/webgl-bg.js',
        '/manifest.json'
    ],
    // Network First - for HTML and dynamic content
    networkFirst: [
        '/',
        '/index.html'
    ],
    // Stale While Revalidate - for fonts and external resources
    staleWhileRevalidate: [
        'https://fonts.googleapis.com/',
        'https://fonts.gstatic.com/',
        'https://images.unsplash.com/'
    ]
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Caching static assets');
                return cache.addAll(STATIC_ASSETS.map(url => new Request(url, { cache: 'reload' })));
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((name) => name !== CACHE_NAME)
                        .map((name) => caches.delete(name))
                );
            })
            .then(() => self.clients.claim())
    );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Skip non-GET requests
    if (request.method !== 'GET') return;
     return;
    
    // Skip chrome-extension and other non-http(s) requests
    if (!url.protocol.startsWith('http')) return;
    
    // Determine strategy based on URL
    let strategy = 'networkFirst';
    
    if (CACHE_STRATEGIES.cacheFirst.some(pattern => request.url.includes(pattern))) {
        strategy = 'cacheFirst';
    } else if (CACHE_STRATEGIES.staleWhileRevalidate.some(pattern => request.url.includes(pattern))) {
        strategy = 'staleWhileRevalidate';
    }
    
    event.respondWith(handleRequest(request, strategy));
});

async function handleRequest(request, strategy) {
    const cache = await caches.open(CACHE_NAME);
    
    switch (strategy) {
        case 'cacheFirst':
            return cacheFirst(request, cache);
        case 'networkFirst':
            return networkFirst(request, cache);
        case 'staleWhileRevalidate':
            return staleWhileRevalidate(request, cache);
        default:
            return networkFirst(request, cache);
    }
}

// Cache First: serve from cache, fallback to network
async function cacheFirst(request, cache) {
    const cached = await cache.match(request);
    if (cached) {
        // Update cache in background
        fetch(request).then(response => {
            if (response.ok) cache.put(request, response.clone());
        }).catch(() => {});
        return cached;
    }
    
    try {
        const response = await fetch(request);
        if (response.ok) cache.put(request, response.clone());
        return response;
    } catch (error) {
        return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
    }
}

// Network First: try network, fallback to cache
async function networkFirst(request, cache) {
    try {
        const response = await fetch(request);
        if (response.ok) cache.put(request, response.clone());
        return response;
    } catch (error) {
        const cached = await cache.match(request);
        if (cached) return cached;
        return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
    }
}

// Stale While Revalidate: serve from cache, update in background
async function staleWhileRevalidate(request, cache) {
    const cached = await cache.match(request);
    
    const fetchPromise = fetch(request).then(response => {
        if (response.ok) cache.put(request, response.clone());
        return response;
    }).catch(() => cached);
    
    return cached || fetchPromise;
}

// Background sync for form submissions (if supported)
self.addEventListener('sync', (event) => {
    if (event.tag === 'contact-form-sync') {
        event.waitUntil(syncContactForms());
    }
});

async function syncContactForms() {
    // Implementation for offline form submission queue
    console.log('[SW] Background sync for contact forms');
}

// Push notifications (if needed in future)
self.addEventListener('push', (event) => {
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.body,
            icon: '/icon-192.png',
            badge: '/badge-72.png',
            vibrate: [200, 100, 200],
            data: { url: data.url || '/' },
            actions: [
                { action: 'open', title: 'Abrir' },
                { action: 'close', title: 'Cerrar' }
            ]
        };
        event.waitUntil(self.registration.showNotification(data.title, options));
    }
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    if (event.action === 'open') {
        event.waitUntil(clients.openWindow(event.notification.data.url));
    }
});