import type { KnowledgeEntry } from './types';

export const BOOKING_URL = 'https://calendar.app.google/4byXSktHwc55ztvA6';
export const CONTACT_EMAIL = 'jacob@ayokunle.com';

/**
 * Offline knowledge base. This is what the console answers from when
 * `VITE_AGENT_API_URL` is unset, or when a live request fails.
 *
 * Keep entries factual and self-contained — nothing here is generated, so
 * anything not written down cannot be answered.
 */
export const KNOWLEDGE_ENTRIES: KnowledgeEntry[] = [
  {
    id: 'overview',
    priority: 2,
    keywords: [
      'overview',
      'about',
      'about jacob',
      'who is jacob',
      'summary',
      'profile',
      'background',
      'bio',
      'introduce',
      'introduction',
      'experience',
      'career',
      'ventures',
    ],
    text: `Jacob Ayokunle is an **Agentic Engineer, Tech Founder & Systems Architect** based in Augsburg & Munich, Germany:

- **Ventures:** Founder of **Sprachflow** (AI-operated German TELC B1 exam preparation, 5,000+ exam practices monthly, human review on exam-critical paths) and **GetBlitz** (open-source self-hosted SEPA Instant payment gateway).
- **Executive Leadership:** CTO & Co-Founder (2022–2024) of **Indicina**, where he directed ML credit scoring (-20% NPLs) and managed multiple cross-functional engineering teams.
- **Current Role:** Senior Software Engineer at **Atmen Solutions**, engineering dynamic multi-stage emissions tracking and AI mass-balance carbon accounting.

To explore deeper, pick one of the suggestions below or email Jacob directly at ${CONTACT_EMAIL}.`,
    links: [
      { label: 'Email Jacob', url: `mailto:${CONTACT_EMAIL}` },
      { label: 'Sprachflow.app', url: 'https://sprachflow.app' },
      { label: 'GetBlitz.io', url: 'https://getblitz.io' },
    ],
  },
  {
    id: 'sprachflow',
    priority: 5,
    keywords: [
      'sprachflow',
      'german exam',
      'telc',
      'b1',
      'language learning',
      'exam',
      'exams',
      'leseverstehen',
      'sprachbausteine',
      'listening',
      'grading',
      'voice agent',
      'voice agents',
      'curriculum',
    ],
    text: `**Sprachflow** (https://sprachflow.app) is an AI-powered preparation platform for the German TELC B1 exam.

**Key Agentic Milestones:**
- **Built & Supervised by AI Agents:** Autonomous agent loops handle dynamic curriculum generation, question synthesis, and exam paper assembly.
- **5,000+ Exam Practices Monthly:** Has grown organically to over 5,000 exam practices monthly by active learners.
- **Full Exam Suite:** Simulates Leseverstehen 1–3, Sprachbausteine 1–2, Listening Comprehension, and automated AI written grading with instant pedagogical feedback.
- **Voice Agents:** Incorporating low-latency conversational audio agents for the oral speaking exam.`,
    links: [{ label: 'Visit Sprachflow.app', url: 'https://sprachflow.app' }],
  },
  {
    id: 'getblitz',
    priority: 5,
    keywords: [
      'getblitz',
      'blitz',
      'sepa',
      'payment',
      'payments',
      'payment gateway',
      'open source',
      'self hosted',
      'merchant',
      'merchants',
      'qr code',
      'woocommerce',
      'qonto',
      'revolut',
      'wise',
      'fintech',
      'gdpr',
      'websockets',
    ],
    text: `**GetBlitz** (https://getblitz.io) is an open-source, self-hosted SEPA Instant payment gateway designed for European merchants:

- **Zero Intermediary Fees:** Enables direct bank-to-bank EUR transfers via QR codes across all 36 SEPA countries with settlement in <10 seconds.
- **Data Sovereignty:** GDPR-native architecture running on the merchant's own infrastructure—no US cloud or processor lock-in.
- **Real-Time WebSockets:** Uses Socket.io to stream instant payment confirmations directly to merchant webhooks.
- **Ecosystem:** Embeddable TypeScript SDK, WooCommerce WordPress plugin, and native connectors for Qonto, Revolut Business, and Wise.`,
    links: [
      { label: 'GetBlitz Website', url: 'https://getblitz.io' },
      { label: 'GitHub Repository', url: 'https://github.com/getblitz-io/getblitz' },
    ],
  },
  {
    id: 'indicina',
    priority: 5,
    keywords: [
      'indicina',
      'cto',
      'co founder',
      'cofounder',
      'npl',
      'npls',
      'credit',
      'credit scoring',
      'lending',
      'loans',
      'bank',
      'banks',
      'pci dss',
      'ndpr',
      'team',
      'teams',
      'leadership',
      'managed',
      'managing',
      'machine learning',
    ],
    text: `As **CTO & Co-Founder (2022–2024) of Indicina**:

- **20% NPL Reduction:** Directed the Machine Learning team in engineering credit scoring models that cut Non-Performing Loans by 20% for tier-1 commercial banks.
- **Team Leadership:** Managed multiple cross-functional engineering teams (Frontend, Backend, QA, SRE, Product Managers, UX Designers).
- **Lending Infrastructure:** Built B2B2C digital lending platforms using Golang, Next.js, MySQL, Kubernetes, Redis, and RabbitMQ.
- **Regulatory Governance:** Led security and architecture audits to maintain **PCI-DSS Level 1** and NDPR certifications for 3 consecutive years.`,
    links: [{ label: 'Indicina Website', url: 'https://indicina.co' }],
  },
  {
    id: 'atmen',
    priority: 5,
    keywords: [
      'atmen',
      'carbon',
      'carbon accounting',
      'emission',
      'emissions',
      'mass balance',
      'hydrogen',
      'rfnbo',
      'red ii',
      'clean fuel',
      'clean fuels',
      'sustainability',
      'compliance',
      'regtech',
      'methane',
      'current role',
      'current job',
    ],
    text: `At **Atmen Solutions** (2025–Present), Jacob engineers regulatory technology and carbon accounting infrastructure for clean fuels:

- **Dynamic Multi-Stage Emissions Tracking:** Designed a configurable emissions modeling engine that calculates and audits carbon intensity across complex multi-step industrial facilities for green hydrogen and methane.
- **AI-Driven Mass Balance:** Engineered an AI document intelligence pipeline that reconciles Proof of Sustainability (PoS) certificates and trade manifests to automate verified mass-balance carbon accounts.
- **Client Technical Solutions:** Provides direct enterprise client technical advisory and onboarding support, aligning producers and traders with EU RFNBO and RED II/III compliance.`,
    links: [{ label: 'Atmen Website', url: 'https://atmen.co' }],
  },
  {
    id: 'skills',
    priority: 5,
    keywords: [
      'skill',
      'skills',
      'stack',
      'tech stack',
      'programming',
      'programming language',
      'programming languages',
      'language',
      'languages',
      'technologies',
      'technology',
      'framework',
      'frameworks',
      'tooling',
      'golang',
      'typescript',
      'javascript',
      'python',
      'fastapi',
      'next js',
      'react',
      'node js',
      'kubernetes',
      'docker',
      'aws',
      'gcp',
      'cloud',
      'rabbitmq',
      'redis',
      'postgresql',
      'postgres',
      'mysql',
      'sql',
      'database',
      'databases',
      'langgraph',
      'mcp',
      'evals',
      'eval pipelines',
      'infrastructure',
      'devops',
    ],
    text: `**Jacob's working stack**, in rough order of how often he reaches for it:

- **Languages:** Golang, TypeScript, Python.
- **Backend & APIs:** FastAPI, Node.js, RabbitMQ, Redis, PostgreSQL / MySQL.
- **Frontend:** Next.js, React.
- **Infrastructure:** Kubernetes, Docker, AWS, GCP.
- **Agentic AI:** LangGraph, MCP (Model Context Protocol), and eval pipelines for grading and regression-testing agent behaviour.

The combination shows up across all four ventures — Golang and Kubernetes at Indicina, Python and eval pipelines at Sprachflow and Atmen, TypeScript end-to-end at GetBlitz.`,
  },
  {
    id: 'location',
    priority: 4,
    keywords: [
      'location',
      'located',
      'based',
      'where',
      'city',
      'germany',
      'german',
      'munich',
      'augsburg',
      'bavaria',
      'europe',
      'remote',
      'hybrid',
      'relocate',
      'timezone',
      'availability',
      'available',
      'hire',
      'hiring',
      'advisory',
      'contact',
      'email',
      'linkedin',
      'opportunities',
    ],
    text: `**Location & Availability:**
- **Location:** Augsburg & Munich, Bavaria, Germany (hybrid/remote).
- **Languages:** English (Native / C2), German (Professional / B1).
- **Availability:** Open to strategic advisory, technical co-founding in AI & Fintech, and speaking/collaborating on Agentic AI systems.
- **Direct Email:** ${CONTACT_EMAIL}`,
    links: [
      { label: 'Send Email', url: `mailto:${CONTACT_EMAIL}` },
      { label: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/jacob-ayokunle/' },
    ],
  },
  {
    id: 'booking',
    priority: 6,
    keywords: [
      'book',
      'booking',
      'call',
      'calls',
      'calendar',
      'meeting',
      'meet',
      'appointment',
      'schedule',
      'scheduling',
      'intro',
      'consultation',
      'google meet',
      'speak with jacob',
      'talk to jacob',
    ],
    text: `You can schedule a **30-minute introductory or technical advisory call** directly on Jacob's Google Calendar:

- **Key Topics:** Autonomous Agentic AI Systems, European SEPA Instant Fintech Rails (GetBlitz), Clean Fuel Mass-Balance RegTech (Atmen), or Fractional CTO Advisory.
- **Format:** 30-minute Google Meet video session with automatic timezone conversion and instant confirmation.

Booking link: ${BOOKING_URL}`,
    links: [
      { label: 'Book an Appointment (Google Calendar)', url: BOOKING_URL },
      { label: 'Email Jacob Directly', url: `mailto:${CONTACT_EMAIL}` },
    ],
  },
];

/** Returned when nothing scores above zero. Never matched by keyword. */
export const FALLBACK_ENTRY: KnowledgeEntry = {
  id: 'fallback',
  priority: -1,
  keywords: [],
  text: `I can only answer questions about Jacob's work — his ventures, experience, stack and availability — and I don't have anything on that one.

Try one of the suggestions below, or reach him directly:

- Book a 30-minute call: ${BOOKING_URL}
- Email: ${CONTACT_EMAIL}`,
  links: [
    { label: 'Book a Call', url: BOOKING_URL },
    { label: 'Email Jacob', url: `mailto:${CONTACT_EMAIL}` },
  ],
};

export const WELCOME_TEXT =
  "Hi — I'm the assistant for Jacob's portfolio. Ask about Sprachflow, GetBlitz, Atmen, Indicina, his stack, or how to book a call.";
