import React, { useState } from 'react';
import { ventures } from '../data/ventures';
import { VentureCard } from './VentureCard';
import { Rocket } from 'lucide-react';

type FilterCategory = 'all' | 'founder' | 'ai' | 'fintech';

const FILTERS: { id: FilterCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'founder', label: 'Founder' },
  { id: 'ai', label: 'Agentic & AI' },
  { id: 'fintech', label: 'Fintech' },
];

export const VenturesSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterCategory>('all');

  const filteredVentures = ventures.filter(
    (v) => filter === 'all' || v.categories.includes(filter),
  );

  return (
    <section id="ventures" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-500/20">
          <Rocket size={14} />
          Featured Ventures & Flagship Platforms
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          What I've Built & Scaled
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
          From self-hosted open-source fintech rails and AI-operated learning systems to regulated credit risk engines.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
          {FILTERS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              aria-pressed={filter === cat.id}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === cat.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20 scale-105'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Ventures Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {filteredVentures.map((venture) => (
          <VentureCard key={venture.id} venture={venture} />
        ))}
      </div>
    </section>
  );
};
