import React, { useEffect } from 'react';
import {
  ArrowLeft,
  Bot,
  Building2,
  Cookie,
  ExternalLink,
  Lock,
  Mail,
  Server,
  Type,
  UserCheck,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface PrivacyPageProps {
  onBack: () => void;
}

const CARD_CLASS =
  'rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm';
const LINK_CLASS = 'text-emerald-600 dark:text-emerald-400 hover:underline font-medium';

interface SectionProps {
  icon: React.ReactNode;
  accent: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ icon, accent, title, children }) => (
  <section className={CARD_CLASS}>
    <div className="flex items-center gap-3 mb-4 text-slate-900 dark:text-white">
      <div className={`p-2 rounded-xl ${accent}`}>{icon}</div>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
    <div className="space-y-3 text-slate-600 dark:text-slate-300">{children}</div>
  </section>
);

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Helmet defer={false}>
        <title>Privacy Policy / Datenschutzerklärung | Jacob Ayokunle</title>
        <meta
          name="description"
          content="Privacy policy (Datenschutzerklärung) for ayokunle.com: hosting on Cloudflare Workers, no cookies or tracking, self-hosted fonts, optional AI assistant, and your GDPR rights."
        />
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
          <Lock size={14} />
          Privacy / Datenschutz
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
          How this website handles your data under the GDPR (DSGVO) and the TDDDG. Last updated: September 2026.
        </p>
      </div>

      <div className="space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
        <Section
          icon={<Building2 size={20} />}
          accent="bg-emerald-500/10 text-emerald-500"
          title="1. Controller (Verantwortlicher)"
        >
          <p>
            Jacob Ayokunle (private individual), Augsburg, Germany. The full postal address is listed in the{' '}
            <a href="#imprint" className={LINK_CLASS}>
              Imprint
            </a>
            . Email:{' '}
            <a href="mailto:jacob@ayokunle.com" className={`${LINK_CLASS} font-mono`}>
              jacob@ayokunle.com
            </a>
          </p>
        </Section>

        <Section
          icon={<Server size={20} />}
          accent="bg-cyan-500/10 text-cyan-500"
          title="2. Hosting (Hosting)"
        >
          <p>
            This website is delivered from the global edge network of Cloudflare, Inc., 101 Townsend Street, San
            Francisco, CA 94107, USA (Cloudflare Workers). When you open a page, Cloudflare&apos;s servers automatically
            process connection data: your IP address, browser type and version (user agent), the date and time of the
            request, and the referring URL. This is technically necessary to deliver the site and protect it against
            abuse. Cloudflare retains this log data for a short period and we do not access it for any other purpose.
          </p>
          <p>
            Legal basis: Art. 6(1)(f) GDPR (legitimate interest in providing a secure, reliable website). Requests from
            the EU are normally served from Cloudflare data centres in the EU; Cloudflare, Inc. also participates in the
            EU-US Data Privacy Framework, which the European Commission recognises as providing an adequate level of
            protection (Art. 45 GDPR). Details:{' '}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              Cloudflare Privacy Policy
            </a>
            .
          </p>
        </Section>

        <Section
          icon={<Cookie size={20} />}
          accent="bg-amber-500/10 text-amber-500"
          title="3. No Cookies, No Tracking (Keine Cookies, kein Tracking)"
        >
          <p>
            This website sets no cookies and uses no analytics, tracking pixels, fingerprinting, or advertising
            technology. We do not build user profiles.
          </p>
          <p>
            The only data stored on your device is a single <code className="font-mono text-xs">localStorage</code> key,{' '}
            <code className="font-mono text-xs">ayokunle_theme</code>, which remembers your colour-scheme preference
            (dark or light). It contains no identifier and is never transmitted to us. Storing it is strictly necessary
            to provide the display setting you explicitly chose (§ 25(2) TDDDG; Art. 6(1)(f) GDPR). You can delete it at
            any time via your browser settings.
          </p>
        </Section>

        <Section
          icon={<Type size={20} />}
          accent="bg-indigo-500/10 text-indigo-500"
          title="4. Fonts (Schriftarten)"
        >
          <p>
            All web fonts (Inter) are self-hosted and delivered from this domain. No requests are made to Google Fonts
            or any other third-party font service, so no personal data is transferred for font loading.
          </p>
        </Section>

        <Section
          icon={<Bot size={20} />}
          accent="bg-violet-500/10 text-violet-500"
          title="5. Optional AI Assistant (Optionaler KI-Assistent)"
        >
          <p>
            The site includes an optional chat assistant. It only becomes active when you type and send a message. If
            you use it, your message and the preceding conversation are sent to our API endpoint, operated on Cloudflare
            Workers (Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA), and forwarded to a large language
            model provider, OpenRouter, Inc. (USA), to generate an answer.
          </p>
          <p>
            We do not store your messages. The providers may process them transiently to deliver the response and
            operate their services; please refer to the privacy policies of{' '}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              Cloudflare
            </a>{' '}
            and{' '}
            <a href="https://openrouter.ai/privacy" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
              OpenRouter
            </a>
            . Please do not enter personal data (yours or anyone else&apos;s) into the chat.
          </p>
          <p>
            Legal basis: Art. 6(1)(a) GDPR (consent, expressed by voluntarily sending a message) and Art. 6(1)(f) GDPR
            (legitimate interest in answering your enquiry). Transfers to the US rely on the EU-US Data Privacy
            Framework and/or Standard Contractual Clauses (Art. 46(2)(c) GDPR) of the respective provider.
          </p>
        </Section>

        <Section
          icon={<ExternalLink size={20} />}
          accent="bg-sky-500/10 text-sky-500"
          title="6. External Links (Externe Links)"
        >
          <p>
            This site links to third-party services such as Google Calendar (appointment booking), LinkedIn, GitHub,
            and X. No data is transferred to these providers until you actively follow a link. Once you do, the
            respective provider is solely responsible for the processing of your data; their privacy policies apply.
          </p>
        </Section>

        <Section
          icon={<UserCheck size={20} />}
          accent="bg-rose-500/10 text-rose-500"
          title="7. Your Rights (Ihre Rechte)"
        >
          <p>
            Under Art. 15–21 GDPR you have the right to access, rectification, erasure, restriction of processing, data
            portability, and to object to processing based on legitimate interests. Where processing is based on
            consent, you may withdraw it at any time with effect for the future (Art. 7(3) GDPR).
          </p>
          <p>
            You also have the right to lodge a complaint with a supervisory authority (Art. 77 GDPR). The authority
            responsible for us is the Bayerisches Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522
            Ansbach, Germany —{' '}
            <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
              www.lda.bayern.de
            </a>
            .
          </p>
        </Section>

        <Section
          icon={<Mail size={20} />}
          accent="bg-emerald-500/10 text-emerald-500"
          title="8. Contact for Privacy Matters (Kontakt Datenschutz)"
        >
          <p>
            For any questions about this policy or to exercise your rights, write to{' '}
            <a href="mailto:jacob@ayokunle.com" className={`${LINK_CLASS} font-mono`}>
              jacob@ayokunle.com
            </a>
            . We may update this policy when the site or the legal situation changes; the current version is always
            published here.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Last updated: September 2026</p>
        </Section>
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
