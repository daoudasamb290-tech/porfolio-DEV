export type ScreenView = 'portfolio' | 'dem-driver' | 'sante-meds' | 'analytics' | 'artisan-pro' | 'cv';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  metrics: string;
  image: string;
  screenId: ScreenView;
  caseStudyAvailable?: boolean;
  liveUrl?: string;
}

export interface PhilosophyCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface TechStackItem {
  name: string;
  role: string;
  iconName: string;
  color?: string;
  badge?: string;
  category: 'frontend' | 'backend' | 'database' | 'payment' | 'devops' | 'api' | 'mobile';
}

export interface ExperienceItem {
  period: string;
  role: string;
  client: string;
  description: string;
  tags?: string[];
  achievements?: string[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  initials: string;
  rating: number;
}
