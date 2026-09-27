import React from 'react';
import {
  ArrowRight,
  Calendar,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Twitter,
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-emerald-500/20 via-cyan-500/15 to-indigo-500/10 dark:from-emerald-500/25 dark:via-cyan-500/15 dark:to-indigo-500/10 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md animate-fade-in shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-emerald-500" />
            Augsburg & Munich, Germany
          </span>
          <span className="text-emerald-500/40">•</span>
          <span>Open to co-building & speaking</span>
        </div>

        {/* Avatar with Glow Ring */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200" />
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-white dark:bg-slate-950 shadow-2xl overflow-hidden border-2 border-slate-200/60 dark:border-slate-800">
            <img
              src="/images/avatar-320.webp"
              srcSet="/images/avatar-320.webp 1x, /images/avatar-640.webp 2x"
              width={144}
              height={144}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              alt="Jacob Ayokunle"
              className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {/* Builder Icon Badge */}
          <div className="absolute bottom-1 right-1 p-2 rounded-full bg-emerald-500 text-white shadow-lg border-2 border-white dark:border-slate-950 flex items-center justify-center">
            <Sparkles size={16} />
          </div>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
          Jacob Ayokunle
        </h1>

        {/* Tagline / Subtitle */}
        <div className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-emerald-600 via-cyan-600 to-indigo-600 dark:from-emerald-400 dark:via-cyan-300 dark:to-indigo-300 bg-clip-text text-transparent mb-6">
          Agentic Engineer • Tech Founder • Systems Architect
        </div>

        {/* Description / Mission */}
        <p className="max-w-3xl text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10 font-normal">
          Building autonomous software systems and the teams that ship them. Founder of{' '}
          <a
            href="https://sprachflow.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 dark:text-emerald-400 font-semibold underline decoration-emerald-500/40 hover:decoration-emerald-500 transition-colors"
          >
            Sprachflow
          </a>{' '}
          (AI-operated, 5,000+ exams/mo) and creator of{' '}
          <a
            href="https://getblitz.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 dark:text-cyan-400 font-semibold underline decoration-cyan-500/40 hover:decoration-cyan-500 transition-colors"
          >
            GetBlitz
          </a>{' '}
          (open-source SEPA gateway). Former CTO & Co-Founder of{' '}
          <a
            href="https://indicina.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 font-semibold underline decoration-indigo-500/40 hover:decoration-indigo-500 transition-colors"
          >
            Indicina
          </a>{' '}
          with 10+ years building bank-grade fintech and leading cross-functional engineering teams.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-slate-900 dark:bg-emerald-500 dark:hover:bg-emerald-400 hover:bg-slate-800 shadow-md shadow-slate-900/10 dark:shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Calendar size={18} />
            <span>Book a Call</span>
          </a>

          <a
            href="#ventures"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-300/80 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-600 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Ventures</span>
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Direct Social Links */}
        <div className="flex items-center gap-6 text-slate-500 dark:text-slate-400">
          <a
            href="https://www.linkedin.com/in/jacob-ayokunle/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors p-1 hover:scale-110 duration-200"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/aderopoa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors p-1 hover:scale-110 duration-200"
          >
            <Github size={22} />
          </a>
          <a
            href="https://x.com/jayrobzy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            title="X (Twitter)"
            className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors p-1 hover:scale-110 duration-200"
          >
            <Twitter size={22} />
          </a>
          <a
            href="mailto:jacob@ayokunle.com"
            aria-label="Email"
            title="Email"
            className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors p-1 hover:scale-110 duration-200"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};
