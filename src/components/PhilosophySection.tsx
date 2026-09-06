import React from 'react';
import { Bot, Users, ShieldAlert, Sparkles, Check } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const pillars = [
    {
      icon: <Bot className="w-8 h-8 text-emerald-500" />,
      title: 'Agentic Engineering in Practice',
      tagline: 'Moving beyond autocomplete to autonomous orchestration',
      description:
        'Software engineering today is less about typing syntax and more about specifying, orchestrating, and verifying. That means designing multi-agent loops, drawing clear context boundaries, using Model Context Protocol (MCP), and building self-healing verification pipelines. Sprachflow is built and operated this way, with humans reviewing the exam-critical paths.',
      points: [
        'Deterministic tool execution via MCP',
        'Multi-agent supervisor-worker swarms',
        'Synthetic evaluation & behavioral guardrails',
        'Human-in-the-loop oversight for critical branches',
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: 'From 0 to 1 and 1 to 10',
      tagline: 'Founder agility combined with executive scale',
      description:
        'Hands-on technical depth paired with organizational leadership. As a founder, I build MVPs and validate PMF fast. As former CTO & Co-Founder of Indicina, I led multiple cross-functional teams across frontend, backend, ML, QA, SRE, and product design while establishing predictable CI/CD delivery.',
      points: [
        'Hands-on full-stack technical prototyping',
        'Leading multiple cross-functional engineering teams',
        'Engineering culture grounded in velocity & quality',
        'Mentoring senior engineers and setting transparent OKRs',
      ],
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-indigo-500" />,
      title: 'Regulated Rails & Audit Rigor',
      tagline: 'High-assurance architecture for mission-critical stakes',
      description:
        'Whether moving EUR via SEPA Instant, processing ₦25M+ (≈ €60k) in daily payments, or meeting European clean energy mandates (RFNBO / RED II/III), I design systems where failure is not an option. Security and audit readiness are built in from day one.',
      points: [
        '3 consecutive years of PCI-DSS & NDPR audits passed',
        'Zero-fee, self-hosted European SEPA Instant rails (GetBlitz)',
        'ML credit decisioning cutting NPLs by 20% for top banks',
        'Traceable, audit-ready compliance for green fuels (Atmen)',
      ],
    },
  ];

  return (
    <section id="philosophy" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-16">
        {/* Sticky Header Column */}
        <div className="lg:sticky lg:top-28 self-start text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-500/20">
            <Sparkles size={14} />
            Operating Principles
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Leadership & Architecture Philosophy
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            How I approach technology, large-scale engineering, and leading teams in the agentic era.
          </p>
        </div>

        {/* Pillars Stack */}
        <div className="flex flex-col gap-8">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-7 sm:p-8 bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/90 w-fit mb-6 border border-slate-200 dark:border-slate-700">
                  {p.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {p.title}
                </h3>

                <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                  {p.tagline}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                {p.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
