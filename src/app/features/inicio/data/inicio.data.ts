import {
  AboutPillar,
  AiCapability,
  ContactChannel,
  ProjectItem,
  ServiceItem,
  StatItem,
} from '../../../shared/models/site.models';

export const HERO_STATS: StatItem[] = [
  {
    label: 'Experiencia comprobada',
    value: '+120',
    detail: 'Proyectos desplegados en producción global.',
  },
  {
    label: 'Resiliencia crítica',
    value: '99.98%',
    detail: 'Uptime auditado y rendimiento sostenido.',
  },
  {
    label: 'Presencia global',
    value: '15+',
    detail: 'Países con infraestructura activa Astra.',
  },
  {
    label: 'Satisfacción técnica',
    value: '4.9/5',
    detail: 'Calificación de fundadores y directores de IT.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    icon: 'cloud_sync',
    title: 'Arquitectura Cloud & Backend escalable',
    description:
      'Microservicios, orquestación elástica y APIs robustas para millones de consultas concurrentes.',
    tags: ['Kubernetes', 'AWS / GCP', 'Go / gRPC'],
    image: '/services/custom.jpg',
    imageAlt: 'Arquitectura cloud',
  },
  {
    icon: 'web',
    title: 'Aplicaciones Web & SaaS',
    description:
      'Interfaces reactivas, rendering instantáneo y productos web complejos con precisión milimétrica.',
    tags: ['Angular', 'TypeScript', 'GraphQL'],
    image: '/services/web.jpg',
    imageAlt: 'Aplicaciones web',
  },
  {
    icon: 'devices',
    title: 'Mobile nativo y multiplataforma',
    description:
      'Apps fluidas, integración con hardware, sincronización offline-first y diseño háptico.',
    tags: ['Flutter', 'Swift / Kotlin', 'React Native'],
    image: '/services/mobile.jpg',
    imageAlt: 'Aplicaciones móviles',
  },
  {
    icon: 'neurology',
    title: 'Inteligencia Artificial aplicada',
    description:
      'Agentes, RAG, visión artificial y modelos generativos conectados a tus sistemas de negocio.',
    tags: ['LangChain', 'PyTorch', 'Vector DBs'],
    image: '/services/custom.jpg',
    imageAlt: 'Inteligencia artificial',
  },
  {
    icon: 'security',
    title: 'Ciberseguridad & DevOps',
    description:
      'CI/CD, infraestructura inmutable, auditorías de código y hardening continuo de plataformas.',
    tags: ['Terraform', 'GitHub Actions', 'SOC2'],
    image: '/services/consulting.jpg',
    imageAlt: 'Ciberseguridad',
  },
  {
    icon: 'sync_saved_locally',
    title: 'Modernización de sistemas legacy',
    description:
      'Migración de monolitos a arquitecturas modulares sin cortar el servicio ni perder datos.',
    tags: ['Refactorización', 'ETL', 'Event Driven'],
    image: '/services/inventory.jpg',
    imageAlt: 'Modernización de sistemas',
  },
];

export const AI_CAPABILITIES: AiCapability[] = [
  {
    icon: 'smart_toy',
    title: 'Agentes autónomos',
    description:
      'Asistentes que ejecutan flujos de negocio, consultan APIs internas y escalan tickets con supervisión humana.',
  },
  {
    icon: 'database',
    title: 'RAG corporativo',
    description:
      'Bases de conocimiento privadas sobre documentos, tickets y ERP, con citas verificables y control de acceso.',
  },
  {
    icon: 'visibility',
    title: 'Visión e inferencia',
    description:
      'Clasificación, OCR y detección en planta, retail o documentos con pipelines de inferencia en GPU.',
  },
  {
    icon: 'tune',
    title: 'Fine-tuning y evaluación',
    description:
      'Ajuste de modelos al dominio de tu empresa, con métricas de calidad, latencia y costo por request.',
  },
];

export const ABOUT_PILLARS: AboutPillar[] = [
  {
    icon: 'tune',
    title: 'Precisión absoluta en código',
    description:
      'Tipado estricto, pruebas automatizadas y cobertura continua superior al 95%.',
  },
  {
    icon: 'trending_up',
    title: 'Enfoque en negocio y escala',
    description:
      'Reducimos costo de infraestructura y aceleramos el time-to-market con arquitectura medible.',
  },
  {
    icon: 'bolt',
    title: 'Ágil, sin burocracia',
    description:
      'Equipos senior en sprints transparentes, con entregas tangibles cada 10 días.',
  },
];

export const TECH_STACK = [
  'Python / FastAPI',
  'Angular',
  'TypeScript',
  'Go',
  'Docker & K8s',
  'AWS',
  'PostgreSQL',
  'LangChain',
  'PyTorch',
];

