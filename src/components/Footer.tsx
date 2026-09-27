import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenImprint?: () => void;
  onOpenPrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenImprint, onOpenPrivacy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openImprint = () => {
    if (onOpenImprint) {
      onOpenImprint();
    } else {
      window.location.hash = '#imprint';
    }
  };

  const openPrivacy = () => {
    if (onOpenPrivacy) {
      onOpenPrivacy();
    } else {
      window.location.hash = '#privacy';
    }
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-950/60 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Column: Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-slate-900 dark:text-white text-base">
              Jacob Ayokunle
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              Agentic Engineer
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
            Augsburg & Munich, Germany • Founder @ Sprachflow & GetBlitz • former CTO @ Indicina
          </p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">
            Personal website • Managing Director @{' '}
            <a
              href="https://jayokunle.com"
              target="_blank"
              rel="noopener"
              className="font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 underline decoration-dotted transition-colors"
            >
              JAyokunle ↗
            </a>
          </p>
        </div>

        {/* Center: Legal, GEO & Search Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <a
            href="https://calendar.app.google/4byXSktHwc55ztvA6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors underline font-sans font-semibold text-emerald-600 dark:text-emerald-400"
          >
            Book an Appointment ↗
          </a>
          <span>•</span>
          <button
            onClick={openImprint}
            className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors underline font-sans font-semibold"
          >
            Imprint / Impressum
          </button>
          <span>•</span>
          <button
            onClick={openPrivacy}
            className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors underline font-sans font-semibold"
          >
            Privacy / Datenschutz
          </button>
          <span>•</span>
          <a
            href="/llms.txt"
            target="_blank"
            rel="noopener"
            className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors underline decoration-dotted"
          >
            llms.txt (GEO standard)
          </a>
          <span>•</span>
          <a
            href="/llms-full.txt"
            target="_blank"
            rel="noopener"
            className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors underline decoration-dotted"
          >
            llms-full.txt
          </a>
          <span>•</span>
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener"
            className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
          >
            sitemap.xml
          </a>
        </div>

        {/* Right Column: Back to top & Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Jacob Ayokunle
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-110"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
