import React from 'react';
import { Venture } from '../types';
import { ExternalLink, Github, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';

interface VentureCardProps {
  venture: Venture;
}

export const VentureCard: React.FC<VentureCardProps> = ({ venture }) => {
  return (
    <div className="group relative rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
      {/* Ambient background glow on card hover */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/15 transition-all duration-500 pointer-events-none" />

      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
            <Sparkles size={12} />
            {venture.badge}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            {venture.period}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-4">
          <div className="flex items-baseline justify-between gap-2 flex-wrap">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {venture.title}
            </h3>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              {venture.role}
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
            {venture.subtitle}
          </p>
        </div>

        {/* Live Status Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 mb-6 border border-slate-200 dark:border-slate-700">
          <TrendingUp size={13} className="text-emerald-500" />
          <span>{venture.statusBadge}</span>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          {venture.description}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/70 mb-6 text-center">
          {venture.metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {m.value}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="space-y-2 mb-6">
          {venture.highlights.map((h, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Tags & Outbound CTAs */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex flex-wrap gap-1.5 mb-6">
          {venture.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={venture.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm text-white bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-500 transition-all shadow-sm group/btn"
          >
            <span>Visit Platform</span>
            <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>

          {venture.githubLink && (
            <a
              href={venture.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${venture.title} on GitHub`}
              className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
