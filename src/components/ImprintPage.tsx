import React, { useEffect } from 'react';
import { ArrowLeft, Building2, Mail, Phone, MapPin, Shield, Scale, ExternalLink, Lock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface ImprintPageProps {
  onBack: () => void;
}

export const ImprintPage: React.FC<ImprintPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Helmet defer={false}>
        <title>Imprint / Impressum | Jacob Ayokunle • JAyokunle Enterprise UG</title>
        <meta name="description" content="Legal notice and imprint (Impressum) for Jacob Ayokunle and JAyokunle Enterprise UG (haftungsbeschränkt), Augsburg, Germany." />
      </Helmet>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all hover:-translate-x-1"
      >
        <ArrowLeft size={16} />
        <span>Back to Main Page</span>
      </button>

      {/* Page Header */}
      <div className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-500/20">
          <Scale size={14} />
          Legal Notice / Impressum
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          Imprint
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
          Information pursuant to § 5 DDG (German Digital Services Act) and § 18 Abs. 2 MStV
        </p>
      </div>

      <div className="space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
        {/* Company Entity Details */}
        <section className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-slate-900 dark:text-white">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
              <Building2 size={20} />
            </div>
            <h2 className="text-xl font-bold">Company Information (Angaben gemäß § 5 DDG)</h2>
          </div>

          <div className="space-y-2 text-slate-600 dark:text-slate-300">
            <p className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
              JAyokunle Enterprise UG (haftungsbeschränkt)
            </p>
            <p className="flex items-start gap-2">
              <MapPin size={16} className="text-emerald-500 shrink-0 mt-1" />
              <span>
                Reutlinger Straße 34<br />
                86156 Augsburg<br />
                Germany
              </span>
            </p>
            <p>Registergericht: Amtsgericht Augsburg</p>
            <p>Handelsregister: HRB 40780</p>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Represented by / Vertreten durch:
            </h3>
            <p>Jacob Ayokunle (Managing Director / Geschäftsführer)</p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-slate-900 dark:text-white">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-500">
              <Mail size={20} />
            </div>
            <h2 className="text-xl font-bold">Contact (Kontakt)</h2>
          </div>

          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-cyan-500 shrink-0" />
              <span>Email: </span>
              <a
                href="mailto:jacob@ayokunle.com"
                className="font-mono text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
              >
                jacob@ayokunle.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-cyan-500 shrink-0" />
              <span>Phone: </span>
              <a
                href="tel:+4915129896770"
                className="font-mono text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                +49 1512 9896770
              </a>
            </p>
            <p className="flex items-center gap-2">
              <ExternalLink size={16} className="text-cyan-500 shrink-0" />
              <span>Website: </span>
              <a
                href="https://ayokunle.com"
                className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
              >
                https://ayokunle.com
              </a>
            </p>
          </div>
        </section>

        {/* Responsible for Content */}
        <section className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-slate-900 dark:text-white">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500">
              <Shield size={20} />
            </div>
            <h2 className="text-xl font-bold">Responsible for Content (Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV)</h2>
          </div>

          <p className="text-slate-600 dark:text-slate-300">
            Jacob Ayokunle<br />
            JAyokunle Enterprise UG (haftungsbeschränkt)<br />
            Augsburg, Germany
          </p>
        </section>

        {/* Legal Disclaimers */}
        <section className="space-y-6 pt-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-200 text-base mb-2">
              EU Dispute Resolution (Streitschlichtung)
            </h3>
            <p>
              The European Commission provides a platform for online dispute resolution (ODR):{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .<br />
              We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-200 text-base mb-2">
              Liability for Content (Haftung für Inhalte)
            </h3>
            <p>
              As a service provider, we are responsible for our own content on these pages in accordance with general legislation pursuant to § 7 Abs. 1 DDG. According to §§ 8 bis 10 DDG, however, we are not obligated to monitor transmitted or stored external information or to investigate circumstances that indicate illegal activity.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-200 text-base mb-2">
              Liability for Links (Haftung für Links)
            </h3>
            <p>
              Our website contains links to external third-party websites over whose content we have no control. Therefore, we cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for the content of the linked pages.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-200 text-base mb-2">
              Copyright (Urheberrecht)
            </h3>
            <p>
              The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, and any form of commercialization beyond the scope of copyright law require the prior written consent of the respective author or creator.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-200 text-base mb-2">
              Privacy (Datenschutz)
            </h3>
            <p className="flex items-center gap-2">
              <Lock size={14} className="text-emerald-500 shrink-0" />
              <a href="#privacy" className="text-emerald-600 dark:text-emerald-400 underline font-medium">
                Privacy Policy / Datenschutzerklärung
              </a>
            </p>
          </div>
        </section>
      </div>

      {/* Footer Back Action */}
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md"
        >
          <ArrowLeft size={16} />
          <span>Return to Homepage</span>
        </button>
      </div>
    </div>
  );
};
