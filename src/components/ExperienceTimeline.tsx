import React, { useState } from 'react';
import { experiences, education } from '../data/experience';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('atmen');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-indigo-500/20">
          <Briefcase size={14} />
          Living Career Dossier
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Engineering & Leadership Journey
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
          Over a decade of hands-on architecture, startup founding, and executive management across European enterprises, e-commerce, and fintech.
        </p>
      </div>

      {/* Timeline Items */}
      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 space-y-10">
        {experiences.map((exp) => {
          const isExpanded = expandedId === exp.id;

          return (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-emerald-500 transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-500" />

              {/* Experience Card */}
              <div className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                          {exp.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 mt-1 flex-wrap">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} className="text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                    <span className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Bullets List */}
                <div className="mt-4 space-y-2.5">
                  {exp.bullets.slice(0, isExpanded ? exp.bullets.length : 2).map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Show more/less if bullets > 2 */}
                {exp.bullets.length > 2 && (
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    aria-expanded={isExpanded}
                    className="mt-4 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center gap-1 transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        <span>Show fewer details</span>
                        <ChevronUp size={14} />
                      </>
                    ) : (
                      <>
                        <span>Show all {exp.bullets.length} highlights</span>
                        <ChevronDown size={14} />
                      </>
                    )}
                  </button>
                )}

                {/* Tech Chips */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {exp.url && (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center gap-1 transition-colors"
                    >
                      <span>Company Site</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Education Block */}
      <section
        aria-labelledby="education-heading"
        className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800"
      >
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap size={22} className="text-emerald-500" />
          <h2
            id="education-heading"
            className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
          >
            Academic Background & Foundation
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm"
            >
              <div className="font-bold text-slate-900 dark:text-white text-base mb-1">
                {edu.institution}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                {edu.degree}
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span>{edu.period}</span>
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