export const PROJECTS: ProjectItem[] = [
  {
    code: 'FINTECH // 01',
    sector: 'Servicios financieros',
    title: 'FinPulse Enterprise',
    description:
      'Pagos transfronterizos con motor de riesgo y detección de fraude por ML en menos de 45 ms.',
    metrics: [
      { label: 'Transacciones', value: '$12M+ / mes' },
      { label: 'Latencia reducida', value: '-40%' },
      { label: 'Cumplimiento', value: 'PCI-DSS L1' },
    ],
    tags: ['Go Microservices', 'Kafka', 'AWS ECS'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBFX-N3kJ6FDmbC6cy7hdnYkYhrolwaj0UznQ2ErSxId6j-rK3nDit8NuslsTfnMEYVP8PtNDYADqY_D68STbKWxQ4y8zBbaDqJgECFSMhJ4A6RWO8c8JAcshhCbvvn9uCr4oYrn48JcO309q8l94WT7H48VNOSuPxGd5ty4Xu-4tjSfF4xAECkAa63RyiPORqQvMme-TSC0sWLRbOaeCGsJwYcTR8508oa4PeCJFEZqv6M4W1OyZ0G',
    imageAlt: 'Dashboard fintech con gráficos y telemetría de seguridad',
  },
  {
    code: 'SUPPLY CHAIN // 02',
    sector: 'IA & logística',
    title: 'OmniLogistics AI',
    description:
      'Predicción de demanda y optimización de flotas con telemetría IoT en tiempo real.',
    metrics: [
      { label: 'Ahorro en rutas', value: '28.4%' },
      { label: 'Eventos IoT / seg', value: '+250,000' },
      { label: 'Precisión modelo', value: '98.2%' },
    ],
    tags: ['Python PyTorch', 'Rust Backend', 'PostGIS'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC85pcLKIeRZLUskwHw0THbGczAJ6VbZkRKepKRojq1MHCzRG6xtryhYHg8DcNa2kewAjmHbJziPxvWsvGKC1OZhXAZBz09nZQfzHEP_gw-AHXfZefo0OhVUP9NBwT_xIO-cpA47gLkBVnOcTF04ZcAOb-Gx9Ux5RJ-wQocvn7DbNhlVizWoTgh7u4Xu7mHAZJFNJYCVQeuBZ5dg2geAhrRwufngLGdMqk3Gp6fZ56LXpXgsWjLZ5WY',
    imageAlt: 'Red logística global con rutas y arquitectura de nodos',
  },
  {
    code: 'HEALTH-TECH // 03',
    sector: 'Infraestructura médica',
    title: 'NexHealth Core',
    description:
      'Red clínica FHIR con cifrado de extremo a extremo y telemedicina WebRTC segura.',
    metrics: [
      { label: 'Pacientes atendidos', value: '3.2M' },
      { label: 'Cifrado', value: 'AES-256 E2E' },
      { label: 'Certificación', value: 'HIPAA' },
    ],
    tags: ['TypeScript', 'WebRTC', 'PostgreSQL'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOmEhntbpzAnt7n0ZlwXygDXMkwkwVrZbyC2nQUsib9AHMwlWpgAN4blQ4z5Z3G0mOKni4nB4FO-Df5X--n37rUHkm8Ivvhsh4kBsxodIMpBMPLz3TpvmdCMwf2fmvjf2JtMmQXLGx6DbUqbeZPRGsIkjeE_c8HSjhQCry0obsTx1iUe_Lln4gTsgGP1zHHyPvCfkSWfv-hXLfTspq2uFi46PvMpuecso-J-qrGDw6LvefVLGF3gTH',
    imageAlt: 'Interfaz médica digital con telemetría hospitalaria cifrada',
  },
];

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    icon: 'alternate_email',
    label: 'Correo corporativo',
    value: 'contacto@astradev.tech',
    href: 'mailto:contacto@astradev.tech',
  },
  {
    icon: 'hub',
    label: 'Sede central & hubs',
    value: 'Silicon Valley • Santiago • Madrid',
  },
  {
    icon: 'nest_clock_farsight_analog',
    label: 'SLA de respuesta',
    value: '< 12 horas para consultas de arquitectura',
  },
];

export const SOLUTION_OPTIONS = [
  { value: 'cloud', label: 'Arquitectura Cloud / Microservicios' },
  { value: 'saas', label: 'Plataforma Web SaaS / Aplicación' },
  { value: 'ai', label: 'Inteligencia Artificial & Data Pipeline' },
  { value: 'mobile', label: 'Aplicación mobile multiplataforma' },
  { value: 'devops', label: 'Auditoría DevOps & Ciberseguridad' },
  { value: 'legacy', label: 'Modernización de sistema legacy' },
];

export const BUDGET_OPTIONS = [
  { value: 'piloto', label: 'Piloto / demo' },
  { value: 'producto', label: 'Producto' },
  { value: 'plataforma', label: 'Plataforma' },
  { value: 'definir', label: 'A definir' },
];
