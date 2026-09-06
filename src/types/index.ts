export interface Venture {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  link: string;
  githubLink?: string;
  categories: Array<'founder' | 'ai' | 'fintech' | 'cleantech'>;
  badge: string;
  statusBadge: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  url?: string;
  badge?: string;
  bullets: string[];
  technologies: string[];
}


export interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  highlight?: boolean;
}

export interface AgentQueryResponse {
  query: string;
  toolCall?: {
    name: string;
    args: string;
    duration: string;
  };
  response: string;
}
