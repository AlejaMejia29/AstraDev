export interface NavLink {
  label: string;
  fragment: string;
}

export interface StatItem {
  label: string;
  value: string;
  detail: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export interface AiCapability {
  icon: string;
  title: string;
  description: string;
}

export interface AboutPillar {
  icon: string;
  title: string;
  description: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  code: string;
  sector: string;
  title: string;
  description: string;
  metrics: ProjectMetric[];
  tags: string[];
  image: string;
  imageAlt: string;
}

export interface ContactChannel {
  icon: string;
  label: string;
  value: string;
  href?: string;
}
