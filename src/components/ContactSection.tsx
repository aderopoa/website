import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Linkedin,
  Github,
  Twitter,
  MapPin,
  Sparkles,
  ArrowUpRight,
  Calendar,
  Clock,
  Video,
  ShieldCheck,
} from 'lucide-react';

const GOOGLE_CALENDAR_SHORT_URL = 'https://calendar.app.google/4byXSktHwc55ztvA6';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'jacob@ayokunle.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard unavailable (insecure context / permission denied); the mailto link still works.
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Anchor for direct booking navigation */}
      <div id="booking" className="scroll-mt-24" />

      <div className="rounded-3xl p-6 sm:p-12 lg:p-14 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
        {/* Glow orb */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-500/30">
            <Sparkles size={14} />
            Let's Connect & Collaborate
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Schedule a Call or Reach Out
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Whether you want to discuss autonomous agent systems, collaborate on fintech and clean energy infrastructure, or invite me to speak, choose the channel that works best for you.
          </p>
          <p className="mt-3 text-sm text-slate-400">
            Looking for paid advisory or fractional CTO support? That runs through my company,{' '}
            <a
              href="https://jayokunle.com"
              target="_blank"
              rel="noopener"
              className="font-semibold text-emerald-400 hover:text-emerald-300 underline decoration-dotted transition-colors"
            >
              JAyokunle ↗
            </a>
            .
          </p>
        </div>

        {/* Two-Column Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {/* Card 1: Google Calendar Booking */}
          <div className="rounded-2xl p-6 sm:p-8 bg-slate-800/70 border border-emerald-500/30 hover:border-emerald-500/50 shadow-xl backdrop-blur-md flex flex-col justify-between transition-all duration-300 relative group">
            <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500 text-white shadow-md">
                <ShieldCheck size={12} /> Instant Confirmation
              </span>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Book an Appointment</h3>
                  <p className="text-xs text-slate-400 font-medium">Google Calendar Scheduling</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Pick a 30-minute slot directly on my calendar. Ideal for intro chats, agentic workflows, speaking invitations, or co-building discussions.
              </p>

              {/* Call Details / Badges */}
              <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-emerald-400 shrink-0" />
                  <span><strong>30 Minutes</strong> · One-on-one video meeting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video size={15} className="text-emerald-400 shrink-0" />
                  <span><strong>Google Meet</strong> · Automatic video call link generated</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={15} className="text-emerald-400 shrink-0" />
                  <span><strong>Timezones</strong> · Automatically adjusted to your local time</span>
                </div>
              </div>
            </div>

            {/* Action: Single Clean Booking Button */}
            <div className="pt-4 border-t border-slate-700/60">
              <a
                href={GOOGLE_CALENDAR_SHORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 shadow-md shadow-emerald-950/50 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <Calendar size={18} />
                <span>Book an Appointment</span>
              </a>
            </div>
          </div>

          {/* Card 2: Direct Email Inquiry */}
          <div className="rounded-2xl p-6 sm:p-8 bg-slate-800/70 border border-slate-700 hover:border-slate-600 shadow-xl backdrop-blur-md flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Direct Email</h3>
                  <p className="text-xs text-slate-400 font-medium">For written inquiries & proposals</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Prefer sending written specifications, investment briefs, or long-form proposals? Reach out directly to my primary inbox.
              </p>

              {/* Email Display Card */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 mb-6 flex items-center justify-between gap-3">
                <a
                  href={`mailto:${email}`}
                  className="font-mono text-sm sm:text-base font-semibold text-slate-100 hover:text-cyan-400 transition-colors truncate"
                >
                  {email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all flex items-center gap-1.5 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Typical response time: within 24 hours</span>
              </div>
            </div>

            {/* Action */}
            <div className="pt-4 border-t border-slate-700/60">
              <a
                href={`mailto:${email}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-slate-600 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <Mail size={18} />
                <span>Send an Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Location & Social Channels */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <MapPin size={16} className="text-emerald-400 shrink-0" />
            <span>Augsburg & Munich, Germany (Bavaria)</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/jacob-ayokunle/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700/80 transition-all flex items-center gap-2 hover:scale-105"
            >
              <Linkedin size={16} className="text-cyan-400" />
              <span>LinkedIn</span>
              <ArrowUpRight size={13} className="text-slate-400" />
            </a>

            <a
              href="https://github.com/aderopoa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700/80 transition-all flex items-center gap-2 hover:scale-105"
            >
              <Github size={16} />
              <span>GitHub</span>
              <ArrowUpRight size={13} className="text-slate-400" />
            </a>

            <a
              href="https://x.com/jayrobzy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700/80 transition-all flex items-center gap-2 hover:scale-105"
            >
              <Twitter size={16} className="text-sky-400" />
              <span>X (Twitter)</span>
              <ArrowUpRight size={13} className="text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
