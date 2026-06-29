/**
 * DMB SEGURIDAD — APP.JS
 * Futuristic AI Portfolio Interactions
 * Darlyn Miguel Batista Caraballo
 */

(function() {
  'use strict';

  // ========================================
  // DATA (with i18n support)
  // ========================================
  // Services data will be loaded from i18n
  // Projects data will be loaded from i18n

  const AI_SKILLS = [
    'YOLOv8 / YOLOv9 / YOLOv10',
    'RT-DETR / DETR',
    'SAM 2.0 (Segment Anything)',
    'TensorRT / ONNX Runtime',
    'NVIDIA Jetson (Orin / AGX / Xavier / Nano)',
    'Edge TPU / Google Coral',
    'OpenVINO / OpenCV DNN',
    'MLflow / Kubeflow / Weights & Biases',
    'Python / C++ / CUDA / Triton Inference Server',
    'Computer Vision: Detection / Segmentation / Pose / Tracking',
    'Face Recognition: ArcFace / MobileFaceNet / AdaFace',
    'Liveness Detection (Anti-Spoofing) ISO 30107',
    'ANPR/LPR: OpenALPR / Plate Recognizer / Custom',
    'Time Series: LSTM / Transformer / Isolation Forest',
    'MLOps: CI/CD modelos / Drift Detection / A/B Testing'
  ];

  const HW_SKILLS = [
    'Hikvision / Dahua / Uniview / Axis / Hanwha',
    'NVR / XVR / DVR 4K/8K + AI',
    'Cámaras: Bullet / Dome / PTZ / Térmica / Fisheye / Multi-sensor',
    'Control: ZKTeco / Hikvision / Anviz / Suprema / HID / Axis',
    'Biometría: Facial / Palma / Huella / Iris / Vena',
    'RFID: 125kHz / 13.56MHz (Mifare/DESFire) / UHF 860-960MHz / NFC',
    'Cerraduras: Magnéticas / Eléctricas / Motorizadas / Antipánico',
    'Torniquetes / Barreras vehiculares / Portones',
    'Alarmas: Paradox / DSC / Ajax / Hikvision / Texecom / Risco',
    'Sensores: PIR / Dual / Magnéticos / Rotura vidrio / Barreras IR / Sísmicos',
    'Sirena: Interior / Exterior / Estrobo / Voz / GSM/4G/IP',
    'Fibra: Fusionadora Fujikura / OTDR / Medidor potencia / Certificación',
    'Cobre: Fluke DSX-5000 / DSX-8000 / Certificación Cat6a/Cat7/Cat8',
    'Switches: Ubiquiti / MikroTik / TP-Link Omada / Cisco / Aruba / Ruijie',
    'PoE: 802.3af/at/bt (90W) / PoE++ / Pasivo / Watchdog',
    'Racks: 19" 6U-42U / Patch panels / Bandejas / Organizados / UPS Online/Line-Interactive',
    'SD-WAN: VXLAN / EVPN / SRv6 / BGP EVPN / FRR / Bird / OpenWrt',
    'Wireless: Ubiquiti airFiber / airMAX / UniFi / MikroTik / Cambium / Mimosa',
    'IoT: MQTT / Modbus / BACnet / KNX / Zigbee / Thread / Matter / LoRaWAN'
  ];

  const NET_SKILLS = [
    'Diseño red: Core / Distribución / Acceso / Colapso',
    'VLAN / QinQ / VXLAN / EVPN / VPLS / MPLS / SRv6',
    'Routing: OSPF / IS-IS / BGP / RIP / EIGRP / FRR / Bird',
    'QoS: DiffServ / IntServ / HQoS / PFIFO_FAST / HTB / CAKE / FQ-CoDel',
    'Seguridad: ACL / uRPF / BGP FlowSpec / DDoS Mitigation / NDR / XDP / eBPF',
    'VPN: WireGuard / OpenVPN / IPsec / Tailscale / ZeroTier / SD-WAN',
    'SDN: OpenFlow / P4 / ONOS / OpenDaylight / FRRouting',
    'Monitoring: Prometheus / VictoriaMetrics / Thanos / Grafana / NetBox / LibreNMS / Zabbix',
    'Logging: Loki / Elasticsearch / Graylog / Syslog-ng / Rsyslog',
    'Tracing: Jaeger / Zipkin / Tempo / OpenTelemetry',
    'Automation: Ansible / Terraform / Nornir / Netmiko / NAPALM / gNMI / NETCONF / YANG',
    'GitOps: ArgoCD / Flux / Helm / Kustomize / K3s / K8s / Talos',
    'Linux: Debian / Ubuntu / Alpine / NixOS / Proxmox / LXC / systemd / nftables / WireGuard',
    'Containers: Docker / Podman / Buildah / Skopeo / Cosign / Syft / Grype / Trivy',
    'CI/CD: GitHub Actions / GitLab CI / Drone / Woodpecker / Tekton / Argo Workflows',
    'IaC: Terraform / OpenTofu / Pulumi / Crossplane / Ansible / SaltStack'
  ];

  const CLIENTS = [
    'Hielo Central', 'UTESA', 'Súper Truck', 'JC Multiservice',
    'Roda Caribe', 'Rodatari', 'Cecomsa Finca',
    'Adrickson Comercio', 'Guariones', 'María Elsa',
    'Ernan', 'Prodacon', 'Radacaribe',
    'La Estación Sober', 'Escuela Juan López', 'Naro'
  ];

  // Testimonials data
  const TESTIMONIALS = [
    {
      id: 'test-1',
      client: 'Ing. Carlos Mendoza',
      role: 'Gerente de Operaciones',
      company: 'Hielo Cristalizado Central',
      avatar: 'CM',
      quote: 'La implementación de IA en nuestras cámaras frigoríficas fue un antes y después. Cero falsos positivos a -30°C, algo que ningún otro proveedor logró. El gemelo digital nos permite simular emergencias sin detener producción.',
      rating: 5,
      project: 'hielo-central',
      metric: '99.9% precisión en frío extremo'
    },
    {
      id: 'test-2',
      client: 'Dra. Patricia Reyes',
      role: 'Vicerrectora Administrativa',
      company: 'UTESA',
      avatar: 'PR',
      quote: 'Pasamos de seguridad reactiva a predictiva. El conteo de aforo en tiempo real y detección de anomalías nos da tranquilidad. La red auto-healing eliminó los cortes de internet durante clases virtuales. Un partner técnico real, no solo un instalador.',
      rating: 5,
      project: 'utesa',
      metric: '73% reducción incidentes'
    },
    {
      id: 'test-3',
      client: 'Roberto Vázquez',
      role: 'Director de Logística',
      company: 'Súper Truck Logistics',
      avatar: 'RV',
      quote: 'Los camiones ya no se detienen. ANPR a 60 km/h, barreras se abren solas, todo en una app. Cero falsas alarmas por fauna en 2km de perímetro. Conectaron 3 sedes con SD-WAN y failover automático. ROI inmediato en eficiencia operativa.',
      rating: 5,
      project: 'super-truck',
      metric: '200 camiones/día sin parar'
    },
    {
      id: 'test-4',
      client: 'Jennifer Cabrera',
      role: 'Gerente General',
      company: 'JC Multiservice',
      avatar: 'JC',
      quote: 'Buscábamos algo simple y moderno. Entregaron instalación invisible, cableado certificado, facial para empleados y alertas a WhatsApp. En 8 meses recuperamos la inversión previniendo robos internos. Soporte 24/7 real, no bot.',
      rating: 5,
      project: 'jc-multiservice',
      metric: 'ROI 8 meses'
    },
    {
      id: 'test-5',
      client: 'Ing. Miguel Rodríguez',
      role: 'Jefe de Mantenimiento',
      company: 'Roda Caribe',
      avatar: 'MR',
      quote: 'Primera fábrica en La Vega con detección EPP por IA. Cumplimiento de seguridad subió al 98%. La red OT/IT segregada (Purdue Model) pasó auditoría internacional. Alarma perimetral IA distingue personal de fauna. Profesionalismo total.',
      rating: 5,
      project: 'roda-caribe',
      metric: '98% cumplimiento EPP'
    },
    {
      id: 'test-6',
      client: 'Carlos Núñez',
      role: 'Propietario',
      company: 'Cecomsa Finca',
      avatar: 'CN',
      quote: 'Me dijeron que era imposible: seguridad IA profesional sin electricidad ni internet en medio del campo. Lo lograron: 100% solar, IA edge offline, enlace 5km. 72h autonomía sin sol. Monitoreo desde mi casa. Increíble.',
      rating: 5,
      project: 'cecomsa',
      metric: '100% off-grid funcional'
    }
  ];

  // Certifications data
  const CERTIFICATIONS = [
    { id: 'cert-1', name: 'NVIDIA Jetson AI Specialist', issuer: 'NVIDIA', year: 2024, icon: '🟢', category: 'IA / Edge', verified: true },
    { id: 'cert-2', name: 'TensorRT Optimization Certified', issuer: 'NVIDIA', year: 2024, icon: '🟢', category: 'IA / Edge', verified: true },
    { id: 'cert-3', name: 'YOLOv8/v9/v10 Advanced Training', issuer: 'Ultralytics', year: 2024, icon: '🔵', category: 'IA / Edge', verified: true },
    { id: 'cert-4', name: 'SAM 2.0 Segmentation Expert', issuer: 'Meta AI', year: 2024, icon: '🔵', category: 'IA / Edge', verified: true },
    { id: 'cert-5', name: 'Hikvision AI Partner Certified', issuer: 'Hikvision', year: 2023, icon: '🟠', category: 'Hardware', verified: true },
    { id: 'cert-6', name: 'Dahua Technology Solution Expert', issuer: 'Dahua', year: 2023, icon: '🟠', category: 'Hardware', verified: true },
    { id: 'cert-7', name: 'Axis Communications Certified Professional', issuer: 'Axis', year: 2023, icon: '🟠', category: 'Hardware', verified: true },
    { id: 'cert-8', name: 'ZKTeco Biometric Solutions Certified', issuer: 'ZKTeco', year: 2023, icon: '🟠', category: 'Hardware', verified: true },
    { id: 'cert-9', name: 'Fluke DSX-5000/8000 Certification', issuer: 'Fluke Networks', year: 2022, icon: '🟣', category: 'Redes / Infra', verified: true },
    { id: 'cert-10', name: 'MikroTik MTCNA / MTCRE / MTCTCE', issuer: 'MikroTik', year: 2022, icon: '🟣', category: 'Redes / Infra', verified: true },
    { id: 'cert-11', name: 'Ubiquiti Enterprise Wireless Admin', issuer: 'Ubiquiti', year: 2022, icon: '🟣', category: 'Redes / Infra', verified: true },
    { id: 'cert-12', name: 'Cisco CCNA Routing & Switching', issuer: 'Cisco', year: 2021, icon: '🟣', category: 'Redes / Infra', verified: true },
    { id: 'cert-13', name: 'BICSI Installer 2 Copper/Fiber', issuer: 'BICSI', year: 2021, icon: '🟣', category: 'Redes / Infra', verified: true },
    { id: 'cert-14', name: 'Paradox / DSC / Ajax Alarm Certified', issuer: 'Multi-brand', year: 2021, icon: '🔴', category: 'Alarmas', verified: true },
    { id: 'cert-15', name: 'MLflow / Kubeflow MLOps Practitioner', issuer: 'Linux Foundation', year: 2024, icon: '🟢', category: 'IA / Edge', verified: true },
    { id: 'cert-16', name: 'Prometheus / Grafana Observability', issuer: 'CNCF', year: 2023, icon: '🟣', category: 'Redes / Infra', verified: true }
  ];

  // ========================================
  // UTILITIES
  // ========================================
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

  // Get i18n instance
  function getI18n() {
    return window.i18n;
  }

  // Get translated services array
  function getServices() {
    const i18n = getI18n();
    return i18n.getObject('services.items') || [];
  }

  // Get translated projects array
  function getProjects() {
    const i18n = getI18n();
    return i18n.getObject('projects.items') || [];
  }

  // Get translated testimonials (for future use)
  function getTestimonials() {
    // For now return static, could be moved to i18n later
    return TESTIMONIALS;
  }

  // Get translated certifications (for future use)
  function getCertifications() {
    return CERTIFICATIONS;
  }

  // ========================================
  // LANGUAGE SWITCHER
  // ========================================
  function initLanguageSwitcher() {
    const switcher = $('#langSwitcher');
    if (!switcher) return;

    const buttons = $$('.lang-btn', switcher);
    const i18n = getI18n();

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang && lang !== i18n.getLanguage()) {
          i18n.setLanguage(lang);
        }
      });
    });

    // Update active state on language change
    i18n.subscribe(() => {
      buttons.forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        btn.classList.toggle('active', lang === i18n.getLanguage());
        btn.setAttribute('aria-pressed', lang === i18n.getLanguage());
      });
    });
  }

  // ========================================
  // NAVIGATION
  // ========================================
  function initNavigation() {
    const nav = $('#nav');
    const navToggle = $('#navToggle');
    const navLinks = $('#navLinks');
    const links = $$('.nav-link', navLinks);
    const navProgress = $('#navProgress');

    // Scroll progress + scrolled state
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = clamp(scrollY / docHeight, 0, 1);
          navProgress.style.transform = `scaleX(${progress})`;
          document.documentElement.style.setProperty('--scroll-progress', progress);
          
          if (scrollY > 50) nav.classList.add('scrolled');
          else nav.classList.remove('scrolled');
          
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Mobile toggle
    navToggle?.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isOpen);
      navToggle.classList.toggle('open');
      navLinks?.classList.toggle('open');
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    });

    // Close on link click
    links.forEach(link => {
      link.addEventListener('click', () => {
        navToggle?.classList.remove('open');
        navLinks?.classList.remove('open');
        navToggle?.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Active link on scroll
    const sections = $$('section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          links.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: `-${nav?.offsetHeight || 80}px 0px -66% 0px` });

    sections.forEach(s => observer.observe(s));
  }

  // ========================================
  // RENDER FUNCTIONS (with i18n)
  // ========================================
  function renderServices() {
    const grid = $('#servicesGrid');
    if (!grid) return;
    
    const services = getServices();
    const i18n = getI18n();

    grid.innerHTML = services.map((s, i) => `
      <article class="service-card animate-on-scroll delay-${(i % 6) + 1}" data-service="${s.id}">
        <div class="service-icon">${s.icon}</div>
        <div class="service-header">
          <h3 class="service-title">${s.title}</h3>
          <span class="service-tag">${s.tag}</span>
        </div>
        <p class="service-subtitle">${s.subtitle}</p>
        <p class="service-desc">${s.desc}</p>
        <ul class="service-features">
          ${s.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <div class="service-tech">
          <span class="tech-label">${i18n.t('common.stack') || 'Stack:'}</span>
          <span class="tech-list">${s.tech}</span>
        </div>
      </article>
    `).join('');
  }

  function renderProjects() {
    const grid = $('#projectsGrid');
    if (!grid) return;
    
    const projects = getProjects();
    const placeholderSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M3 21h18M3 17h18M3 13h18M3 9h18"/></svg>`;
    const i18n = getI18n();

    grid.innerHTML = projects.map((p, i) => `
      <article class="project-card animate-on-scroll delay-${(i % 6) + 1}" data-project="${p.id}">
        <div class="project-image">
          <div class="project-placeholder">
            ${placeholderSvg}
            <span>${p.client}</span>
            <span class="muted">${p.year} · ${p.location}</span>
          </div>
        </div>
        <div class="project-content">
          <div class="project-meta">
            <span class="project-tag">${p.location}</span>
            <span class="project-tag">${p.year}</span>
          </div>
          <h3 class="project-title">${p.client}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-features">
            ${p.features.map(f => `<span class="project-feature">${f}</span>`).join('')}
          </div>
          <div class="project-metrics">
            ${Object.entries(p.metrics).map(([k, v]) => `
              <div class="metric">
                <span class="metric-value">${v}</span>
                <span class="metric-label">${k.replace('_', ' ')}</span>
              </div>
            `).join('')}
          </div>
          <div class="project-highlight">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2z"/><path d="M12 6v6l4 2"/></svg>
            <span>${p.highlight}</span>
          </div>
        </div>
      </article>
    `).join('');
  }

  function renderTestimonials() {
    const grid = $('#testimonialsGrid');
    if (!grid) return;
    
    const testimonials = getTestimonials();
    const i18n = getI18n();

    grid.innerHTML = testimonials.map((t, i) => `
      <article class="testimonial-card animate-on-scroll delay-${(i % 6) + 1}" data-testimonial="${t.id}">
        <div class="testimonial-header">
          <div class="testimonial-avatar">${t.avatar}</div>
          <div class="testimonial-meta">
            <h4>${t.client}</h4>
            <p class="testimonial-role">${t.role}, ${t.company}</p>
          </div>
        </div>
        <div class="testimonial-rating" aria-label="${t.rating} de 5 estrellas">
          ${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}
        </div>
        <blockquote class="testimonial-quote">"${t.quote}"</blockquote>
        <div class="testimonial-metric">${t.metric}</div>
      </article>
    `).join('');
  }

  function renderCertifications() {
    const grid = $('#certsGrid');
    if (!grid) return;
    
    const certs = getCertifications();
    const i18n = getI18n();

    grid.innerHTML = certs.map((c, i) => `
      <article class="cert-card animate-on-scroll delay-${(i % 6) + 1}" data-cert="${c.id}">
        <div class="cert-icon">${c.icon}</div>
        <h4 class="cert-name">${c.name}</h4>
        <p class="cert-issuer">${c.issuer}</p>
        <div class="cert-meta">
          <span class="cert-year">${c.year}</span>
          <span class="cert-category">${c.category}</span>
        </div>
        ${c.verified ? '<span class="cert-verified" aria-label="Verificada">✓ Verificada</span>' : ''}
      </article>
    `).join('');
  }

  function renderSkills() {
    const aiEl = $('#aiSkills');
    const hwEl = $('#hwSkills');
    const netEl = $('#netSkills');
    if (aiEl) aiEl.innerHTML = AI_SKILLS.map(s => `<span class="tech-chip">${s}</span>`).join('');
    if (hwEl) hwEl.innerHTML = HW_SKILLS.map(s => `<span class="tech-chip">${s}</span>`).join('');
    if (netEl) netEl.innerHTML = NET_SKILLS.map(s => `<span class="tech-chip">${s}</span>`).join('');
  }

  function renderClients() {
    const track = $('#clientsTrack');
    if (!track) return;
    const allClients = [...CLIENTS, ...CLIENTS];
    track.innerHTML = allClients.map(c => `<span class="client-name">${c}</span>`).join('');
    
    const heroTrack = $('#heroTrustLogos');
    if (heroTrack) {
      heroTrack.innerHTML = CLIENTS.slice(0, 8).map(c => `<span class="client-name">${c}</span>`).join('');
    }
  }

  function renderContactMethods() {
    const container = $('#contactMethods');
    if (!container) return;
    
    const i18n = getI18n();
    const methods = i18n.getObject('contact.methods') || [];

    container.innerHTML = methods.map(m => `
      <a href="${m.href || '#'}" class="contact-method" ${m.target ? `target="${m.target}" rel="${m.rel || 'noopener'}"` : ''}>
        <div class="method-icon">${m.icon || ''}</div>
        <div class="method-content">
          <span class="method-label">${m.label}</span>
          <span class="method-value">${m.value}</span>
          <span class="method-note">${m.note}</span>
        </div>
      </a>
    `).join('');
  }

  function renderFooterNav() {
    const i18n = getI18n();
    const footer = i18n.getObject('footer.nav');

    // Services
    const footerServices = $('#footerServices');
    if (footerServices && footer?.services) {
      footerServices.innerHTML = footer.services.items.map(item => 
        `<li><a href="#servicios">${item}</a></li>`
      ).join('');
    }

    // Company
    const footerCompany = $('#footerCompany');
    if (footerCompany && footer?.company) {
      footerCompany.innerHTML = footer.company.items.map(item => 
        `<li><a href="#${item.toLowerCase().replace(/\s+/g, '-').replace('í', 'i').replace('ó', 'o')}">${item}</a></li>`
      ).join('');
    }

    // Coverage
    const footerCoverage = $('#footerCoverage');
    if (footerCoverage && footer?.coverage) {
      footerCoverage.innerHTML = footer.coverage.items.map(item => 
        `<li>${item}</li>`
      ).join('');
    }
  }

  function renderContactFormOptions() {
    const select = $('#service');
    if (!select) return;
    
    const i18n = getI18n();
    const options = i18n.getObject('contact.form.fields.service.options') || {};

    select.innerHTML = Object.entries(options).map(([value, label]) => 
      `<option value="${value}">${label}</option>`
    ).join('');
  }

  // ========================================
  // COUNTER ANIMATION
  // ========================================
  function initCounters() {
    const counters = $$('.stat-value[data-target], .live-stat-value[data-target]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.dataset.target);
          const suffix = el.dataset.suffix || '';
          const isFloat = target % 1 !== 0;
          const duration = 2000;
          const start = performance.now();

          function update(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;
            el.textContent = isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString();
            if (suffix && !el.textContent.endsWith(suffix)) {
              el.textContent += suffix;
            }
            if (progress < 1) requestAnimationFrame(update);
            else {
              el.textContent = (isFloat ? target.toFixed(1) : target.toLocaleString()) + suffix;
            }
          }
          requestAnimationFrame(update);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(c => observer.observe(c));
  }

  // ========================================
  // SCROLL ANIMATIONS
  // ========================================
  function initScrollAnimations() {
    const elements = $$('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));
  }

  // ========================================
  // SMOOTH SCROLL
  // ========================================
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const navHeight = $('#nav')?.offsetHeight || 80;
          const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
      });
    });
  }

  // ========================================
  // SCROLL DOWN INDICATOR
  // ========================================
  function initScrollDown() {
    const scrollDown = $('#scrollDown');
    const services = $('#servicios');
    scrollDown?.addEventListener('click', () => {
      if (services) {
        const navHeight = $('#nav')?.offsetHeight || 80;
        const targetPos = services.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  }

  // ========================================
  // CONTACT FORM — WhatsApp deep link with AI context
  // ========================================
  function initContactForm() {
    const form = $('#contactForm');
    const whatsappNumber = '18492090080';
    const submitBtn = form?.querySelector('button[type="submit"]');
    const btnText = submitBtn?.querySelector('.btn-text');
    const btnLoading = submitBtn?.querySelector('.btn-loading');
    const i18n = getI18n();

    // Service labels for WhatsApp message (will be translated)
    function getServiceLabels() {
      return i18n.getObject('contact.form.fields.service.options') || {};
    }

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const name = data.get('name')?.trim();
      const contact = data.get('contact')?.trim();
      const service = data.get('service');
      const message = data.get('message')?.trim();

      if (!name || !contact || !service || !message) {
        // Shake animation
        form.style.animation = 'shake 0.4s ease';
        setTimeout(() => form.style.animation = '', 400);
        return;
      }

      // Loading state
      if (submitBtn) {
        submitBtn.classList.add('btn-loading');
        submitBtn.disabled = true;
      }

      // Simulate AI context generation
      await new Promise(r => setTimeout(r, 800));

      const serviceLabels = getServiceLabels();
      const timestamp = new Date().toLocaleString(i18n.getLanguage() === 'es' ? 'es-DO' : 'en-US', { 
        timeZone: 'America/Santo_Domingo' 
      });
      
      const lang = i18n.getLanguage();
      const headerText = lang === 'es' 
        ? '🤖 *NUEVO PROYECTO IA — DMB Seguridad*'
        : '🤖 *NEW AI PROJECT — DMB Security*';
      const clientLabel = lang === 'es' ? '👤 *Cliente:*' : '👤 *Client:*';
      const contactLabel = lang === 'es' ? '📞 *Contacto:*' : '📞 *Contact:*';
      const moduleLabel = lang === 'es' ? '🎯 *Módulo:*' : '🎯 *Module:*';
      const dateLabel = lang === 'es' ? '🕐 *Fecha:*' : '🕐 *Date:*';
      const detailsLabel = lang === 'es' ? '📋 *Detalles de la operación:*' : '📋 *Operation Details:*';
      const footerText = lang === 'es' 
        ? '---\\n_Enviado desde portafolio IA DMB Seguridad_'
        : '---}\\n_Sent from DMB Security AI Portfolio_';

      const text = 
`${headerText}

${clientLabel} ${name}
${contactLabel} ${contact}
${moduleLabel} ${serviceLabels[service] || service}
${dateLabel} ${timestamp}

${detailsLabel}
${message}

${footerText}`;

      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');

      // Reset button
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.classList.remove('btn-loading');
          submitBtn.disabled = false;
        }
        form.reset();
      }, 500);
    });
  }

  // ========================================
  // PARALLAX / MOUSE EFFECTS
  // ========================================
  function initParallax() {
    const heroContent = $('.hero-content');
    const floatingOrb = $('#floatingAiOrb');
    
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      document.documentElement.style.setProperty('--mouse-x', mouseX + 0.5);
      document.documentElement.style.setProperty('--mouse-y', mouseY + 0.5);
    }, { passive: true });

    function animate() {
      currentX = lerp(currentX, mouseX, 0.05);
      currentY = lerp(currentY, mouseY, 0.05);
      
      if (heroContent) {
        heroContent.style.transform = `translate(${currentX * 15}px, ${currentY * 15}px)`;
      }
      if (floatingOrb) {
        floatingOrb.style.transform = `translate(${currentX * -30}px, ${currentY * -30}px)`;
      }
      
      requestAnimationFrame(animate);
    }
    animate();
  }

  // ========================================
  // INTERSECTION OBSERVER FOR PIPELINE ANIMATION
  // ========================================
  function initPipelineAnimation() {
    const stages = $$('.pipeline-stage');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = entry.target.classList.contains('center-stage') ? 'translateY(-20px)' : 'translateY(0)';
          }, i * 150);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    stages.forEach(s => {
      s.style.opacity = '0';
      s.style.transform = 'translateY(30px)';
      s.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(s);
    });
  }

  // ========================================
  // AI CAPABILITIES RENDER (dynamic from i18n)
  // ========================================
  function renderAiCapabilities() {
    const grid = $('#aiCapabilitiesGrid');
    if (!grid) return;
    
    const i18n = getI18n();
    const capabilities = i18n.getObject('ai.capabilities') || [];

    grid.innerHTML = capabilities.map((cap, i) => `
      <article class="ai-capability animate-on-scroll delay-${(i % 6) + 1}" role="listitem">
        <div class="cap-icon">${cap.icon || '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="24" height="24"><circle cx="12" cy="12" r="10"/></svg>'}</div>
        <h4>${cap.title}</h4>
        <p>${cap.desc}</p>
        <span class="cap-tag">${cap.tag}</span>
      </article>
    `).join('');
  }

  // ========================================
  // INIT ALL
  // ========================================
  function init() {
    // Render all dynamic content
    renderServices();
    renderProjects();
    renderTestimonials();
    renderCertifications();
    renderSkills();
    renderClients();
    renderContactMethods();
    renderFooterNav();
    renderContactFormOptions();
    renderAiCapabilities();

    // Initialize interactions
    initLanguageSwitcher();
    initNavigation();
    initCounters();
    initScrollAnimations();
    initSmoothScroll();
    initScrollDown();
    initContactForm();
    initParallax();
    initPipelineAnimation();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Add shake animation dynamically
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20% { transform: translateX(-8px); }
      40% { transform: translateX(8px); }
      60% { transform: translateX(-4px); }
      80% { transform: translateX(4px); }
    }
  `;
  document.head.appendChild(style);
})();