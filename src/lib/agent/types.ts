export interface AgentLink {
  label: string;
  url: string;
}

export interface KnowledgeEntry {
  /** Stable key, also used as the React key when rendering. */
  id: string;
  /** Lowercase, hyphen-free keywords. Multiword phrases are allowed. */
  keywords: string[];
  /** Tie-breaker when two entries score equally. Higher wins. */
  priority: number;
  /** Markdown body. */
  text: string;
  links?: AgentLink[];
}

/** How the console is currently answering. */
export type AgentMode = 'checking' | 'live' | 'offline';

export interface ConsoleMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  /** Present on assistant turns answered from the bundled knowledge base. */
  source?: 'knowledge-base';
  links?: AgentLink[];
}
