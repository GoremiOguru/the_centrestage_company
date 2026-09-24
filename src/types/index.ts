export type NavigationPath = '/' | '/about' | '/our-work' | '/ecosystem' | '/insights' | '/contact';

export interface NavItem {
  label: string;
  path: NavigationPath;
}

export interface Capability {
  id: string;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  clientCategory: string;
  summary: string;
  context: string;
  whatWeSaw: string;
  whatWeDid: string;
  whatChanged: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface EcosystemPillar {
  id: string;
  title: string;
  headline: string;
  badge?: string;
  description: string;
  nestedItems?: {
    title: string;
    description: string;
    tagline?: string;
  }[];
  ctaText: string;
  enquiryType: string;
}

export interface InsightArticle {
  id: string;
  number: string;
  title: string;
  category: 'Reputation' | 'Leadership' | 'Storytelling' | 'Influence' | 'Future Readiness' | 'Ideas & Culture';
  readTime: string;
  seoTerritory: string;
  excerpt: string;
  fullContent?: string;
  isPublished: boolean;
  publishedDate?: string;
}

export interface ImpactStat {
  number: number;
  suffix: string;
  label: string;
}

export interface BrandFramework {
  belief: string;
  purpose: string;
  mission: string;
  vision: string;
  coreIdea: string;
  promise: string;
  values: string[];
  spirit: string[];
  brandShorthand: string;
}
