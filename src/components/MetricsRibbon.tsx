import React from 'react';
import { metrics } from '../data/metrics';
import { Sparkles } from 'lucide-react';

export const MetricsRibbon: React.FC = () => {
  return (
    <section className="py-12 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <Sparkles size={13} />
            Quantified Impact & Proven Track Record
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className={`p-4 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 ${
                metric.highlight
                  ? 'bg-gradient-to-b from-emerald-500/10 to-transparent dark:from-emerald-500/15 border border-emerald-500/30'
                  : 'bg-white dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/70 shadow-sm'
              }`}
            >
              <div
                className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-1 tracking-tight whitespace-nowrap ${
                  metric.highlight
                    ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent'
                    : 'text-slate-900 dark:text-white'
                }`}
              >
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mb-1 leading-snug">
                {metric.label}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-tight">
                {metric.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
