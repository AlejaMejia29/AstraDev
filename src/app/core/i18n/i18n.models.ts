import {
  AboutPillar,
  AiCapability,
  ChatMessage,
  ContactChannel,
  FaqItem,
  NavLink,
  ProcessStep,
  ProjectItem,
  SectorItem,
  ServiceItem,
} from '../../shared/models/site.models';
import { QuoteTemplate } from '../../shared/utils/whatsapp';

export type Lang = 'es' | 'en';

export interface AppCopy {
  title: string;
  nav: NavLink[];
  header: {
    quote: string;
    openMenu: string;
    language: string;
    theme: string;
  };
  whatsapp: {
    href: string;
    phone: string;
  };
  floating: {
    label: string;
    aria: string;
  };
  hero: {
    badge: string;
    title: string;
    highlight: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string[];
    chat: {
      name: string;
      status: string;
      messages: ChatMessage[];
      notificationTitle: string;
      notificationBody: string;
    };
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    idealFor: string;
    cta: string;
    unsureTitle: string;
    unsureBody: string;
    unsureCta: string;
    unsureHref: string;
    items: ServiceItem[];
  };
  sectors: {
    eyebrow: string;
    title: string;
    intro: string;
    items: SectorItem[];
  };
  ia: {
    eyebrow: string;
    title: string;
    intro: string;
    discoveryLabel: string;
    discoveryBody: string;
    discoveryCta: string;
    discoveryHref: string;
    items: AiCapability[];
  };
  process: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
    steps: ProcessStep[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    stack: string;
    pillars: AboutPillar[];
  };
  projects: {
    eyebrow: string;
    title: string;
    note: string;
    includes: string;
    spec: string;
    live: string;
    clientBadge: string;
    productBadge: string;
    offerBadge: string;
    items: ProjectItem[];
  };
  faq: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
    href: string;
    items: FaqItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    formTitle: string;
    formIntro: string;
    name: string;
    namePlaceholder: string;
    company: string;
    companyPlaceholder: string;
    optional: string;
    solution: string;
    solutionPlaceholder: string;
    description: string;
    descriptionPlaceholder: string;
    submit: string;
    success: string;
    message: QuoteTemplate;
    channels: ContactChannel[];
    solutions: { value: string; label: string }[];
  };
  footer: {
    blurb: string;
    explore: string;
    solutions: string;
    contact: string;
    rights: string;
    proposal: string;
  };
}
