import {
  AboutPillar,
  AiCapability,
  ContactChannel,
  NavLink,
  ProjectItem,
  ServiceItem,
  StatItem,
} from '../../shared/models/site.models';

export type Lang = 'es' | 'en';

export interface AppCopy {
  title: string;
  quote: string;
  nav: NavLink[];
  header: {
    quote: string;
    openMenu: string;
    language: string;
    theme: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  whatsapp: {
    href: string;
    phone: string;
    label: string;
  };
  stats: StatItem[];
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    prev: string;
    next: string;
    items: ServiceItem[];
  };
  ia: {
    eyebrow: string;
    title: string;
    intro: string;
    discoveryLabel: string;
    discoveryBody: string;
    discoveryCta: string;
    items: AiCapability[];
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
    spec: string;
    items: ProjectItem[];
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
    email: string;
    solution: string;
    solutionPlaceholder: string;
    budget: string;
    description: string;
    descriptionPlaceholder: string;
    submit: string;
    success: string;
    channels: ContactChannel[];
    solutions: { value: string; label: string }[];
    budgets: { value: string; label: string }[];
  };
  footer: {
    blurb: string;
    explore: string;
    contact: string;
    rights: string;
    proposal: string;
  };
}
