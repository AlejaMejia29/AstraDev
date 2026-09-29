import { AppCopy, Lang } from './i18n.models';

export const TRANSLATIONS: Record<Lang, AppCopy> = {
  es: {
    title: 'AstraDev — Software e Inteligencia Artificial',
    quote: 'Hablemos',
    nav: [
      { label: 'Inicio', fragment: 'inicio' },
      { label: 'Servicios', fragment: 'servicios' },
      { label: 'IA', fragment: 'ia' },
      { label: 'Nosotros', fragment: 'sobre-nosotros' },
      { label: 'Proyectos', fragment: 'proyectos' },
      { label: 'Contacto', fragment: 'contacto' },
    ],
    header: {
      quote: 'Hablemos',
      openMenu: 'Abrir menú',
      language: 'Cambiar idioma',
      theme: 'Cambiar tema',
    },
    whatsapp: {
      href: 'https://wa.me/573118221480',
      phone: '311 822 1480',
      label: 'Hablemos de tu proyecto',
    },
    hero: {
      badge: 'Software para empresas que buscan más',
      title: 'Todo tu negocio, en un solo lugar.',
      subtitle: 'Ideas que construyen futuro.',
      body: 'Una solución para gestionar ventas, productos, clientes y operaciones de forma simple. Desarrollamos software a la medida para hacer crecer tu negocio.',
      ctaPrimary: 'Hablemos de tu proyecto',
      ctaSecondary: 'Ver soluciones de IA',
    },
    stats: [
      {
        label: 'Todo junto',
        value: '1 lugar',
        detail: 'Ventas, inventario, clientes y reportes en un solo sistema.',
      },
      {
        label: 'Siempre listo',
        value: '24/7',
        detail: 'Tu operación no se apaga: clientes y equipo con información a cualquier hora.',
      },
      {
        label: 'Cerca de ti',
        value: 'WhatsApp',
        detail: 'Hablamos directo y te proponemos el siguiente paso.',
      },
      {
        label: 'A tu ritmo',
        value: 'Crece',
        detail: 'Empiezas con lo de hoy y ampliamos cuando el negocio lo pida.',
      },
    ],
    services: {
      eyebrow: 'Qué hacemos',
      title: 'Software para hacer crecer tu negocio',
      intro:
        'Desarrollamos aplicaciones y sistemas a la medida que optimizan procesos, conectan a tu equipo y generan resultados.',
      prev: 'Servicio anterior',
      next: 'Siguiente servicio',
      items: [
        {
          icon: 'point_of_sale',
          title: 'Ventas y punto de venta',
          description:
            'Agiliza tus ventas en tienda y en línea, con control claro del día a día. Cobras más rápido, ves qué se vendió y evitas perder tickets por desorden en caja o en la tienda.',
          tags: ['POS', 'Facturación'],
          image: '/services/pos.jpg',
          imageAlt: 'Punto de venta en un comercio',
        },
        {
          icon: 'inventory_2',
          title: 'Inventario y productos',
          description:
            'Controla tu stock en tiempo real y evita quiebres o excesos. Sabes qué hay, qué se mueve y cuándo reponer, sin adivinar ni depender de una hoja de cálculo.',
          tags: ['Stock', 'Alertas'],
          image: '/services/inventory.jpg',
          imageAlt: 'Control de inventario y mercancía',
        },
        {
          icon: 'web',
          title: 'Desarrollo web',
          description:
            'Sitios y plataformas modernas, rápidas y claras para tu empresa. Una web que explica lo que haces, recibe pedidos o clientes y se puede ampliar cuando el negocio crezca.',
          tags: ['Web', 'SaaS'],
          image: '/services/web.jpg',
          imageAlt: 'Desarrollo de sitios y plataformas web',
        },
        {
          icon: 'settings_suggest',
          title: 'Sistemas a la medida',
          description:
            'Digitaliza tu operación: clientes, proveedores y reportes. Un sistema armado a tu forma de trabajar, para dejar de repetir tareas y tener la información en un solo lugar.',
          tags: ['Integraciones', 'Reportes'],
          image: '/services/custom.jpg',
          imageAlt: 'Panel de un sistema a la medida',
        },
        {
          icon: 'handshake',
          title: 'Consultoría tecnológica',
          description:
            'Te acompañamos en cada etapa del proyecto, de la idea al resultado. Definimos qué construir, en qué orden y cómo medirlo, para que la tecnología sí le sirva al negocio.',
          tags: ['Descubrimiento', 'Acompañamiento'],
          image: '/services/consulting.jpg',
          imageAlt: 'Reunión de consultoría tecnológica',
        },
      ],
    },
    ia: {
      eyebrow: 'Inteligencia artificial',
      title: 'Un asistente para tus clientes',
      intro:
        'La IA responde, agenda y explica lo que ofreces, en WhatsApp o en tu web, mientras tú operas el negocio.',
      discoveryLabel: 'Pruébalo con tu negocio',
      discoveryBody:
        'Te armamos una demo con tus preguntas reales. Escríbenos por WhatsApp y lo vemos juntos.',
      discoveryCta: 'Solicitar una demostración',
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
    about: {
      eyebrow: 'Astra Dev',
      title: 'Convertimos ideas en resultados.',
      body: 'Tecnología para negocios reales. Acompañamos cada etapa del proyecto: desde la idea hasta un sistema que crece contigo y genera resultados medibles.',
      stack: 'Stack tecnológico',
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
      eyebrow: 'Cómo lo resolvemos',
      title: 'Soluciones que ya construimos',
      note: 'Hecho para negocios reales',
      spec: 'Quiero algo así',
      items: [
        {
          code: 'COMERCIO // 01',
          sector: 'Ventas e inventario',
          title: 'Punto de venta y control de stock',
          description:
            'Un sistema para vender en tienda, controlar productos y ver el día a día sin hojas de cálculo.',
          metrics: [
            { label: 'Operación', value: '1 sistema' },
            { label: 'Control', value: 'Tiempo real' },
            { label: 'Equipo', value: 'Más claro' },
          ],
          tags: ['POS', 'Inventario', 'Reportes'],
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBFX-N3kJ6FDmbC6cy7hdnYkYhrolwaj0UznQ2ErSxId6j-rK3nDit8NuslsTfnMEYVP8PtNDYADqY_D68STbKWxQ4y8zBbaDqJgECFSMhJ4A6RWO8c8JAcshhCbvvn9uCr4oYrn48JcO309q8l94WT7H48VNOSuPxGd5ty4Xu-4tjSfF4xAECkAa63RyiPORqQvMme-TSC0sWLRbOaeCGsJwYcTR8508oa4PeCJFEZqv6M4W1OyZ0G',
          imageAlt: 'Panel de ventas e inventario',
        },
        {
          code: 'WEB // 02',
          sector: 'Presencia digital',
          title: 'Sitio y plataforma a la medida',
          description:
            'Una web rápida para mostrar servicios, recibir pedidos o gestionar clientes desde un solo lugar.',
          metrics: [
            { label: 'Canal', value: 'Web' },
            { label: 'Enfoque', value: 'Tu negocio' },
            { label: 'Entrega', value: 'Por etapas' },
          ],
          tags: ['Angular', 'TypeScript', 'SaaS'],
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuC85pcLKIeRZLUskwHw0THbGczAJ6VbZkRKepKRojq1MHCzRG6xtryhYHg8DcNa2kewAjmHbJziPxvWsvGKC1OZhXAZBz09nZQfzHEP_gw-AHXfZefo0OhVUP9NBwT_xIO-cpA47gLkBVnOcTF04ZcAOb-Gx9Ux5RJ-wQocvn7DbNhlVizWoTgh7u4Xu7mHAZJFNJYCVQeuBZ5dg2geAhrRwufngLGdMqk3Gp6fZ56LXpXgsWjLZ5WY',
          imageAlt: 'Plataforma web para empresas',
        },
        {
          code: 'IA // 03',
          sector: 'Atención al cliente',
          title: 'Asistente disponible 24/7',
          description:
            'Un asistente que responde, agenda y explica tus servicios por WhatsApp o en tu web.',
          metrics: [
            { label: 'Horario', value: '24/7' },
            { label: 'Canal', value: 'WhatsApp' },
            { label: 'Resultado', value: 'Menos espera' },
          ],
          tags: ['IA', 'WhatsApp', 'Automatización'],
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDOmEhntbpzAnt7n0ZlwXygDXMkwkwVrZbyC2nQUsib9AHMwlWpgAN4blQ4z5Z3G0mOKni4nB4FO-Df5X--n37rUHkm8Ivvhsh4kBsxodIMpBMPLz3TpvmdCMwf2fmvjf2JtMmQXLGx6DbUqbeZPRGsIkjeE_c8HSjhQCry0obsTx1iUe_Lln4gTsgGP1zHHyPvCfkSWfv-hXLfTspq2uFi46PvMpuecso-J-qrGDw6LvefVLGF3gTH',
          imageAlt: 'Asistente de atención con inteligencia artificial',
        },
      ],
    },
    contact: {
      eyebrow: 'Hablemos',
      title: 'Hablemos de tu proyecto.',
      body: 'Escríbenos por WhatsApp o déjanos tus datos. Convertimos tus ideas en un sistema que crece contigo.',
      formTitle: 'Cuéntanos tu necesidad',
      formIntro: '¿Necesitas web, un sistema de gestión o IA para atender clientes?',
      name: 'Nombre completo *',
      namePlaceholder: 'Tu nombre',
      company: 'Empresa *',
      companyPlaceholder: 'Tu negocio o empresa',
      email: 'Email *',
      solution: 'Tipo de solución *',
      solutionPlaceholder: 'Seleccionar alcance...',
      budget: 'Presupuesto estimado',
      description: 'Descripción del proyecto *',
      descriptionPlaceholder:
        'Qué quieres lograr: ventas, inventario, atención al cliente o automatización...',
      submit: 'Enviar y hablar por WhatsApp',
      success: 'Recibido. Te escribimos pronto para agendar una demostración.',
      channels: [
        {
          icon: 'chat',
          label: 'WhatsApp',
          value: '311 822 1480',
          href: 'https://wa.me/573118221480',
        },
        {
          icon: 'call',
          label: 'Teléfono',
          value: '311 822 1480',
          href: 'tel:+573118221480',
        },
        {
          icon: 'alternate_email',
          label: 'Correo',
          value: 'contacto@astradev.tech',
          href: 'mailto:contacto@astradev.tech',
        },
      ],
      solutions: [
        { value: 'web', label: 'Desarrollo web / plataforma' },
        { value: 'pos', label: 'Ventas, inventario y operación' },
        { value: 'ai', label: 'IA y atención automatizada' },
        { value: 'custom', label: 'Sistema a la medida' },
        { value: 'consulting', label: 'Consultoría tecnológica' },
      ],
      budgets: [
        { value: 'piloto', label: 'Piloto / demo' },
        { value: 'producto', label: 'Producto' },
        { value: 'plataforma', label: 'Plataforma' },
        { value: 'definir', label: 'A definir' },
      ],
    },
    footer: {
      blurb:
        'Software a la medida e inteligencia artificial para negocios reales. Diseñado para crecer contigo.',
      explore: 'Explorar',
      contact: 'Contacto',
      rights: 'Todos los derechos reservados.',
      proposal: 'Hablemos de tu proyecto',
    },
  },
  en: {
    title: 'AstraDev — Software and Artificial Intelligence',
    quote: "Let's talk",
    nav: [
      { label: 'Home', fragment: 'inicio' },
      { label: 'Services', fragment: 'servicios' },
      { label: 'AI', fragment: 'ia' },
      { label: 'About', fragment: 'sobre-nosotros' },
      { label: 'Work', fragment: 'proyectos' },
      { label: 'Contact', fragment: 'contacto' },
    ],
    header: {
      quote: "Let's talk",
      openMenu: 'Open menu',
      language: 'Switch language',
      theme: 'Switch theme',
    },
    whatsapp: {
      href: 'https://wa.me/573118221480',
      phone: '311 822 1480',
      label: "Let's talk about your project",
    },
    hero: {
      badge: 'Software for companies that want more',
      title: 'Your whole business, in one place.',
      subtitle: 'Ideas that build the future.',
      body: 'A solution to manage sales, products, customers, and operations — simply. We build custom software that helps your business grow.',
      ctaPrimary: "Let's talk about your project",
      ctaSecondary: 'See AI solutions',
    },
    stats: [
      {
        label: 'All together',
        value: '1 place',
        detail: 'Sales, inventory, customers, and reports in a single system.',
      },
      {
        label: 'Always ready',
        value: '24/7',
        detail: 'Your operation stays on: customers and team can get answers at any hour.',
      },
      {
        label: 'Close to you',
        value: 'WhatsApp',
        detail: 'We talk directly and propose the next step.',
      },
      {
        label: 'At your pace',
        value: 'Grow',
        detail: 'Start with what you need today and expand when the business asks for more.',
      },
    ],
    services: {
      eyebrow: 'What we do',
      title: 'Software that grows your business',
      intro:
        'We build custom apps and systems that optimize processes, connect your team, and deliver results.',
      prev: 'Previous service',
      next: 'Next service',
      items: [
        {
          icon: 'point_of_sale',
          title: 'Sales and point of sale',
          description:
            'Speed up in-store and online sales with a clear view of every day. Charge faster, see what sold, and stop losing tickets to a messy till or store.',
          tags: ['POS', 'Billing'],
          image: '/services/pos.jpg',
          imageAlt: 'Point of sale in a store',
        },
        {
          icon: 'inventory_2',
          title: 'Inventory and products',
          description:
            'Track stock in real time and avoid shortages or excess. You know what you have, what moves, and when to restock — without guessing or a spreadsheet.',
          tags: ['Stock', 'Alerts'],
          image: '/services/inventory.jpg',
          imageAlt: 'Inventory and merchandise control',
        },
        {
          icon: 'web',
          title: 'Web development',
          description:
            'Modern, fast, clear sites and platforms for your company. A website that explains what you do, takes orders or leads, and can grow when the business does.',
          tags: ['Web', 'SaaS'],
          image: '/services/web.jpg',
          imageAlt: 'Websites and platforms in development',
        },
        {
          icon: 'settings_suggest',
          title: 'Custom systems',
          description:
            'Digitize your operation: customers, suppliers, and reports. A system built around how you actually work, so you stop repeating tasks and keep information in one place.',
          tags: ['Integrations', 'Reports'],
          image: '/services/custom.jpg',
          imageAlt: 'Custom system dashboard',
        },
        {
          icon: 'handshake',
          title: 'Technology consulting',
          description:
            'We stay with you at every stage, from the idea to the outcome. We define what to build, in what order, and how to measure it, so the technology actually serves the business.',
          tags: ['Discovery', 'Support'],
          image: '/services/consulting.jpg',
          imageAlt: 'Technology consulting meeting',
        },
      ],
    },
    ia: {
      eyebrow: 'Artificial intelligence',
      title: 'An assistant for your customers',
      intro:
        'AI answers, books, and explains what you offer — on WhatsApp or your website — while you run the business.',
      discoveryLabel: 'Try it with your business',
      discoveryBody:
        'We can build a demo with your real questions. Write us on WhatsApp and we’ll look at it together.',
      discoveryCta: 'Request a demo',
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
    about: {
      eyebrow: 'Astra Dev',
      title: 'We turn ideas into results.',
      body: 'Technology for real businesses. We walk with you from the idea to a system that grows with you and delivers measurable results.',
      stack: 'Technology stack',
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
      eyebrow: 'How we solve it',
      title: 'Solutions we already build',
      note: 'Made for real businesses',
      spec: 'I want something like this',
      items: [
        {
          code: 'RETAIL // 01',
          sector: 'Sales and inventory',
          title: 'Point of sale and stock control',
          description:
            'A system to sell in-store, track products, and see the day-to-day without spreadsheets.',
          metrics: [
            { label: 'Operation', value: '1 system' },
            { label: 'Control', value: 'Real time' },
            { label: 'Team', value: 'Clearer' },
          ],
          tags: ['POS', 'Inventory', 'Reports'],
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBFX-N3kJ6FDmbC6cy7hdnYkYhrolwaj0UznQ2ErSxId6j-rK3nDit8NuslsTfnMEYVP8PtNDYADqY_D68STbKWxQ4y8zBbaDqJgECFSMhJ4A6RWO8c8JAcshhCbvvn9uCr4oYrn48JcO309q8l94WT7H48VNOSuPxGd5ty4Xu-4tjSfF4xAECkAa63RyiPORqQvMme-TSC0sWLRbOaeCGsJwYcTR8508oa4PeCJFEZqv6M4W1OyZ0G',
          imageAlt: 'Sales and inventory dashboard',
        },
        {
          code: 'WEB // 02',
          sector: 'Digital presence',
          title: 'Custom site and platform',
          description:
            'A fast website to show services, take orders, or manage customers from one place.',
          metrics: [
            { label: 'Channel', value: 'Web' },
            { label: 'Focus', value: 'Your business' },
            { label: 'Delivery', value: 'In stages' },
          ],
          tags: ['Angular', 'TypeScript', 'SaaS'],
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuC85pcLKIeRZLUskwHw0THbGczAJ6VbZkRKepKRojq1MHCzRG6xtryhYHg8DcNa2kewAjmHbJziPxvWsvGKC1OZhXAZBz09nZQfzHEP_gw-AHXfZefo0OhVUP9NBwT_xIO-cpA47gLkBVnOcTF04ZcAOb-Gx9Ux5RJ-wQocvn7DbNhlVizWoTgh7u4Xu7mHAZJFNJYCVQeuBZ5dg2geAhrRwufngLGdMqk3Gp6fZ56LXpXgsWjLZ5WY',
          imageAlt: 'Business web platform',
        },
        {
          code: 'AI // 03',
          sector: 'Customer support',
          title: 'Assistant available 24/7',
          description:
            'An assistant that answers, books, and explains your services on WhatsApp or your website.',
          metrics: [
            { label: 'Hours', value: '24/7' },
            { label: 'Channel', value: 'WhatsApp' },
            { label: 'Result', value: 'Less waiting' },
          ],
          tags: ['AI', 'WhatsApp', 'Automation'],
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDOmEhntbpzAnt7n0ZlwXygDXMkwkwVrZbyC2nQUsib9AHMwlWpgAN4blQ4z5Z3G0mOKni4nB4FO-Df5X--n37rUHkm8Ivvhsh4kBsxodIMpBMPLz3TpvmdCMwf2fmvjf2JtMmQXLGx6DbUqbeZPRGsIkjeE_c8HSjhQCry0obsTx1iUe_Lln4gTsgGP1zHHyPvCfkSWfv-hXLfTspq2uFi46PvMpuecso-J-qrGDw6LvefVLGF3gTH',
          imageAlt: 'AI customer support assistant',
        },
      ],
    },
    contact: {
      eyebrow: "Let's talk",
      title: "Let's talk about your project.",
      body: 'Write us on WhatsApp or leave your details. We turn your ideas into a system that grows with you.',
      formTitle: 'Tell us what you need',
      formIntro: 'Do you need a website, an operations system, or AI to serve customers?',
      name: 'Full name *',
      namePlaceholder: 'Your name',
      company: 'Company *',
      companyPlaceholder: 'Your business or company',
      email: 'Email *',
      solution: 'Solution type *',
      solutionPlaceholder: 'Select scope...',
      budget: 'Estimated budget',
      description: 'Project description *',
      descriptionPlaceholder: 'What you want to achieve: sales, inventory, support, or automation...',
      submit: 'Send and chat on WhatsApp',
      success: 'Received. We will write soon to book a demo.',
      channels: [
        {
          icon: 'chat',
          label: 'WhatsApp',
          value: '311 822 1480',
          href: 'https://wa.me/573118221480',
        },
        {
          icon: 'call',
          label: 'Phone',
          value: '311 822 1480',
          href: 'tel:+573118221480',
        },
        {
          icon: 'alternate_email',
          label: 'Email',
          value: 'contacto@astradev.tech',
          href: 'mailto:contacto@astradev.tech',
        },
      ],
      solutions: [
        { value: 'web', label: 'Web development / platform' },
        { value: 'pos', label: 'Sales, inventory, and operations' },
        { value: 'ai', label: 'AI and automated support' },
        { value: 'custom', label: 'Custom system' },
        { value: 'consulting', label: 'Technology consulting' },
      ],
      budgets: [
        { value: 'piloto', label: 'Pilot / demo' },
        { value: 'producto', label: 'Product' },
        { value: 'plataforma', label: 'Platform' },
        { value: 'definir', label: 'To define' },
      ],
    },
    footer: {
      blurb: 'Custom software and AI for real businesses. Built to grow with you.',
      explore: 'Explore',
      contact: 'Contact',
      rights: 'All rights reserved.',
      proposal: "Let's talk about your project",
    },
  },
};
