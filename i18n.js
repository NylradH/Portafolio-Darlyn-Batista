/**
 * DMB SEGURIDAD — I18N MODULE
 * Internationalization (ES/EN) for AI Portfolio
 * Darlyn Miguel Batista Caraballo
 */

(function() {
  'use strict';

  // ========================================
  // TRANSLATION DICTIONARIES
  // ========================================
  const I18N = {
    es: {
      // ===== NAVIGATION =====
      nav: {
        inicio: 'Inicio',
        servicios: 'Servicios',
        ia: 'IA',
        proyectos: 'Proyectos',
        sobreMi: 'Sobre mí',
        contactar: 'Contactar'
      },

      // ===== HERO SECTION =====
      hero: {
        badge: {
          aiTag: 'IA',
          text: 'Seguridad predictiva · Automatización total · Decisiones en milisegundos'
        },
        title: {
          line1: 'Seguridad que',
          line2: '<span class="gradient-text">piensa</span> por ti',
          line3: '<span class="gradient-text">actúa</span> antes'
        },
        tagline: 'La <strong>inteligencia artificial</strong> ya no es opcional. Es el motor que transforma cámaras en analistas, accesos en identidades, alarmas en predicciones y redes en sistemas autónomos.',
        stats: {
          cameras: 'Cámaras IA activas',
          precision: 'Precisión detección',
          latency: 'Latencia respuesta',
          provinces: 'Provincias RD'
        },
        cta: {
          primary: 'Iniciar proyecto con IA',
          secondary: 'Ver cómo funciona la IA'
        },
        trust: 'Con la confianza de',
        scroll: 'Descubrir'
      },

      // ===== AI SECTION =====
      ai: {
        tag: 'NÚCLEO',
        title: 'La <span class="gradient-text">Inteligencia Artificial</span> es el motor',
        subtitle: 'No instalamos cámaras. Instalamos <strong>cerebros digitales</strong> que ven, analizan, deciden y actúan en tiempo real.',
        pipeline: {
          stage1: {
            title: 'Captura Inteligente',
            desc: 'Cámaras 4K/8K con ISP IA embebido. Detección de rostros, placas, objetos, poses, anomalías — <strong>en el edge</strong>, sin latencia de nube.',
            tech: 'TensorRT · ONNX · Edge TPU'
          },
          stage2: {
            title: 'Motor de Inferencia',
            desc: 'NVIDIA Jetson / Orin / Xavier + modelos YOLOv8, RT-DETR, SAM 2.0. <strong>200+ TOPS</strong> para multi-stream 4K simultáneo. Entrenamiento continuo (MLOps).',
            tech: 'CUDA · TensorRT · Triton · MLflow',
            metrics: {
              map: '99.8% mAP',
              latency: '<50ms latencia',
              streams: '32 streams/device'
            }
          },
          stage3: {
            title: 'Acción Autónoma',
            desc: 'Alertas contextuales, apertura predictiva, bloqueo automático, re-encaminamiento de tráfico, auto-healing de red. <strong>Cero intervención humana</strong> para eventos conocidos.',
            tech: 'Webhooks · MQTT · API REST · SIP'
          }
        },
        capabilities: [
          {
            title: 'Reconocimiento Facial + Palma',
            desc: 'Identificación 1:N en <200ms. Anti-spoofing liveness detection. Funciona con mascarilla, gafas, cambios de look. GDPR-compliant.',
            tag: 'Control Acceso'
          },
          {
            title: 'ANPR / LPR Avanzado',
            desc: 'Lectura placas 99.7% precisión. Multi-país, motos, remolques. Lista blanca/negra, velocidad, dirección, color, marca/modelo via MMC.',
            tag: 'Vehicular'
          },
          {
            title: 'Detección Anomalías Comportamiento',
            desc: 'Merodeo, caídas, peleas, aglomeraciones, objeto abandonado, intrusión perimetral, tailgating. Reglas personalizables por zona/horario.',
            tag: 'Videovigilancia'
          },
          {
            title: 'Redes Auto-Gestionadas (AIOps)',
            desc: 'QoS adaptativo, failover predictivo, detección intrusión red, bandwidth shaping por IA, auto-configuración VLANs, self-healing PoE.',
            tag: 'Redes'
          },
          {
            title: 'Alarma Predictiva',
            desc: 'Correlación multi-sensor + IA. Falsa alarma <0.1%. Predicción de fallo hardware (discos, fuentes, cámaras) 72h antes. Mantenimiento predictivo real.',
            tag: 'Alarmas'
          },
          {
            title: 'Gemelo Digital de Seguridad',
            desc: 'Réplica virtual 3D de tu instalación. Simulación de amenazas, entrenamiento de modelos, planificación de expansión, auditoría visual remota.',
            tag: 'Plataforma'
          }
        ],
        cta: {
          title: '¿Listo para seguridad que piensa?',
          desc: 'La IA no reemplaza tu criterio. Lo amplifica. Hablemos de cómo integrar inteligencia real en tu operación.',
          button: 'Diseñar mi solución IA'
        }
      },

      // ===== SERVICES SECTION =====
      services: {
        tag: 'MÓDULOS',
        title: 'Servicios <span class="gradient-text">potenciados por IA</span>',
        subtitle: 'Cada servicio incluye motor de inferencia, app móvil con alertas IA, dashboard analítico y entrenamiento de modelos para tu caso de uso.',
        items: [
          {
            id: 'cctv-ia',
            title: 'Videovigilancia IA',
            subtitle: 'CCTV / IP / NVR + Analytics',
            desc: 'Cámaras 4K/8K con ISP IA embebido. Detección de rostros, placas, objetos, poses, anomalías — en el edge, sin latencia de nube. NVR con motor de inferencia integrado.',
            features: [
              'Detección facial 1:N <200ms + anti-spoofing',
              'ANPR/LPR 99.7% precisión multi-país',
              'Anomalías comportamiento: merodeo, caídas, peleas, tailgating',
              'Grabación inteligente: solo eventos relevantes (ahorro 80% storage)'
            ],
            tech: 'TensorRT · ONNX · Edge TPU · YOLOv8 · RT-DETR · SAM 2.0',
            tag: 'MÓDULO IA'
          },
          {
            id: 'acceso-ia',
            title: 'Control Acceso Biométrico IA',
            subtitle: 'Facial + Palma + RFID + QR',
            desc: 'Identificación 1:N en <200ms. Liveness detection (anti-spoofing) certificado. Funciona con mascarilla, gafas, cambios de look. Apertura predictiva por aproximación.',
            features: [
              'Reconocimiento facial + palma multimodal',
              'RFID 125kHz/13.56MHz/UHF + QR + NFC móvil',
              'Apertura predictiva: detecta intención antes del contacto',
              'Registros inmutables + auditoría tiempo real + GDPR'
            ],
            tech: 'ArcFace · MobileFaceNet · ISO 19794 · FIDO2 · WebAuthn',
            tag: 'MÓDULO IA'
          },
          {
            id: 'alarmas-ia',
            title: 'Alarmas Predictivas',
            subtitle: 'Correlación Multi-Sensor + IA',
            desc: 'Falsa alarma <0.1%. Correlación de vídeo + sensores + red + acceso. Predicción de fallo hardware (discos, fuentes, cámaras) 72h antes. Mantenimiento predictivo real.',
            features: [
              'Motor correlación: vídeo + PIR + magnéticos + red + acceso',
              'Predicción fallo disco/PSU/cámara 72h antes (SMART + térmico)',
              'Auto-armado/desarmado por geofencing + horario + presencia',
              'Escalado automático: push → SMS → llamada → seguridad física'
            ],
            tech: 'Isolation Forest · LSTM · MQTT · SIP · Webhooks · Home Assistant',
            tag: 'MÓDULO IA'
          },
          {
            id: 'redes-ia',
            title: 'Redes AIOps / SD-WAN',
            subtitle: 'Auto-Healing + QoS Adaptativo',
            desc: 'Redes que se auto-gestionan. QoS adaptativo por aplicación/usuario, failover predictivo, detección intrusión red (NDR), bandwidth shaping por IA, auto-configuración VLANs, self-healing PoE.',
            features: [
              'SD-WAN: failover sub-segundo, bonding 4G/5G/Fibra/Starlink',
              'AIOps: detección anomalías tráfico, auto-remediación',
              'NDR (Network Detection & Response) sin agentes',
              'PoE watchdog: reinicio automático cámaras/APs colgadas'
            ],
            tech: 'VXLAN · SRv6 · eBPF · XDP · FRR · NetBox · Ansible · Telegraf',
            tag: 'MÓDULO IA'
          },
          {
            id: 'plataforma',
            title: 'Plataforma Unificada',
            subtitle: 'Gemelo Digital + MLOps',
            desc: 'Réplica virtual 3D de tu instalación. Simulación de amenazas, entrenamiento de modelos con tus datos, planificación de expansión, auditoría visual remota. Pipeline CI/CD para modelos (MLOps).',
            features: [
              'Gemelo digital 3D navegable (Three.js + WebGL)',
              'Entrenamiento continuo: tus datos → mejores modelos',
              'Dashboard unificado: vídeo + acceso + alarma + red + IoT',
              'API abierta + Webhooks + MQTT + Integración SIEM/SOAR'
            ],
            tech: 'Three.js · WebXR · MLflow · Kubeflow · Prometheus · Grafana · OpenTelemetry',
            tag: 'PLATAFORMA'
          },
          {
            id: 'mantenimiento',
            title: 'Mantenimiento Predictivo IA',
            subtitle: 'Health Scoring 24/7',
            desc: 'Monitoreo continuo de salud de toda la infraestructura. Scoring 0-100 por dispositivo. Alertas antes de que fallen. SLA de disponibilidad 99.9%. Reportes ejecutivos automáticos.',
            features: [
              'Health score 0-100 por cámara, NVR, switch, sensor, AP',
              'Predicción MTBF (Mean Time Between Failures) por modelo',
              'Gestión repuestos: stock automático + pedidos predictivos',
              'Reportes PDF/HTML programados + dashboard ejecutivo'
            ],
            tech: 'Prometheus · VictoriaMetrics · Alertmanager · Grafana · PostgreSQL · TimescaleDB',
            tag: 'SERVICIO'
          }
        ]
      },

      // ===== PROJECTS SECTION =====
      projects: {
        tag: 'CASOS REALES',
        title: 'Proyectos donde la <span class="gradient-text">IA marcó la diferencia</span>',
        subtitle: 'No son instalaciones. Son implementaciones de inteligencia operativa. Resultados medibles, clientes reales.',
        cta: 'Quiero un caso como estos',
        items: [
          {
            id: 'hielo-central',
            client: 'Hielo Cristalizado Central',
            location: 'Santiago — Av. Estrella Sadhalá',
            year: 2024,
            services: ['24 Cámaras IP 5MP IA', 'NVR 32ch + Jetson Orin', 'Control acceso facial 8 puertas', 'Alarma correlacionada', 'SD-WAN 2 ISP + 5G backup', 'Gemelo digital planta'],
            desc: 'Planta procesadora de hielo: 15,000 m². El reto: cámaras frigoríficas (-30°C), muelle de carga 24/7, perímetro 800m. Solución: Cámaras IP69K térmicas + IA edge para detección en frío extremo. Control acceso facial con guantes. Red redundante fibra + 5G. Gemelo digital para simulaciones de emergencia.',
            features: ['Detección -30°C sin falsos positivos', 'Acceso facial con EPP completo', 'Failover 5G <200ms', 'Simulacros en gemelo digital'],
            metrics: { camaras: '24', precision: '99.9%', uptime: '99.97%', ahorro_storage: '82%' },
            highlight: 'IA entrenada con sus datos: 0 falsos positivos en 6 meses'
          },
          {
            id: 'utesa',
            client: 'UTESA — Universidad Tecnológica',
            location: 'Santiago — Av. Salvador Estrella Sadhalá',
            year: 2024,
            services: ['48 Cámaras IP 5MP IA', 'NVR 64ch + 2x Jetson AGX', 'Control acceso 24 puertas facial', 'AIOps campus-wide', 'Backbone fibra 10Gbps', 'Plataforma unificada'],
            desc: 'Campus 8 edificios, 12,000 estudiantes. Problema: seguridad reactiva, red inestable, gestión fragmentada. Solución: Videovigilancia IA con conteo aforo, detección peleas/caídas, ANPR estacionamientos. Control acceso facial manos libres. Red SD-WAN con AIOps: auto-healing, QoS para clases online. Dashboard único para seguridad + TI + rectoría.',
            features: ['Conteo aforo tiempo real por aula', 'Detección peleas/caídas <1s', 'Red auto-healing 99.99%', 'Dashboard único multi-departamento'],
            metrics: { camaras: '48', precision: '99.8%', uptime: '99.99%', incidentes_reducidos: '73%' },
            highlight: 'Primera universidad en RD con seguridad 100% IA edge'
          },
          {
            id: 'super-truck',
            client: 'Súper Truck Logistics',
            location: 'Santiago — Zona Franca',
            year: 2023,
            services: ['32 Cámaras IP 4MP IA', 'NVR 32ch + Jetson Xavier', 'Control acceso vehicular UHF 15m', 'Alarma perimetral IA 2km', 'SD-WAN multi-sede', 'Mantenimiento predictivo'],
            desc: 'Centro logístico 50,000 m², 200 camiones/día. Reto: lectura placas alta velocidad, perímetro extenso, múltiples sedes. Solución: ANPR 99.7% a 60 km/h. Barreras IR + IA vídeo correlacionado (cero falsas alarmas por fauna). Control acceso UHF largo alcance (15m) para flujo sin parar. Red SD-WAN conecta 3 sedes con failover automático.',
            features: ['ANPR 60 km/h sin parar', 'Perímetro 2km cero falsas alarmas', 'Acceso vehicular 15m manos libres', '3 sedes interconectadas SD-WAN'],
            metrics: { camaras: '32', precision: '99.7%', throughput: '200 camiones/día', falsas_alarmas: '0/mes' },
            highlight: 'Logística sin fricción: camiones entran/salen sin detenerse'
          },
          {
            id: 'jc-multiservice',
            client: 'JC Multiservice',
            location: 'Moca — Centro',
            year: 2023,
            services: ['12 Cámaras IP 4MP IA', 'NVR 16ch + Jetson Nano', 'Control acceso 4 puertas facial', 'Cableado Cat6a certificado', 'Switches PoE gestionados', 'App móvil + dashboard'],
            desc: 'Oficinas + almacén 2,000 m². Cliente quería "algo simple pero moderno". Instalación limpia: canaletas, rack 12U, cableado certificado Fluke. IA: detección intrusión horario no laborable, reconocimiento facial empleados, alertas WhatsApp. Soporte remoto 24/7 incluido. ROI: recuperaron inversión en 8 meses por prevención de robos internos.',
            features: ['Instalación oculta 100%', 'Facial empleados + visitantes', 'Alertas WhatsApp tiempo real', 'Soporte remoto 24/7 incluido'],
            metrics: { camaras: '12', precision: '99.5%', roi_meses: '8', disponibilidad: '99.9%' },
            highlight: 'ROI en 8 meses: previno 3 intentos de robo interno'
          },
          {
            id: 'roda-caribe',
            client: 'Roda Caribe / Rodatari',
            location: 'La Vega — Carretera Principal',
            year: 2022,
            services: ['20 Cámaras IP 4MP IA', 'NVR 32ch', 'Alarma perimetral IA', 'Fibra 500m + switches PoE', 'Red OT/IT segregada', 'UPS 3h autonomía'],
            desc: 'Fábrica procesamiento 10,000 m². Zonas: producción (IP66/IK10), bodegas, oficinas, perímetro. Cableado industrial tubería EMT, cajas estancas. Red OT/IT segregada (Purdue Model). IA: detección EPP (casco/chaleco), intrusión zonas peligrosas, conteo personal. Alarma perimetral con barreras IR + correlación vídeo.',
            features: ['Detección EPP obligatorio', 'Zonas peligrosas autónomas', 'Red OT/IT nivel 3.5 Purdue', 'Autonomía 3h UPS industrial'],
            metrics: { camaras: '20', precision: '99.6%', incidentes_seguridad: '-85%', cumplimiento_epp: '98%' },
            highlight: 'Primera fábrica en La Vega con detección EPP por IA'
          },
          {
            id: 'cecomsa',
            client: 'Cecomsa Finca',
            location: 'Puerto Plata — Zona Rural',
            year: 2022,
            services: ['8 Cámaras IP 4MP Solar IA', 'NVR 8ch PoE + Jetson Nano Solar', 'Alarma perimetral solar IA', 'Enlace WiFi 5km (Ubiquiti)', 'Mástil 12m galvanizado', 'Baterías LiFePO4 72h'],
            desc: 'Finca cafetalera 100% off-grid. Reto: sin energía eléctrica, sin internet, 5km a casa principal. Solución: Todo solar (paneles 400W + LiFePO4 2kWh). Cámaras + NVR + Jetson Nano corriendo en 12V DC. IA edge completa sin nube. Enlace WiFi 5km (airFiber) a casa principal para monitoreo. Mástil 12m con pararrayos. Autonomía 72h sin sol.',
            features: ['100% Solar LiFePO4 (sin red eléctrica)', 'IA edge completa offline', 'Enlace 5km línea vista', 'Autonomía 72h sin sol'],
            metrics: { camaras: '8', uptime_solar: '99.8%', autonomia_h: '72', latencia_inferencia: '45ms' },
            highlight: 'Seguridad IA profesional en medio del campo, sin electricidad ni internet'
          }
        ]
      },

      // ===== ABOUT SECTION =====
      about: {
        tag: 'PERFIL',
        title: 'El técnico que <span class="gradient-text">entrena modelos</span>',
        text: [
          'Técnico especialista en <strong>videovigilancia IP/analógica</strong>, <strong>control de acceso biométrico</strong>, <strong>alarmas predictivas</strong> y <strong>redes definidas por software</strong> (SD-WAN, VXLAN, SRv6, cableado Cat6a/Fibra certificado Fluke).',
          'Operando desde <strong>Moca, Espaillat</strong> con cobertura en Santiago, La Vega, Puerto Plata. Más de 8 años resolviendo instalaciones que otros dejaron a medias — y los últimos 3 integrando <strong>IA en el edge</strong> para que la seguridad deje de ser reactiva.',
          '<em>"Si ta ta, si no está, no está. Si tú no lo estás viendo ahí, es porque no está."</em> — Ahora la IA lo ve todo, lo analiza todo, y actúa antes de que tú lo notes.'
        ],
        techStack: {
          title: 'Stack Tecnológico',
          categories: {
            ai: 'IA / Edge',
            hardware: 'Hardware',
            networks: 'Redes / Infra'
          }
        },
        stats: [
          { label: 'Instalaciones IA-ready', suffix: '+' },
          { label: 'Años experiencia', suffix: '+' },
          { label: 'Latencia inferencia', suffix: 'ms' },
          { label: 'Precisión modelos', suffix: '%' }
        ]
      },

      // ===== TESTIMONIALS (if added later) =====
      testimonials: {
        tag: 'CONFIANZA',
        title: 'Lo que dicen <span class="gradient-text">mis clientes</span>',
        subtitle: 'Resultados reales, personas reales. La mejor referencia es quien ya confió.'
      },

      // ===== CERTIFICATIONS (if added later) =====
      certifications: {
        tag: 'CREDENCIALES',
        title: 'Certificaciones y <span class="gradient-text">competencias técnicas</span>',
        subtitle: 'Formación continua y validación de fabricantes líderes. La tecnología evoluciona, yo también.'
      },

      // ===== CONTACT SECTION =====
      contact: {
        tag: 'CONEXIÓN',
        title: 'Conectemos tu operación con <span class="gradient-text">inteligencia real</span>',
        subtitle: 'Sin formularios eternos. Sin llamadas de venta. Una conversación técnica directa: tú me dices tu problema, yo te diseño la solución con IA.',
        methods: [
          {
            label: 'WhatsApp Directo',
            value: '849-209-0080',
            note: 'Respuesta <strong><5 min</strong> horario laboral'
          },
          {
            label: 'Email Técnico',
            value: 'darlynmbc@gmail.com',
            note: 'Para documentación, planos, specs'
          },
          {
            label: 'Base de Operaciones',
            value: 'Moca, Espaillat, RD',
            note: 'Cobertura: Santiago · La Vega · Puerto Plata'
          },
          {
            label: 'Horario IA',
            value: 'Lun-Sáb 7:00-18:00',
            note: 'Monitoreo IA: <strong>24/7/365</strong>'
          }
        ],
        form: {
          header: {
            label: 'Formulario inteligente'
          },
          fields: {
            name: {
              label: 'Nombre completo *',
              placeholder: 'Darlyn Miguel Batista Caraballo'
            },
            contact: {
              label: 'WhatsApp o Email *',
              placeholder: '849-XXX-XXXX o tu@email.com'
            },
            service: {
              label: 'Módulo de interés *',
              placeholder: 'Selecciona el módulo IA',
              options: {
                '': 'Selecciona el módulo IA',
                'cctv-ia': '🎥 Videovigilancia IA (CCTV/IP/NVR + Analytics)',
                'acceso-ia': '🚪 Control Acceso Biométrico + IA',
                'alarmas-ia': '🛡️ Alarmas Predictivas + Correlación IA',
                'redes-ia': '🌐 Redes SD-WAN / AIOps / Auto-Healing',
                'plataforma': '🧠 Plataforma Completa (Gemelo Digital + MLOps)',
                'mantenimiento': '🔧 Mantenimiento Predictivo IA',
                'otro': '💡 Otro / Asesoría técnica'
              }
            },
            message: {
              label: 'Describe tu operación / problema *',
              placeholder: 'Ej: \'Tengo 3 bodegas en Santiago, necesito detectar intrusión perimetral, lectura de placas en acceso vehicular, y que todo se vea en una sola app. Actualmente tengo 12 cámaras analógicas antiguas.\''
            }
          },
          submit: 'Enviar a WhatsApp con IA',
          loading: 'Generando contexto...',
          note: 'Tu mensaje llega pre-formateado con contexto técnico. Solo dale a enviar.'
        }
      },

      // ===== FOOTER =====
      footer: {
        tagline: 'Seguridad electrónica inteligente. <span class="gradient-text">IA en el edge.</span> Instalación limpia, modelos entrenados, decisiones en milisegundos.',
        aiBadge: 'Powered by <strong>Edge AI</strong> · NVIDIA Jetson · TensorRT · YOLOv8 · SAM 2.0',
        nav: {
          services: {
            title: 'Módulos IA',
            items: ['Videovigilancia IA', 'Control Acceso IA', 'Alarmas Predictivas', 'Redes AIOps', 'Plataforma Unificada']
          },
          company: {
            title: 'Empresa',
            items: ['Cómo funciona la IA', 'Casos reales', 'Perfil técnico', 'Contacto directo']
          },
          coverage: {
            title: 'Cobertura RD',
            items: ['Moca, Espaillat (Base)', 'Santiago de los Caballeros', 'La Vega', 'Puerto Plata']
          }
        },
        copyright: '© 2025 Darlyn Miguel Batista Caraballo. Ingeniería de seguridad con IA.',
        techBadge: [
          'Desplegado en Cloudflare Pages',
          'Edge Network Global',
          'HTML/CSS/JS Vanilla · Zero Framework',
          'Conversemos'
        ]
      },

      // ===== WHATSAPP FLOAT =====
      whatsapp: {
        tooltip: 'WhatsApp IA',
        title: 'Iniciar proyecto con IA'
      },

      // ===== SEO / META =====
      meta: {
        title: 'DMB Seguridad | Seguridad Electrónica Inteligente con IA',
        description: 'Darlyn Miguel Batista Caraballo - Especialista en Seguridad Electrónica & Redes con IA. Videovigilancia inteligente, Control de Acceso biométrico, Alarmas predictivas, Redes definidas por software. Moca, Santiago, La Vega, Puerto Plata.',
        ogTitle: 'DMB Seguridad | Seguridad Electrónica Inteligente con IA',
        ogDescription: 'El futuro de la seguridad ya está aquí. IA + CCTV + Control de Acceso + Redes. 150+ instalaciones. República Dominicana.',
        ogLocale: 'es_DO'
      },

      // ===== COMMON =====
      common: {
        loading: 'Cargando...',
        error: 'Error',
        close: 'Cerrar',
        back: 'Volver',
        next: 'Siguiente',
        previous: 'Anterior',
        viewMore: 'Ver más',
        viewLess: 'Ver menos',
        readMore: 'Leer más',
        contactUs: 'Contáctanos',
        sendMessage: 'Enviar mensaje',
        required: '*',
        optional: 'Opcional',
        selectOption: 'Seleccionar opción',
        noData: 'Sin datos disponibles',
        language: 'Idioma',
        spanish: 'Español',
        english: 'English'
      }
    },

    en: {
      // ===== NAVIGATION =====
      nav: {
        inicio: 'Home',
        servicios: 'Services',
        ia: 'AI',
        proyectos: 'Projects',
        sobreMi: 'About Me',
        contactar: 'Contact'
      },

      // ===== HERO SECTION =====
      hero: {
        badge: {
          aiTag: 'AI',
          text: 'Predictive security · Total automation · Millisecond decisions'
        },
        title: {
          line1: 'Security that',
          line2: '<span class="gradient-text">thinks</span> for you',
          line3: '<span class="gradient-text">acts</span> before'
        },
        tagline: '<strong>Artificial intelligence</strong> is no longer optional. It\'s the engine that transforms cameras into analysts, access into identities, alarms into predictions, and networks into autonomous systems.',
        stats: {
          cameras: 'Active AI cameras',
          precision: 'Detection precision',
          latency: 'Response latency',
          provinces: 'DR Provinces'
        },
        cta: {
          primary: 'Start AI Project',
          secondary: 'See How AI Works'
        },
        trust: 'Trusted by',
        scroll: 'Discover'
      },

      // ===== AI SECTION =====
      ai: {
        tag: 'CORE',
        title: '<span class="gradient-text">Artificial Intelligence</span> is the engine',
        subtitle: 'We don\'t install cameras. We install <strong>digital brains</strong> that see, analyze, decide, and act in real time.',
        pipeline: {
          stage1: {
            title: 'Smart Capture',
            desc: '4K/8K cameras with embedded AI ISP. Face, plate, object, pose, anomaly detection — <strong>at the edge</strong>, zero cloud latency.',
            tech: 'TensorRT · ONNX · Edge TPU'
          },
          stage2: {
            title: 'Inference Engine',
            desc: 'NVIDIA Jetson / Orin / Xavier + YOLOv8, RT-DETR, SAM 2.0 models. <strong>200+ TOPS</strong> for simultaneous 4K multi-stream. Continuous training (MLOps).',
            tech: 'CUDA · TensorRT · Triton · MLflow',
            metrics: {
              map: '99.8% mAP',
              latency: '<50ms latency',
              streams: '32 streams/device'
            }
          },
          stage3: {
            title: 'Autonomous Action',
            desc: 'Contextual alerts, predictive unlocking, automatic blocking, traffic rerouting, network auto-healing. <strong>Zero human intervention</strong> for known events.',
            tech: 'Webhooks · MQTT · REST API · SIP'
          }
        },
        capabilities: [
          {
            title: 'Face + Palm Recognition',
            desc: '1:N identification in <200ms. Anti-spoofing liveness detection. Works with mask, glasses, look changes. GDPR-compliant.',
            tag: 'Access Control'
          },
          {
            title: 'Advanced ANPR / LPR',
            desc: '99.7% plate reading precision. Multi-country, motorcycles, trailers. Whitelist/blacklist, speed, direction, color, make/model via MMC.',
            tag: 'Vehicle'
          },
          {
            title: 'Behavioral Anomaly Detection',
            desc: 'Loitering, falls, fights, crowds, abandoned objects, perimeter intrusion, tailgating. Customizable rules per zone/schedule.',
            tag: 'Video Surveillance'
          },
          {
            title: 'Self-Managed Networks (AIOps)',
            desc: 'Adaptive QoS, predictive failover, network intrusion detection (NDR), AI bandwidth shaping, auto-config VLANs, self-healing PoE.',
            tag: 'Networks'
          },
          {
            title: 'Predictive Alarm',
            desc: 'Multi-sensor correlation + AI. False alarm <0.1%. Hardware failure prediction (disks, PSUs, cameras) 72h ahead. Real predictive maintenance.',
            tag: 'Alarms'
          },
          {
            title: 'Security Digital Twin',
            desc: '3D virtual replica of your facility. Threat simulation, model training with your data, expansion planning, remote visual audit.',
            tag: 'Platform'
          }
        ],
        cta: {
          title: 'Ready for security that thinks?',
          desc: 'AI doesn\'t replace your judgment. It amplifies it. Let\'s talk about integrating real intelligence into your operation.',
          button: 'Design My AI Solution'
        }
      },

      // ===== SERVICES SECTION =====
      services: {
        tag: 'MODULES',
        title: 'Services <span class="gradient-text">powered by AI</span>',
        subtitle: 'Every service includes inference engine, mobile app with AI alerts, analytics dashboard, and model training for your use case.',
        items: [
          {
            id: 'cctv-ia',
            title: 'AI Video Surveillance',
            subtitle: 'CCTV / IP / NVR + Analytics',
            desc: '4K/8K cameras with embedded AI ISP. Face, plate, object, pose, anomaly detection — at the edge, zero cloud latency. NVR with integrated inference engine.',
            features: [
              'Face detection 1:N <200ms + anti-spoofing',
              'ANPR/LPR 99.7% precision multi-country',
              'Behavioral anomalies: loitering, falls, fights, tailgating',
              'Smart recording: only relevant events (80% storage savings)'
            ],
            tech: 'TensorRT · ONNX · Edge TPU · YOLOv8 · RT-DETR · SAM 2.0',
            tag: 'AI MODULE'
          },
          {
            id: 'acceso-ia',
            title: 'Biometric Access Control AI',
            subtitle: 'Face + Palm + RFID + QR',
            desc: '1:N identification in <200ms. Certified liveness detection (anti-spoofing). Works with mask, glasses, look changes. Predictive unlocking on approach.',
            features: [
              'Multimodal face + palm recognition',
              'RFID 125kHz/13.56MHz/UHF + QR + Mobile NFC',
              'Predictive unlocking: detects intent before contact',
              'Immutable logs + real-time audit + GDPR'
            ],
            tech: 'ArcFace · MobileFaceNet · ISO 19794 · FIDO2 · WebAuthn',
            tag: 'AI MODULE'
          },
          {
            id: 'alarmas-ia',
            title: 'Predictive Alarms',
            subtitle: 'Multi-Sensor Correlation + AI',
            desc: 'False alarm <0.1%. Video + sensors + network + access correlation. Hardware failure prediction (disks, PSUs, cameras) 72h ahead. Real predictive maintenance.',
            features: [
              'Correlation engine: video + PIR + magnetic + network + access',
              'Disk/PSU/camera failure prediction 72h ahead (SMART + thermal)',
              'Auto-arm/disarm via geofencing + schedule + presence',
              'Automatic escalation: push → SMS → call → physical security'
            ],
            tech: 'Isolation Forest · LSTM · MQTT · SIP · Webhooks · Home Assistant',
            tag: 'AI MODULE'
          },
          {
            id: 'redes-ia',
            title: 'AIOps Networks / SD-WAN',
            subtitle: 'Auto-Healing + Adaptive QoS',
            desc: 'Self-managing networks. Adaptive QoS per app/user, predictive failover, network intrusion detection (NDR), AI bandwidth shaping, auto-config VLANs, self-healing PoE.',
            features: [
              'SD-WAN: sub-second failover, bonding 4G/5G/Fiber/Starlink',
              'AIOps: traffic anomaly detection, auto-remediation',
              'NDR (Network Detection & Response) agentless',
              'PoE watchdog: auto-restart hung cameras/APs'
            ],
            tech: 'VXLAN · SRv6 · eBPF · XDP · FRR · NetBox · Ansible · Telegraf',
            tag: 'AI MODULE'
          },
          {
            id: 'plataforma',
            title: 'Unified Platform',
            subtitle: 'Digital Twin + MLOps',
            desc: '3D virtual replica of your facility. Threat simulation, model training with your data, expansion planning, remote visual audit. CI/CD pipeline for models (MLOps).',
            features: [
              'Navigable 3D digital twin (Three.js + WebGL)',
              'Continuous training: your data → better models',
              'Unified dashboard: video + access + alarm + network + IoT',
              'Open API + Webhooks + MQTT + SIEM/SOAR Integration'
            ],
            tech: 'Three.js · WebXR · MLflow · Kubeflow · Prometheus · Grafana · OpenTelemetry',
            tag: 'PLATFORM'
          },
          {
            id: 'mantenimiento',
            title: 'Predictive Maintenance AI',
            subtitle: '24/7 Health Scoring',
            desc: 'Continuous infrastructure health monitoring. 0-100 scoring per device. Alerts before failure. 99.9% availability SLA. Automated executive reports.',
            features: [
              'Health score 0-100 per camera, NVR, switch, sensor, AP',
              'MTBF (Mean Time Between Failures) prediction per model',
              'Spare parts management: auto-stock + predictive ordering',
              'Scheduled PDF/HTML reports + executive dashboard'
            ],
            tech: 'Prometheus · VictoriaMetrics · Alertmanager · Grafana · PostgreSQL · TimescaleDB',
            tag: 'SERVICE'
          }
        ]
      },

      // ===== PROJECTS SECTION =====
      projects: {
        tag: 'REAL CASES',
        title: 'Projects where <span class="gradient-text">AI made the difference</span>',
        subtitle: 'Not installations. Operational intelligence implementations. Measurable results, real clients.',
        cta: 'I Want a Case Like These',
        items: [
          {
            id: 'hielo-central',
            client: 'Hielo Cristalizado Central',
            location: 'Santiago — Av. Estrella Sadhalá',
            year: 2024,
            services: ['24 IP 5MP AI Cameras', 'NVR 32ch + Jetson Orin', 'Facial Access 8 Doors', 'Correlated Alarm', 'SD-WAN 2 ISP + 5G Backup', 'Plant Digital Twin'],
            desc: 'Ice processing plant: 15,000 m². Challenge: freezer chambers (-30°C), 24/7 loading dock, 800m perimeter. Solution: IP69K thermal cameras + edge AI for extreme cold detection. Facial access with gloves. Redundant fiber + 5G network. Digital twin for emergency simulations.',
            features: ['Detection at -30°C zero false positives', 'Facial access with full PPE', '5G Failover <200ms', 'Digital twin emergency drills'],
            metrics: { camaras: '24', precision: '99.9%', uptime: '99.97%', ahorro_storage: '82%' },
            highlight: 'AI trained on their data: 0 false positives in 6 months'
          },
          {
            id: 'utesa',
            client: 'UTESA — Technological University',
            location: 'Santiago — Av. Salvador Estrella Sadhalá',
            year: 2024,
            services: ['48 IP 5MP AI Cameras', 'NVR 64ch + 2x Jetson AGX', 'Facial Access 24 Doors', 'Campus-wide AIOps', '10Gbps Fiber Backbone', 'Unified Platform'],
            desc: '8-building campus, 12,000 students. Problem: reactive security, unstable network, fragmented management. Solution: AI video surveillance with occupancy counting, fight/fall detection, ANPR parking. Hands-free facial access. SD-WAN with AIOps: auto-healing, QoS for online classes. Single dashboard for security + IT + rectorate.',
            features: ['Real-time occupancy counting per classroom', 'Fight/fall detection <1s', 'Auto-healing network 99.99%', 'Unified multi-department dashboard'],
            metrics: { camaras: '48', precision: '99.8%', uptime: '99.99%', incidentes_reducidos: '73%' },
            highlight: 'First university in DR with 100% edge AI security'
          },
          {
            id: 'super-truck',
            client: 'Súper Truck Logistics',
            location: 'Santiago — Free Zone',
            year: 2023,
            services: ['32 IP 4MP AI Cameras', 'NVR 32ch + Jetson Xavier', 'UHF Vehicle Access 15m', 'Perimeter AI Alarm 2km', 'Multi-site SD-WAN', 'Predictive Maintenance'],
            desc: '50,000 m² logistics center, 200 trucks/day. Challenge: high-speed plate reading, extensive perimeter, multiple sites. Solution: ANPR 99.7% at 60 km/h. IR barriers + correlated video AI (zero false alarms from wildlife). UHF long-range access (15m) for non-stop flow. SD-WAN connects 3 sites with automatic failover.',
            features: ['ANPR 60 km/h non-stop', '2km perimeter zero false alarms', 'Vehicle access 15m hands-free', '3 sites interconnected SD-WAN'],
            metrics: { camaras: '32', precision: '99.7%', throughput: '200 trucks/day', falsas_alarmas: '0/month' },
            highlight: 'Frictionless logistics: trucks enter/exit without stopping'
          },
          {
            id: 'jc-multiservice',
            client: 'JC Multiservice',
            location: 'Moca — Downtown',
            year: 2023,
            services: ['12 IP 4MP AI Cameras', 'NVR 16ch + Jetson Nano', 'Facial Access 4 Doors', 'Cat6a Certified Cabling', 'Managed PoE Switches', 'Mobile App + Dashboard'],
            desc: 'Offices + warehouse 2,000 m². Client wanted "simple but modern". Clean installation: trunking, 12U rack, Fluke-certified cabling. AI: off-hours intrusion detection, employee facial recognition, WhatsApp alerts. 24/7 remote support included. ROI: recovered investment in 8 months by preventing internal theft.',
            features: ['100% hidden installation', 'Employee + visitor facial', 'Real-time WhatsApp alerts', '24/7 remote support included'],
            metrics: { camaras: '12', precision: '99.5%', roi_meses: '8', disponibilidad: '99.9%' },
            highlight: 'ROI in 8 months: prevented 3 internal theft attempts'
          },
          {
            id: 'roda-caribe',
            client: 'Roda Caribe / Rodatari',
            location: 'La Vega — Main Highway',
            year: 2022,
            services: ['20 IP 4MP AI Cameras', 'NVR 32ch', 'Perimeter AI Alarm', '500m Fiber + PoE Switches', 'OT/IT Segregated Network', '3h UPS Autonomy'],
            desc: '10,000 m² processing factory. Zones: production (IP66/IK10), warehouses, offices, perimeter. Industrial EMT conduit cabling, watertight boxes. OT/IT segregated network (Purdue Model). AI: PPE detection (helmet/vest), hazardous zone intrusion, personnel counting. Perimeter alarm with IR barriers + video correlation.',
            features: ['Mandatory PPE detection', 'Autonomous hazardous zones', 'OT/IT Level 3.5 Purdue OT/IT', '3h industrial UPS autonomy'],
            metrics: { camaras: '20', precision: '99.6%', incidentes_seguridad: '-85%', cumplimiento_epp: '98%' },
            highlight: 'First factory in La Vega with AI-powered PPE detection'
          },
          {
            id: 'cecomsa',
            client: 'Cecomsa Finca',
            location: 'Puerto Plata — Rural Zone',
            year: 2022,
            services: ['8 Solar IP 4MP AI Cameras', 'NVR 8ch PoE + Solar Jetson Nano', 'Solar Perimeter AI Alarm', '5km WiFi Link (Ubiquiti)', '12m Galvanized Mast', 'LiFePO4 Batteries 72h'],
            desc: '100% off-grid coffee farm. Challenge: no electricity, no internet, 5km to main house. Solution: All solar (400W panels + LiFePO4 2kWh). Cameras + NVR + Jetson Nano running on 12V DC. Full edge AI offline. 5km WiFi link (airFiber) to main house for monitoring. 12m mast with lightning rod. 72h autonomy without sun.',
            features: ['100% Solar LiFePO4 (no grid power)', 'Full edge AI offline', '5km line-of-sight link', '72h autonomy without sun'],
            metrics: { camaras: '8', uptime_solar: '99.8%', autonomia_h: '72', latencia_inferencia: '45ms' },
            highlight: 'Professional AI security in the middle of nowhere, no electricity or internet'
          }
        ]
      },

      // ===== ABOUT SECTION =====
      about: {
        tag: 'PROFILE',
        title: 'The Technician Who <span class="gradient-text">Trains Models</span>',
        text: [
          'Specialist technician in <strong>IP/analog video surveillance</strong>, <strong>biometric access control</strong>, <strong>predictive alarms</strong>, and <strong>software-defined networks</strong> (SD-WAN, VXLAN, SRv6, Cat6a/Fiber Fluke-certified).',
          'Operating from <strong>Moca, Espaillat</strong> with coverage in Santiago, La Vega, Puerto Plata. Over 8 years solving installations others left half-done — and the last 3 integrating <strong>edge AI</strong> so security stops being reactive.',
          '<em>"If it\'s there, it\'s there. If it\'s not, it\'s not. If you\'re not seeing it there, it\'s because it\'s not there."</em> — Now AI sees it all, analyzes it all, and acts before you notice.'
        ],
        techStack: {
          title: 'Tech Stack',
          categories: {
            ai: 'AI / Edge',
            hardware: 'Hardware',
            networks: 'Networks / Infra'
          }
        },
        stats: [
          { label: 'AI-ready Installations', suffix: '+' },
          { label: 'Years Experience', suffix: '+' },
          { label: 'Inference Latency', suffix: 'ms' },
          { label: 'Model Precision', suffix: '%' }
        ]
      },

      // ===== TESTIMONIALS =====
      testimonials: {
        tag: 'TRUST',
        title: 'What <span class="gradient-text">My Clients Say</span>',
        subtitle: 'Real results, real people. The best reference is who already trusted.'
      },

      // ===== CERTIFICATIONS =====
      certifications: {
        tag: 'CREDENTIALS',
        title: 'Certifications & <span class="gradient-text">Technical Competencies</span>',
        subtitle: 'Continuous training and validation by leading vendors. Technology evolves, so do I.'
      },

      // ===== CONTACT SECTION =====
      contact: {
        tag: 'CONNECTION',
        title: 'Connect Your Operation with <span class="gradient-text">Real Intelligence</span>',
        subtitle: 'No endless forms. No sales calls. A direct technical conversation: you tell me your problem, I design the AI solution.',
        methods: [
          {
            label: 'Direct WhatsApp',
            value: '849-209-0080',
            note: 'Response <strong><5 min</strong> business hours'
          },
          {
            label: 'Technical Email',
            value: 'darlynmbc@gmail.com',
            note: 'For documentation, blueprints, specs'
          },
          {
            label: 'Base of Operations',
            value: 'Moca, Espaillat, DR',
            note: 'Coverage: Santiago · La Vega · Puerto Plata'
          },
          {
            label: 'AI Schedule',
            value: 'Mon-Sat 7:00-18:00',
            note: 'AI Monitoring: <strong>24/7/365</strong>'
          }
        ],
        form: {
          header: {
            label: 'Smart Form'
          },
          fields: {
            name: {
              label: 'Full Name *',
              placeholder: 'Darlyn Miguel Batista Caraballo'
            },
            contact: {
              label: 'WhatsApp or Email *',
              placeholder: '849-XXX-XXXX or your@email.com'
            },
            service: {
              label: 'Module of Interest *',
              placeholder: 'Select AI module',
              options: {
                '': 'Select AI module',
                'cctv-ia': '🎥 AI Video Surveillance (CCTV/IP/NVR + Analytics)',
                'acceso-ia': '🚪 Biometric Access Control + AI',
                'alarmas-ia': '🛡️ Predictive Alarms + AI Correlation',
                'redes-ia': '🌐 SD-WAN / AIOps / Auto-Healing Networks',
                'plataforma': '🧠 Complete Platform (Digital Twin + MLOps)',
                'mantenimiento': '🔧 Predictive Maintenance AI',
                'otro': '💡 Other / Technical Advisory'
              }
            },
            message: {
              label: 'Describe Your Operation / Problem *',
              placeholder: 'Ex: \'I have 3 warehouses in Santiago, need perimeter intrusion detection, vehicle plate reading at access, and everything in one app. Currently have 12 old analog cameras.\''
            }
          },
          submit: 'Send to WhatsApp with AI',
          loading: 'Generating context...',
          note: 'Your message arrives pre-formatted with technical context. Just hit send.'
        }
      },

      // ===== FOOTER =====
      footer: {
        tagline: 'Intelligent electronic security. <span class="gradient-text">AI at the edge.</span> Clean installation, trained models, millisecond decisions.',
        aiBadge: 'Powered by <strong>Edge AI</strong> · NVIDIA Jetson · TensorRT · YOLOv8 · SAM 2.0',
        nav: {
          services: {
            title: 'AI Modules',
            items: ['AI Video Surveillance', 'AI Access Control', 'Predictive Alarms', 'AIOps Networks', 'Unified Platform']
          },
          company: {
            title: 'Company',
            items: ['How AI Works', 'Real Cases', 'Technical Profile', 'Direct Contact']
          },
          coverage: {
            title: 'DR Coverage',
            items: ['Moca, Espaillat (Base)', 'Santiago de los Caballeros', 'La Vega', 'Puerto Plata']
          }
        },
        copyright: '© 2025 Darlyn Miguel Batista Caraballo. Security engineering with AI.',
        techBadge: [
          'Deployed on Cloudflare Pages',
          'Global Edge Network',
          'HTML/CSS/JS Vanilla · Zero Framework',
          'Let\'s Talk'
        ]
      },

      // ===== WHATSAPP FLOAT =====
      whatsapp: {
        tooltip: 'WhatsApp AI',
        title: 'Start AI Project'
      },

      // ===== SEO / META =====
      meta: {
        title: 'DMB Security | Intelligent Electronic Security with AI',
        description: 'Darlyn Miguel Batista Caraballo - Electronic Security & Networks Specialist with AI. Intelligent Video Surveillance, Biometric Access Control, Predictive Alarms, Software-Defined Networks. Moca, Santiago, La Vega, Puerto Plata.',
        ogTitle: 'DMB Security | Intelligent Electronic Security with AI',
        ogDescription: 'The future of security is already here. AI + CCTV + Access Control + Networks. 150+ installations. Dominican Republic.',
        ogLocale: 'en_US'
      },

      // ===== COMMON =====
      common: {
        loading: 'Loading...',
        error: 'Error',
        close: 'Close',
        back: 'Back',
        next: 'Next',
        previous: 'Previous',
        viewMore: 'View More',
        viewLess: 'View Less',
        readMore: 'Read More',
        contactUs: 'Contact Us',
        sendMessage: 'Send Message',
        required: '*',
        optional: 'Optional',
        selectOption: 'Select option',
        noData: 'No data available',
        language: 'Language',
        spanish: 'Español',
        english: 'English'
      }
    }
  };

  // ========================================
  // I18N CLASS
  // ========================================
  class I18n {
    constructor() {
      this.currentLang = this.getInitialLanguage();
      this.translations = I18N[this.currentLang];
      this.observers = new Set();
      this.init();
    }

    getInitialLanguage() {
      // Check localStorage first
      const saved = localStorage.getItem('dmb-lang');
      if (saved && I18N[saved]) return saved;

      // Check browser language
      const browserLang = navigator.language || navigator.userLanguage;
      if (browserLang.startsWith('en')) return 'en';

      return 'es'; // Default to Spanish
    }

    init() {
      // Set HTML lang attribute
      document.documentElement.lang = this.currentLang;

      // Translate static content on DOM ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.translatePage());
      } else {
        this.translatePage();
      }
    }

    // Get translation by dot-notation key
    t(key, params = {}) {
      const keys = key.split('.');
      let value = this.translations;

      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          console.warn(`[i18n] Missing translation: ${key} (${this.currentLang})`);
          return key; // Return key as fallback
        }
      }

      // Handle string interpolation
      if (typeof value === 'string') {
        return value.replace(/\{\{(\w+)\}\}/g, (match, param) => params[param] || match);
      }

      return value;
    }

    // Get nested object (for arrays, complex structures)
    getObject(key) {
      const keys = key.split('.');
      let value = this.translations;

      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          return null;
        }
      }

      return value;
    }

    // Switch language
    setLanguage(lang) {
      if (!I18N[lang] || lang === this.currentLang) return false;

      this.currentLang = lang;
      this.translations = I18N[lang];

      // Persist
      localStorage.setItem('dmb-lang', lang);

      // Update HTML lang
      document.documentElement.lang = lang;

      // Update meta tags
      this.updateMetaTags();

      // Re-translate page
      this.translatePage();

      // Notify observers
      this.notifyObservers();

      return true;
    }

    // Update SEO meta tags
    updateMetaTags() {
      const meta = this.translations.meta;

      // Title
      document.title = meta.title;

      // Meta description
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', meta.description);

      // Open Graph
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', meta.ogTitle);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', meta.ogDescription);

      const ogLocale = document.querySelector('meta[property="og:locale"]');
      if (ogLocale) ogLocale.setAttribute('content', meta.ogLocale);

      // Twitter
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute('content', meta.ogTitle);

      const twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute('content', meta.ogDescription);
    }

    // Translate all elements with data-i18n attribute
    translatePage() {
      // Elements with data-i18n (text content)
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = this.t(key);

        // Check if it's an input placeholder
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
          if (el.hasAttribute('placeholder')) {
            el.setAttribute('placeholder', translation);
          } else {
            el.textContent = translation;
          }
        }
        // Check if it's an option element
        else if (el.tagName === 'OPTION') {
          el.textContent = translation;
        }
        // Check if it has HTML content (allowHTML)
        else if (el.hasAttribute('data-i18n-html')) {
          el.innerHTML = translation;
        }
        // Regular text content
        else {
          el.textContent = translation;
        }
      });

      // Elements with data-i18n-html (HTML content)
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        const translation = this.t(key);
        el.innerHTML = translation;
      });

      // Elements with data-i18n-attr (attribute translation)
      document.querySelectorAll('[data-i18n-attr]').forEach(el => {
        const attrMap = el.getAttribute('data-i18n-attr');
        try {
          const attrs = JSON.parse(attrMap);
          Object.entries(attrs).forEach(([attr, key]) => {
            const translation = this.t(key);
            el.setAttribute(attr, translation);
          });
        } catch (e) {
          console.warn('[i18n] Invalid data-i18n-attr JSON:', attrMap);
        }
      });

      // Update language switcher UI
      this.updateLanguageSwitcher();
    }

    // Update language switcher active state
    updateLanguageSwitcher() {
      document.querySelectorAll('.lang-btn').forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        btn.classList.toggle('active', lang === this.currentLang);
        btn.setAttribute('aria-pressed', lang === this.currentLang);
      });
    }

    // Observer pattern for dynamic content
    subscribe(callback) {
      this.observers.add(callback);
      return () => this.observers.delete(callback);
    }

    notifyObservers() {
      this.observers.forEach(cb => {
        try {
          cb(this.currentLang, this.translations);
        } catch (e) {
          console.error('[i18n] Observer error:', e);
        }
      });
    }

    // Get current language
    getLanguage() {
      return this.currentLang;
    }

    // Get all translations for current language
    getAll() {
      return this.translations;
    }
  }

  // ========================================
  // EXPORT
  // ========================================
  window.I18n = I18n;
  window.i18n = new I18n();

  // Global helper function
  window.t = (key, params) => window.i18n.t(key, params);
  window.getI18nObject = (key) => window.i18n.getObject(key);

})();