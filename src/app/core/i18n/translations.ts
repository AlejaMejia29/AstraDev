import { whatsappUrl } from '../../shared/utils/whatsapp';
import { AppCopy, Lang } from './i18n.models';

export const TRANSLATIONS: Record<Lang, AppCopy> = {
  es: {
    title: 'AstraDev — Software a la medida e Inteligencia Artificial',
    nav: [
      { label: 'Soluciones', fragment: 'servicios' },
      { label: 'IA', fragment: 'ia' },
      { label: 'Proceso', fragment: 'proceso' },
      { label: 'Proyectos', fragment: 'proyectos' },
      { label: 'Preguntas', fragment: 'preguntas' },
      { label: 'Contacto', fragment: 'contacto' },
    ],
    header: {
      quote: 'Cotizar',
      openMenu: 'Abrir menú',
      language: 'Cambiar idioma',
      theme: 'Cambiar tema',
    },
    whatsapp: {
      href: whatsappUrl('Hola Astra Dev, quiero cotizar un proyecto.'),
      phone: '314 872 1707',
    },
    floating: {
      label: 'Cotizar por WhatsApp',
      aria: 'Escribir a Astra Dev por WhatsApp',
    },
    hero: {
      badge: 'Astra Dev · Ideas que construyen futuro',
      title: 'Software a la medida que',
      highlight: 'hace crecer tu negocio.',
      body: 'Creamos sistemas POS, ERP y CRM, plataformas SaaS, páginas web y bots de WhatsApp con inteligencia artificial. Todo pensado para la forma en que trabaja tu empresa.',
      ctaPrimary: 'Cotizar por WhatsApp',
      ctaSecondary: 'Ver soluciones',
      trust: [
        'Te explicamos todo sin tecnicismos',
        'Entregas por etapas',
        'Acompañamiento después de lanzar',
      ],
      chat: {
        name: 'Asistente de tu tienda',
        status: 'en línea',
        messages: [
          { from: 'client', text: 'Hola, ¿tienen los tenis blancos en talla 40?' },
          {
            from: 'business',
            text: '¡Hola! Sí, nos quedan 3 pares. Cuestan $189.900. ¿Te aparto unos?',
          },
          { from: 'client', text: 'Sí, por favor. Paso hoy en la tarde.' },
          {
            from: 'business',
            text: 'Listo, quedaron a tu nombre hasta las 7:00 p. m. ¡Te esperamos!',
          },
        ],
        notificationTitle: 'Venta apartada en tu POS',
        notificationBody: 'El inventario se actualizó solo.',
      },
    },
    services: {
      eyebrow: 'Soluciones',
      title: 'Todo el software que tu negocio necesita',
      intro:
        'Elige por dónde empezar. Cada solución se adapta a tu negocio y puede crecer con él.',
      idealFor: 'Ideal para',
      cta: 'Cotizar',
      unsureTitle: '¿No sabes cuál necesitas?',
      unsureBody: 'Cuéntanos qué quieres resolver y te recomendamos la mejor opción.',
      unsureCta: 'Pedir asesoría',
      unsureHref: whatsappUrl(
        'Hola Astra Dev, quiero mejorar mi negocio con software pero no sé por dónde empezar.',
      ),
      items: [
        {
          icon: 'point_of_sale',
          title: 'Sistema POS',
          description:
            'Cobra rápido, factura y controla la caja. Sabes qué se vendió cada día sin hojas de cálculo.',
          idealFor: 'tiendas, restaurantes y ferreterías',
          href: whatsappUrl('Hola Astra Dev, quiero cotizar un sistema POS.'),
        },
        {
          icon: 'inventory_2',
          title: 'ERP',
          description:
            'Inventario, compras, ventas y reportes conectados en un solo sistema para toda la empresa.',
          idealFor: 'distribuidoras y empresas en crecimiento',
          href: whatsappUrl('Hola Astra Dev, quiero cotizar un ERP.'),
        },
        {
          icon: 'groups',
          title: 'CRM',
          description:
            'Organiza clientes y oportunidades. Haz seguimiento a cada venta para que ninguna se pierda.',
          idealFor: 'equipos comerciales y empresas de servicios',
          href: whatsappUrl('Hola Astra Dev, quiero cotizar un CRM.'),
        },
        {
          icon: 'chat',
          title: 'Bots de WhatsApp',
          description:
            'Un asistente con IA que responde, agenda y vende por WhatsApp a cualquier hora del día.',
          idealFor: 'negocios que reciben muchos mensajes',
          href: whatsappUrl('Hola Astra Dev, quiero cotizar un bot de WhatsApp.'),
        },
        {
          icon: 'neurology',
          title: 'Integraciones de IA',
          description:
            'Conectamos inteligencia artificial a tus sistemas para automatizar tareas y responder con tu propia información.',
          idealFor: 'empresas que quieren ahorrar tiempo',
          href: whatsappUrl('Hola Astra Dev, quiero integrar inteligencia artificial en mi negocio.'),
        },
        {
          icon: 'cloud',
          title: 'Plataformas SaaS',
          description:
            'Convertimos tu idea en un producto web por suscripción, listo para recibir usuarios y cobrar.',
          idealFor: 'emprendedores y startups',
          href: whatsappUrl('Hola Astra Dev, quiero cotizar una plataforma SaaS.'),
        },
        {
          icon: 'web',
          title: 'Páginas web y landing pages',
          description:
            'Sitios rápidos y claros que explican lo que haces y convierten visitas en clientes.',
          idealFor: 'negocios que quieren vender en línea',
          href: whatsappUrl('Hola Astra Dev, quiero cotizar una página web.'),
        },
        {
          icon: 'settings_suggest',
          title: 'Sistemas a la medida',
          description:
            '¿Tu proceso no encaja en ningún programa? Lo construimos a tu forma de trabajar.',
          idealFor: 'operaciones con necesidades únicas',
          href: whatsappUrl('Hola Astra Dev, quiero cotizar un sistema a la medida.'),
        },
      ],
    },
    sectors: {
      eyebrow: 'Para quién',
      title: '¿Tu negocio se parece a alguno de estos?',
      intro: 'Estos son algunos de los problemas que resolvemos todos los días.',
      items: [
        {
          icon: 'storefront',
          title: 'Tiendas y comercios',
          description: 'Caja, inventario y ventas en línea en un mismo lugar.',
        },
        {
          icon: 'restaurant',
          title: 'Restaurantes',
          description: 'Pedidos, domicilios y reservas que llegan por WhatsApp.',
        },
        {
          icon: 'medical_services',
          title: 'Clínicas y consultorios',
          description: 'Agenda de citas y recordatorios automáticos para tus pacientes.',
        },
        {
          icon: 'local_shipping',
          title: 'Distribuidoras',
          description: 'Pedidos, bodegas y cartera bajo control.',
        },
        {
          icon: 'work',
          title: 'Servicios profesionales',
          description: 'Clientes, cotizaciones y seguimiento comercial ordenados.',
        },
        {
          icon: 'rocket_launch',
          title: 'Emprendedores',
          description: 'Tu idea convertida en una app o plataforma lista para vender.',
        },
      ],
    },
    ia: {
      eyebrow: 'Inteligencia artificial',
      title: 'Un bot de WhatsApp que atiende por ti',
      intro:
        'La IA responde, agenda y explica lo que ofreces, en WhatsApp o en tu web, mientras tú operas el negocio.',
      discoveryLabel: 'Pruébalo con tu negocio',
      discoveryBody:
        'Te armamos una demo con tus preguntas reales. Escríbenos por WhatsApp y lo vemos juntos.',
      discoveryCta: 'Pedir una demo',
      discoveryHref: whatsappUrl('Hola Astra Dev, quiero una demo del bot de WhatsApp.'),
      items: [
        {
          icon: 'chat',
          title: 'Responde al instante',
          description: 'Atiende preguntas frecuentes mientras tú vendes o trabajas.',
        },
        {
          icon: 'schedule',
          title: 'Agenda por ti',
          description: 'Reserva citas y da seguimiento sin alguien pegado al chat.',
        },
        {
          icon: 'menu_book',
          title: 'Explica tus servicios',
          description: 'Cuenta precios, horarios y qué incluye cada oferta, con tu tono.',
        },
        {
          icon: 'link',
          title: 'Se conecta a tu operación',
          description: 'Lo integramos a tu web, inventario o agenda, no queda suelto.',
        },
      ],
    },
    process: {
      eyebrow: 'Cómo trabajamos',
      title: 'De la idea a tu sistema funcionando, en 4 pasos',
      intro: 'Sin tecnicismos y sin sorpresas: siempre sabes en qué va tu proyecto.',
      cta: 'Empezar con el paso 1',
      steps: [
        {
          title: 'Hablamos',
          description:
            'Nos cuentas cómo funciona tu negocio y qué quieres resolver, por WhatsApp o en una llamada.',
        },
        {
          title: 'Te proponemos',
          description: 'Recibes una propuesta con alcance, etapas y precio antes de empezar.',
        },
        {
          title: 'Construimos por etapas',
          description:
            'Ves avances reales, das tu opinión y empiezas a usar partes del sistema desde temprano.',
        },
        {
          title: 'Lanzamos y acompañamos',
          description:
            'Lo ponemos en marcha con tu equipo y seguimos mejorándolo contigo.',
        },
      ],
    },
    about: {
      eyebrow: 'Astra Dev',
      title: 'Convertimos ideas en resultados.',
      body: 'Tecnología para negocios reales. Acompañamos cada etapa del proyecto: desde la idea hasta un sistema que crece contigo y genera resultados medibles.',
      stack: 'Tecnologías que usamos',
      pillars: [
        {
          icon: 'verified',
          title: 'Tecnología confiable',
          description: 'Software estable, seguro y listo para operar el día a día de tu empresa.',
        },
        {
          icon: 'group',
          title: 'Acompañamiento en cada etapa',
          description: 'No entregamos y desaparecemos: te ayudamos a implementar, medir y mejorar.',
        },
        {
          icon: 'rocket_launch',
          title: 'Enfocados en resultados',
          description: 'Diseñado para crecer contigo: más ventas, mejor control y menos fricción.',
        },
      ],
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Lo que hemos construido',
      note: 'Hecho para negocios reales',
      includes: 'Incluye',
      spec: 'Quiero algo así',
      live: 'Ver sitio en vivo',
      clientBadge: 'Cliente real',
      productBadge: 'Producto propio',
      offerBadge: 'Solución',
      items: [
        {
          kind: 'client',
          code: 'SALUD // 01',
          sector: 'Odontología · Armenia, Quindío',
          title: 'Sitio web del Dr. Cristian Valencia',
          description:
            'Sitio web para el consultorio odontológico del Dr. Cristian Valencia. Presenta sus especialidades, muestra lo que dicen sus pacientes y facilita pedir una cita por WhatsApp.',
          features: [
            'Una página por especialidad',
            'Testimonios de pacientes',
            'Citas por WhatsApp y redes',
            'SEO para aparecer en Google',
            'Español e inglés',
            'Diseño para celular',
          ],
          image: '/projects/dr-cristian-valencia-sitio.jpg',
          imageAlt: 'Sitio web del Dr. Cristian Valencia en un portátil y un celular',
          imageFit: 'contain',
          liveUrl: 'https://drcristianvalencia.com/',
          href: whatsappUrl(
            'Hola Astra Dev, vi el sitio del Dr. Cristian Valencia y quiero una página web para mi negocio.',
          ),
        },
        {
          kind: 'product',
          code: 'RESTAURANTES // 02',
          sector: 'Restaurantes · Producto SaaS',
          title: 'Table Assistant',
          description:
            'Nuestro asistente con IA para restaurantes. Desde la mesa, el cliente explora el menú, pide recomendaciones y hace su pedido sin esperar al mesero. Responde solo con el menú real del restaurante, sin inventar platos ni precios.',
          features: [
            'Mesero virtual con IA',
            'Responde solo con tu menú real',
            'Menú digital por categorías',
            'Pedidos desde la mesa',
            'Recomendaciones según los gustos',
            'Varios restaurantes y mesas',
          ],
          image: '/projects/table-assistant.jpg',
          imageAlt: 'Table Assistant en un portátil y un celular mostrando el menú y el asistente de mesa',
          href: whatsappUrl('Hola Astra Dev, me interesa Table Assistant para mi restaurante.'),
        },
        {
          kind: 'offer',
          code: 'IA // 03',
          sector: 'Atención al cliente',
          title: 'Chatbot con IA para WhatsApp y tu web',
          description:
            'Un asistente que atiende a tus clientes a cualquier hora con la información real de tu negocio. Usa la misma tecnología de Table Assistant.',
          features: [
            'Responde preguntas frecuentes 24/7',
            'Usa solo la información de tu negocio',
            'Agenda citas y toma pedidos',
            'Funciona en WhatsApp o en tu web',
            'Pasa a una persona cuando hace falta',
            'Se conecta a tu inventario o agenda',
          ],
          image: '/projects/chatbot-whatsapp.jpg',
          imageAlt:
            'Celular con un chat de WhatsApp de Astra Dev respondiendo sobre un punto de venta',
          imageAnchor: 'center',
          href: whatsappUrl('Hola Astra Dev, quiero un chatbot con IA para mi negocio.'),
        },
        {
          kind: 'offer',
          code: 'COMERCIO // 04',
          sector: 'Ventas e inventario',
          title: 'Sistema POS con inventario',
          description:
            'Un sistema para vender en tienda, controlar tus productos y ver el día a día sin hojas de cálculo.',
          features: [
            'Caja y facturación',
            'Inventario en tiempo real',
            'Reportes del día',
            'Alertas de productos por agotarse',
            'Varios usuarios y cajas',
            'Funciona en computador y tablet',
          ],
          image: '/projects/sistema-pos.jpg',
          imageAlt:
            'Cajera usando el punto de venta de Astra Dev, con inventario, total y botón de cobro',
          imageAnchor: 'right',
          href: whatsappUrl('Hola Astra Dev, quiero cotizar un sistema POS con inventario.'),
        },
      ],
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Lo que nos preguntan antes de empezar',
      intro: '¿Tienes otra duda? Escríbenos y te respondemos.',
      cta: 'Preguntar por WhatsApp',
      href: whatsappUrl('Hola Astra Dev, tengo una pregunta.'),
      items: [
        {
          question: '¿Cuánto cuesta un sistema?',
          answer:
            'Depende de lo que necesites: una página web no cuesta lo mismo que un ERP. Después de hablar contigo te enviamos una propuesta con el precio y las etapas, antes de empezar cualquier trabajo.',
        },
        {
          question: '¿Cuánto tiempo tarda?',
          answer:
            'Depende del alcance. Una página web se entrega mucho más rápido que un sistema completo. En la propuesta te damos las fechas de cada etapa.',
        },
        {
          question: '¿Puedo empezar con algo pequeño?',
          answer:
            'Sí. Puedes empezar con lo que necesitas hoy, por ejemplo un POS o un bot, y ampliarlo cuando tu negocio lo pida.',
        },
        {
          question: '¿Se conecta con lo que ya uso?',
          answer:
            'En la mayoría de los casos, sí. Podemos conectar tu página, tu inventario, tu agenda o WhatsApp para que la información no quede regada.',
        },
        {
          question: '¿El bot de WhatsApp reemplaza a mi equipo?',
          answer:
            'No. Responde lo frecuente a cualquier hora y le pasa la conversación a una persona cuando hace falta.',
        },
        {
          question: '¿Qué pasa después de la entrega?',
          answer:
            'No entregamos y desaparecemos. Te acompañamos para resolver dudas, ajustar lo que haga falta y seguir mejorando.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Cuéntanos qué necesitas.',
      body: 'Llena estos datos y se abre WhatsApp con tu mensaje listo para enviar. También puedes escribirnos directamente.',
      formTitle: 'Pide tu cotización',
      formIntro: 'Toma menos de un minuto.',
      name: 'Tu nombre',
      namePlaceholder: 'Ej: Laura Gómez',
      company: 'Empresa o negocio',
      companyPlaceholder: 'Ej: Ferretería El Tornillo',
      optional: 'opcional',
      solution: '¿Qué necesitas?',
      solutionPlaceholder: 'Elige una opción',
      description: 'Cuéntanos un poco más',
      descriptionPlaceholder:
        'Ej: tengo una tienda y quiero controlar el inventario y vender por WhatsApp.',
      submit: 'Continuar en WhatsApp',
      success: 'Abrimos WhatsApp con tu mensaje. Solo falta que lo envíes.',
      message: {
        greeting: 'Hola Astra Dev, soy {name}',
        company: ' de {company}',
        interest: 'Me interesa: {solution}.',
      },
      channels: [
        {
          icon: 'chat',
          label: 'WhatsApp',
          value: '314 872 1707',
          href: whatsappUrl('Hola Astra Dev, quiero cotizar un proyecto.'),
        },
        {
          icon: 'alternate_email',
          label: 'Correo',
          value: 'astra.dev.tech@gmail.com',
          href: 'mailto:astra.dev.tech@gmail.com',
        },
      ],
      solutions: [
        { value: 'pos', label: 'Sistema POS' },
        { value: 'erp', label: 'ERP' },
        { value: 'crm', label: 'CRM' },
        { value: 'bot', label: 'Bot de WhatsApp' },
        { value: 'ai', label: 'Integración de IA' },
        { value: 'saas', label: 'Plataforma SaaS' },
        { value: 'web', label: 'Página web o landing page' },
        { value: 'custom', label: 'Sistema a la medida' },
        { value: 'unsure', label: 'Aún no sé, quiero asesoría' },
      ],
    },
    footer: {
      blurb:
        'Software a la medida e inteligencia artificial para negocios reales. Ideas que construyen futuro.',
      explore: 'Explorar',
      solutions: 'Soluciones',
      contact: 'Contacto',
      rights: 'Todos los derechos reservados.',
      proposal: 'Cotizar por WhatsApp',
    },
  },
  en: {
    title: 'AstraDev — Custom Software and Artificial Intelligence',
    nav: [
      { label: 'Solutions', fragment: 'servicios' },
      { label: 'AI', fragment: 'ia' },
      { label: 'Process', fragment: 'proceso' },
      { label: 'Work', fragment: 'proyectos' },
      { label: 'FAQ', fragment: 'preguntas' },
      { label: 'Contact', fragment: 'contacto' },
    ],
    header: {
      quote: 'Get a quote',
      openMenu: 'Open menu',
      language: 'Switch language',
      theme: 'Switch theme',
    },
    whatsapp: {
      href: whatsappUrl('Hi Astra Dev, I would like a quote for a project.'),
      phone: '314 872 1707',
    },
    floating: {
      label: 'Quote on WhatsApp',
      aria: 'Message Astra Dev on WhatsApp',
    },
    hero: {
      badge: 'Astra Dev · Ideas that build the future',
      title: 'Custom software that',
      highlight: 'grows your business.',
      body: 'We build POS, ERP, and CRM systems, SaaS platforms, websites, and AI-powered WhatsApp bots. All designed around the way your company works.',
      ctaPrimary: 'Get a quote on WhatsApp',
      ctaSecondary: 'See solutions',
      trust: [
        'We explain everything in plain words',
        'Delivered in stages',
        'Support after launch',
      ],
      chat: {
        name: 'Your store assistant',
        status: 'online',
        messages: [
          { from: 'client', text: 'Hi, do you have the white sneakers in size 9?' },
          {
            from: 'business',
            text: 'Hi! Yes, we have 3 pairs left. They are $59. Want me to hold a pair?',
          },
          { from: 'client', text: 'Yes, please. I’ll stop by this afternoon.' },
          {
            from: 'business',
            text: 'Done, they’re on hold under your name until 7:00 p.m. See you!',
          },
        ],
        notificationTitle: 'Sale held in your POS',
        notificationBody: 'Inventory updated automatically.',
      },
    },
    services: {
      eyebrow: 'Solutions',
      title: 'All the software your business needs',
      intro: 'Pick where to start. Every solution adapts to your business and grows with it.',
      idealFor: 'Ideal for',
      cta: 'Get a quote',
      unsureTitle: 'Not sure which one you need?',
      unsureBody: 'Tell us what you want to solve and we’ll recommend the best option.',
      unsureCta: 'Ask for advice',
      unsureHref: whatsappUrl(
        'Hi Astra Dev, I want to improve my business with software but I am not sure where to start.',
      ),
      items: [
        {
          icon: 'point_of_sale',
          title: 'POS system',
          description:
            'Charge fast, issue invoices, and control the till. Know what sold every day without spreadsheets.',
          idealFor: 'stores, restaurants, and hardware shops',
          href: whatsappUrl('Hi Astra Dev, I would like a quote for a POS system.'),
        },
        {
          icon: 'inventory_2',
          title: 'ERP',
          description:
            'Inventory, purchasing, sales, and reports connected in a single system for the whole company.',
          idealFor: 'distributors and growing companies',
          href: whatsappUrl('Hi Astra Dev, I would like a quote for an ERP.'),
        },
        {
          icon: 'groups',
          title: 'CRM',
          description:
            'Organize customers and opportunities. Follow up on every deal so none slips away.',
          idealFor: 'sales teams and service companies',
          href: whatsappUrl('Hi Astra Dev, I would like a quote for a CRM.'),
        },
        {
          icon: 'chat',
          title: 'WhatsApp bots',
          description:
            'An AI assistant that answers, books, and sells on WhatsApp at any hour of the day.',
          idealFor: 'businesses that get lots of messages',
          href: whatsappUrl('Hi Astra Dev, I would like a quote for a WhatsApp bot.'),
        },
        {
          icon: 'neurology',
          title: 'AI integrations',
          description:
            'We connect artificial intelligence to your systems to automate tasks and answer with your own data.',
          idealFor: 'companies that want to save time',
          href: whatsappUrl('Hi Astra Dev, I would like to add artificial intelligence to my business.'),
        },
        {
          icon: 'cloud',
          title: 'SaaS platforms',
          description:
            'We turn your idea into a subscription web product, ready to onboard users and charge them.',
          idealFor: 'founders and startups',
          href: whatsappUrl('Hi Astra Dev, I would like a quote for a SaaS platform.'),
        },
        {
          icon: 'web',
          title: 'Websites and landing pages',
          description:
            'Fast, clear sites that explain what you do and turn visitors into customers.',
          idealFor: 'businesses that want to sell online',
          href: whatsappUrl('Hi Astra Dev, I would like a quote for a website.'),
        },
        {
          icon: 'settings_suggest',
          title: 'Custom systems',
          description:
            'Does your process not fit any off-the-shelf tool? We build it around the way you work.',
          idealFor: 'operations with unique needs',
          href: whatsappUrl('Hi Astra Dev, I would like a quote for a custom system.'),
        },
      ],
    },
    sectors: {
      eyebrow: 'Who it’s for',
      title: 'Does your business look like one of these?',
      intro: 'These are some of the problems we solve every day.',
      items: [
        {
          icon: 'storefront',
          title: 'Stores and retail',
          description: 'Till, inventory, and online sales in one place.',
        },
        {
          icon: 'restaurant',
          title: 'Restaurants',
          description: 'Orders, deliveries, and bookings that arrive on WhatsApp.',
        },
        {
          icon: 'medical_services',
          title: 'Clinics and practices',
          description: 'Appointment booking and automatic reminders for your patients.',
        },
        {
          icon: 'local_shipping',
          title: 'Distributors',
          description: 'Orders, warehouses, and receivables under control.',
        },
        {
          icon: 'work',
          title: 'Professional services',
          description: 'Clients, quotes, and sales follow-up kept in order.',
        },
        {
          icon: 'rocket_launch',
          title: 'Founders',
          description: 'Your idea turned into an app or platform ready to sell.',
        },
      ],
    },
    ia: {
      eyebrow: 'Artificial intelligence',
      title: 'A WhatsApp bot that serves customers for you',
      intro:
        'AI answers, books, and explains what you offer — on WhatsApp or your website — while you run the business.',
      discoveryLabel: 'Try it with your business',
      discoveryBody:
        'We can build a demo with your real questions. Write us on WhatsApp and we’ll look at it together.',
      discoveryCta: 'Request a demo',
      discoveryHref: whatsappUrl('Hi Astra Dev, I would like a demo of the WhatsApp bot.'),
      items: [
        {
          icon: 'chat',
          title: 'Replies instantly',
          description: 'Handles frequent questions while you sell or work.',
        },
        {
          icon: 'schedule',
          title: 'Books for you',
          description: 'Takes appointments and follow-ups without someone stuck on chat.',
        },
        {
          icon: 'menu_book',
          title: 'Explains your services',
          description: 'Shares prices, hours, and what’s included, in your tone.',
        },
        {
          icon: 'link',
          title: 'Connects to your operation',
          description: 'We wire it to your site, inventory, or calendar — it doesn’t sit alone.',
        },
      ],
    },
    process: {
      eyebrow: 'How we work',
      title: 'From idea to a working system, in 4 steps',
      intro: 'No jargon and no surprises: you always know where your project stands.',
      cta: 'Start with step 1',
      steps: [
        {
          title: 'We talk',
          description:
            'You tell us how your business works and what you want to solve, on WhatsApp or a call.',
        },
        {
          title: 'We propose',
          description: 'You get a proposal with scope, stages, and price before any work starts.',
        },
        {
          title: 'We build in stages',
          description:
            'You see real progress, give feedback, and start using parts of the system early.',
        },
        {
          title: 'We launch and support',
          description: 'We roll it out with your team and keep improving it with you.',
        },
      ],
    },
    about: {
      eyebrow: 'Astra Dev',
      title: 'We turn ideas into results.',
      body: 'Technology for real businesses. We walk with you from the idea to a system that grows with you and delivers measurable results.',
      stack: 'Technologies we use',
      pillars: [
        {
          icon: 'verified',
          title: 'Reliable technology',
          description: 'Stable, secure software ready for your company’s daily operation.',
        },
        {
          icon: 'group',
          title: 'Support at every stage',
          description: 'We don’t hand it over and disappear: we help you implement, measure, and improve.',
        },
        {
          icon: 'rocket_launch',
          title: 'Results first',
          description: 'Built to grow with you: more sales, better control, less friction.',
        },
      ],
    },
    projects: {
      eyebrow: 'Work',
      title: 'What we have built',
      note: 'Made for real businesses',
      includes: 'Includes',
      spec: 'I want something like this',
      live: 'See the live site',
      clientBadge: 'Real client',
      productBadge: 'Our product',
      offerBadge: 'Solution',
      items: [
        {
          kind: 'client',
          code: 'HEALTH // 01',
          sector: 'Dentistry · Armenia, Colombia',
          title: 'Website for Dr. Cristian Valencia',
          description:
            'A website for Dr. Cristian Valencia’s dental practice. It presents his specialties, shows what his patients say, and makes it easy to book an appointment on WhatsApp.',
          features: [
            'A page for each specialty',
            'Patient testimonials',
            'Booking via WhatsApp and social media',
            'SEO to show up on Google',
            'Spanish and English',
            'Built for mobile',
          ],
          image: '/projects/dr-cristian-valencia-sitio.jpg',
          imageAlt: 'Dr. Cristian Valencia’s website on a laptop and a phone',
          imageFit: 'contain',
          liveUrl: 'https://drcristianvalencia.com/',
          href: whatsappUrl(
            'Hi Astra Dev, I saw Dr. Cristian Valencia’s website and I would like a website for my business.',
          ),
        },
        {
          kind: 'product',
          code: 'RESTAURANTS // 02',
          sector: 'Restaurants · SaaS product',
          title: 'Table Assistant',
          description:
            'Our AI assistant for restaurants. From the table, guests browse the menu, ask for recommendations, and place their order without waiting for a server. It answers only with the restaurant’s real menu, never inventing dishes or prices.',
          features: [
            'AI virtual waiter',
            'Answers only with your real menu',
            'Digital menu by category',
            'Orders from the table',
            'Recommendations based on taste',
            'Multiple restaurants and tables',
          ],
          image: '/projects/table-assistant.jpg',
          imageAlt: 'Table Assistant on a laptop and a phone showing the menu and the table assistant',
          href: whatsappUrl('Hi Astra Dev, I am interested in Table Assistant for my restaurant.'),
        },
        {
          kind: 'offer',
          code: 'AI // 03',
          sector: 'Customer support',
          title: 'AI chatbot for WhatsApp and your website',
          description:
            'An assistant that serves your customers at any hour with your business’s real information. Built on the same technology as Table Assistant.',
          features: [
            'Answers frequent questions 24/7',
            'Uses only your business’s information',
            'Books appointments and takes orders',
            'Works on WhatsApp or your website',
            'Hands over to a person when needed',
            'Connects to your inventory or calendar',
          ],
          image: '/projects/chatbot-whatsapp.jpg',
          imageAlt: 'Phone showing an Astra Dev WhatsApp chat answering about a point of sale',
          imageAnchor: 'center',
          href: whatsappUrl('Hi Astra Dev, I would like an AI chatbot for my business.'),
        },
        {
          kind: 'offer',
          code: 'RETAIL // 04',
          sector: 'Sales and inventory',
          title: 'POS system with inventory',
          description:
            'A system to sell in-store, track your products, and see the day-to-day without spreadsheets.',
          features: [
            'Till and invoicing',
            'Real-time inventory',
            'Daily reports',
            'Low-stock alerts',
            'Multiple users and tills',
            'Works on desktop and tablet',
          ],
          image: '/projects/sistema-pos.jpg',
          imageAlt: 'Cashier using the Astra Dev point of sale, with inventory, total, and checkout',
          imageAnchor: 'right',
          href: whatsappUrl('Hi Astra Dev, I would like a quote for a POS system with inventory.'),
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'What people ask us before starting',
      intro: 'Have another question? Write us and we’ll answer.',
      cta: 'Ask on WhatsApp',
      href: whatsappUrl('Hi Astra Dev, I have a question.'),
      items: [
        {
          question: 'How much does a system cost?',
          answer:
            'It depends on what you need: a website doesn’t cost the same as an ERP. After talking with you we send a proposal with the price and stages, before any work starts.',
        },
        {
          question: 'How long does it take?',
          answer:
            'It depends on the scope. A website ships much faster than a full system. The proposal includes dates for each stage.',
        },
        {
          question: 'Can I start small?',
          answer:
            'Yes. Start with what you need today, like a POS or a bot, and expand it when your business asks for more.',
        },
        {
          question: 'Does it connect with what I already use?',
          answer:
            'In most cases, yes. We can connect your website, inventory, calendar, or WhatsApp so your information isn’t scattered.',
        },
        {
          question: 'Does the WhatsApp bot replace my team?',
          answer:
            'No. It answers the frequent questions at any hour and hands the conversation to a person when needed.',
        },
        {
          question: 'What happens after delivery?',
          answer:
            'We don’t hand it over and disappear. We stay with you to answer questions, adjust what’s needed, and keep improving.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Tell us what you need.',
      body: 'Fill in these details and WhatsApp opens with your message ready to send. You can also write to us directly.',
      formTitle: 'Request your quote',
      formIntro: 'It takes less than a minute.',
      name: 'Your name',
      namePlaceholder: 'E.g. Laura Gómez',
      company: 'Company or business',
      companyPlaceholder: 'E.g. Corner Hardware',
      optional: 'optional',
      solution: 'What do you need?',
      solutionPlaceholder: 'Choose an option',
      description: 'Tell us a bit more',
      descriptionPlaceholder:
        'E.g. I run a store and want to track inventory and sell on WhatsApp.',
      submit: 'Continue on WhatsApp',
      success: 'We opened WhatsApp with your message. Just hit send.',
      message: {
        greeting: 'Hi Astra Dev, I’m {name}',
        company: ' from {company}',
        interest: 'I’m interested in: {solution}.',
      },
      channels: [
        {
          icon: 'chat',
          label: 'WhatsApp',
          value: '314 872 1707',
          href: whatsappUrl('Hi Astra Dev, I would like a quote for a project.'),
        },
        {
          icon: 'alternate_email',
          label: 'Email',
          value: 'astra.dev.tech@gmail.com',
          href: 'mailto:astra.dev.tech@gmail.com',
        },
      ],
      solutions: [
        { value: 'pos', label: 'POS system' },
        { value: 'erp', label: 'ERP' },
        { value: 'crm', label: 'CRM' },
        { value: 'bot', label: 'WhatsApp bot' },
        { value: 'ai', label: 'AI integration' },
        { value: 'saas', label: 'SaaS platform' },
        { value: 'web', label: 'Website or landing page' },
        { value: 'custom', label: 'Custom system' },
        { value: 'unsure', label: 'Not sure yet, I’d like advice' },
      ],
    },
    footer: {
      blurb: 'Custom software and AI for real businesses. Ideas that build the future.',
      explore: 'Explore',
      solutions: 'Solutions',
      contact: 'Contact',
      rights: 'All rights reserved.',
      proposal: 'Get a quote on WhatsApp',
    },
  },
};
