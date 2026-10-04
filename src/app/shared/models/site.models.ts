export interface NavLink {
  label: string;
  fragment: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  idealFor: string;
  href: string;
}

export interface SectorItem {
  icon: string;
  title: string;
  description: string;
}

export interface AiCapability {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface AboutPillar {
  icon: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  kind: 'client' | 'product' | 'offer';
  code: string;
  sector: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  imageFit?: 'cover' | 'contain';
  imageAnchor?: 'center' | 'right';
  href: string;
  liveUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  from: 'client' | 'business';
  text: string;
}

export interface ContactChannel {
  icon: string;
  label: string;
  value: string;
  href?: string;
}
