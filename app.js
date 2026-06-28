/**
 * DMB SEGURIDAD — APP.JS
 * Futuristic AI Portfolio Interactions
 * Darlyn Miguel Batista Caraballo
 */

(function() {
  'use strict';

  // ========================================
  // DATA
  // ========================================
  const SERVICES = [
    {
      id: 'cctv-ia',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/><circle cx="12" cy="12" r="3"/></svg>`,
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
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
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
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>`,
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
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="1" width="22" height="22" rx="2"/><path d="M7 11h10"/><path d="M7 16h10"/><path d="M12 7v10"/></svg>`,
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
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2z"/><path d="M12 6v6l4 2"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>`,
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
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
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
  ];

  const PROJECTS = [
    {
      id: 'hielo-central',
      client: 'Hielo Cristalizado Central',
      location: 'Santiago — Av. Estrella Sadhalá',
      year: 2024,
      services: ['24 Cámaras IP 5MP IA', 'NVR 32ch + Jetson Orin', 'Control acceso facial 8 puertas', 'Alarma correlacionada', 'SD-WAN 2 ISP + 5G backup', 'Gemelo digital planta'],
      desc: 'Planta procesadora de hielo: 15,000 m². El reto: cámaras frigoríficas (-30°C), muelle de carga 24/7, perímetro 800m. Solución: Cámaras IP69K térmicas + IA edge para detección en frío extremo. Control acceso facial con guantes. Red redundante fibra + 5G. Gemelo digital para simulaciones de emergencia.',
      features: ['Detección -30°C sin falsos positivos', 'Acceso facial con EPP completo', 'Failover 5G <200ms', 'Simulacros en gemelo digital'],
      metrics: { camaras: 24, precision: '99.9%', uptime: '99.97%', ahorro_storage: '82%' },
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
      metrics: { camaras: 48, precision: '99.8%', uptime: '99.99%', incidentes_reducidos: '73%' },
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
      metrics: { camaras: 32, precision: '99.7%', throughput: '200 camiones/día', falsas_alarmas: '0/mes' },
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
      metrics: { camaras: 12, precision: '99.5%', roi_meses: 8, disponibilidad: '99.9%' },
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
      metrics: { camaras: 20, precision: '99.6%', incidentes_seguridad: '-85%', cumplimiento_epp: '98%' },
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
      metrics: { camaras: 8, uptime_solar: '99.8%', autonomia_h: 72, latencia_inferencia: '45ms' },
      highlight: 'Seguridad IA profesional en medio del campo, sin electricidad ni internet'
    }
  ];

  // NEW: Testimonials data
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

  // NEW: Certifications data
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

  // ========================================
  // UTILITIES
  // ========================================
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

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
  // RENDER FUNCTIONS
  // ========================================
  function renderServices() {
    const grid = $('#servicesGrid');
    if (!grid) return;
    grid.innerHTML = SERVICES.map((s, i) => `
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
          <span class="tech-label">Stack:</span>
          <span class="tech-list">${s.tech}</span>
        </div>
      </article>
    `).join('');
  }

  function renderProjects() {
    const grid = $('#projectsGrid');
    if (!grid) return;
    const placeholderSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M3 21h18M3 17h18M3 13h18M3 9h18"/></svg>`;
    
    grid.innerHTML = PROJECTS.map((p, i) => `
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

  // NEW: Render Testimonials
  function renderTestimonials() {
    const grid = $('#testimonialsGrid');
    if (!grid) return;
    
    grid.innerHTML = TESTIMONIALS.map((t, i) => `
      <article class="testimonial-card animate-on-scroll delay-${(i % 6) + 1}" data-testimonial="${t.id}">
        <div class="testimonial-header">
          <div class="testimonial-avatar" aria-hidden="true">${t.avatar}</div>
          <div class="testimonial-meta">
            <h4 class="testimonial-name">${t.client}</h4>
            <p class="testimonial-role">${t.role} · ${t.company}</p>
          </div>
        </div>
        <div class="testimonial-rating" aria-label="${t.rating} de 5 estrellas">
          ${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}
        </div>
        <blockquote class="testimonial-quote">
          <p>"${t.quote}"</p>
        </blockquote>
        <div class="testimonial-metric">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2z"/><path d="M12 6v6l4 2"/></svg>
          <span>${t.metric}</span>
        </div>
      </article>
    `).join('');
  }

  // NEW: Render Certifications
  function renderCertifications() {
    const grid = $('#certsGrid');
    if (!grid) return;
    
    // Group by category
    const categories = ['IA / Edge', 'Hardware', 'Redes / Infra', 'Alarmas'];
    
    grid.innerHTML = categories.map(cat => {
      const certs = CERTIFICATIONS.filter(c => c.category === cat);
      if (certs.length === 0) return '';
      return `
        <div class="cert-category">
          <h3 class="cert-category-title">${cat}</h3>
          <div class="cert-grid">
            ${certs.map(c => `
              <article class="cert-card" data-cert="${c.id}">
                <div class="cert-icon" aria-hidden="true">${c.icon}</div>
                <div class="cert-content">
                  <h4 class="cert-name">${c.name}</h4>
                  <p class="cert-issuer">${c.issuer} · ${c.year}</p>
                </div>
                ${c.verified ? '<span class="cert-verified" title="Verificada"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></span>' : ''}
              </article>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');
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
  // CONTACT FORM — WhatsApp deep link with AI context + validation
  // ========================================
  function initContactForm() {
    const form = $('#contactForm');
    const whatsappNumber = '18492090080';
    const submitBtn = form?.querySelector('button[type="submit"]');
    const btnText = submitBtn?.querySelector('.btn-text');
    const btnLoading = submitBtn?.querySelector('.btn-loading');

    // Real-time validation
    const validators = {
      name: (value) => value.trim().length >= 2 ? '' : 'Nombre muy corto (mín. 2 caracteres)',
      contact: (value) => {
        const v = value.trim();
        const phoneRegex = /^(\+?1?[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return (phoneRegex.test(v) || emailRegex.test(v)) ? '' : 'Ingresa WhatsApp válido (849-XXX-XXXX) o email';
      },
      service: (value) => value ? '' : 'Selecciona un módulo de interés',
      message: (value) => value.trim().length >= 20 ? '' : 'Describe tu operación con más detalle (mín. 20 caracteres)'
    };

    // Show/hide error
    function showError(fieldName, message) {
      const field = form.querySelector(`[name="${fieldName}"]`);
      const errorEl = form.querySelector(`#${fieldName}-error`);
      if (field && errorEl) {
        field.setAttribute('aria-invalid', message ? 'true' : 'false');
        errorEl.textContent = message;
        errorEl.style.display = message ? 'block' : 'none';
      }
    }

    // Validate on blur
    Object.keys(validators).forEach(fieldName => {
      const field = form.querySelector(`[name="${fieldName}"]`);
      if (field) {
        field.addEventListener('blur', () => {
          showError(fieldName, validators[fieldName](field.value));
        });
        field.addEventListener('input', () => {
          if (field.getAttribute('aria-invalid') === 'true') {
            showError(fieldName, validators[fieldName](field.value));
          }
        });
      }
    });

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Honeypot check
      const honeypot = form.querySelector('[name="website"]');
      if (honeypot && honeypot.value) {
        // Spam bot detected - silently succeed but don't send
        form.reset();
        return;
      }

      // Validate all fields
      let hasErrors = false;
      Object.keys(validators).forEach(fieldName => {
        const field = form.querySelector(`[name="${fieldName}"]`);
        if (field) {
          const error = validators[fieldName](field.value);
          showError(fieldName, error);
          if (error) hasErrors = true;
        }
      });

      if (hasErrors) {
        // Shake animation
        form.style.animation = 'shake 0.4s ease';
        setTimeout(() => form.style.animation = '', 400);
        return;
      }

      const data = new FormData(form);
      const name = data.get('name')?.trim();
      const contact = data.get('contact')?.trim();
      const service = data.get('service');
      const message = data.get('message')?.trim();

      // Loading state
      if (submitBtn) {
        submitBtn.classList.add('btn-loading');
        submitBtn.disabled = true;
      }

      // Simulate AI context generation
      await new Promise(r => setTimeout(r, 800));

      const serviceLabels = {
        'cctv-ia': '🎥 Videovigilancia IA (CCTV/IP/NVR + Analytics)',
        'acceso-ia': '🚪 Control Acceso Biométrico + IA',
        'alarmas-ia': '🛡️ Alarmas Predictivas + Correlación IA',
        'redes-ia': '🌐 Redes SD-WAN / AIOps / Auto-Healing',
        'plataforma': '🧠 Plataforma Completa (Gemelo Digital + MLOps)',
        'mantenimiento': '🔧 Mantenimiento Predictivo IA',
        'otro': '💡 Asesoría Técnica Personalizada'
      };

      const timestamp = new Date().toLocaleString('es-DO', { timeZone: 'America/Santo_Domingo' });
      
      const text = 
`🤖 *NUEVO PROYECTO IA — DMB Seguridad*

👤 *Cliente:* ${name}
📞 *Contacto:* ${contact}
🎯 *Módulo:* ${serviceLabels[service] || service}
🕐 *Fecha:* ${timestamp}

📋 *Detalles de la operación:*
${message}

---
_Enviado desde portafolio IA DMB Seguridad_`;

      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');

      // Reset button
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.classList.remove('btn-loading');
          submitBtn.disabled = false;
        }
        form.reset();
        Object.keys(validators).forEach(fieldName => showError(fieldName, ''));
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
  // INIT ALL
  // ========================================
  function init() {
    renderServices();
    renderProjects();
    renderTestimonials();  // NEW
    renderCertifications(); // NEW
    renderSkills();
    renderClients();

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
    
    .error-message {
      display: none;
      font-size: 0.75rem;
      color: #ef4444;
      margin-top: 0.375rem;
      font-family: var(--font-mono);
    }
    
    .honeypot { display: none !important; position: absolute; left: -9999px; }
    
    [aria-invalid="true"] {
      border-color: #ef4444 !important;
      box-shadow: 0 0 0 3px rgba(239,68,68,0.15) !important;
    }
  `;
  document.head.appendChild(style);
})();