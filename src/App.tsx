import { useState, useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsRibbon } from './components/MetricsRibbon';
import { VenturesSection } from './components/VenturesSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { PhilosophySection } from './components/PhilosophySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ImprintPage } from './components/ImprintPage';
import { PrivacyPage } from './components/PrivacyPage';

// The console pulls in the AI SDK + react-markdown (~300 KB); keep it out of the
// critical bundle and load it once the rest of the page is interactive.
const AgentConsole = lazy(() =>
  import('./components/AgentConsole').then((m) => ({ default: m.AgentConsole })),
);

const AgentConsoleFallback = () => (
  <section id="agent-console" aria-busy="true" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto h-[560px] rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900/95 animate-pulse" />
  </section>
);

type Page = 'home' | 'imprint' | 'privacy';

const PAGE_URLS: Record<Page, string> = {
  home: '/',
  imprint: '#imprint',
  privacy: '#privacy',
};

/**
 * Derive the current page from the URL. Supports both hash routes (#imprint)
 * and path routes (/imprint, served via the 404.html SPA fallback on GitHub Pages).
 */
const resolvePage = (): Page => {
  if (typeof window === 'undefined') return 'home';
  const { pathname, hash } = window.location;
  // Hash wins over path so that /imprint#privacy (a hash link clicked while on the
  // path-routed imprint page) resolves to the most recent intent.
  if (hash === '#privacy') return 'privacy';
  if (hash === '#imprint') return 'imprint';
  if (pathname.includes('privacy')) return 'privacy';
  if (pathname.includes('imprint')) return 'imprint';
  return 'home';
};

export function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>(resolvePage);

  useEffect(() => {
    const handleNavigation = () => setCurrentPage(resolvePage());

    window.addEventListener('popstate', handleNavigation);
    window.addEventListener('hashchange', handleNavigation);
    return () => {
      window.removeEventListener('popstate', handleNavigation);
      window.removeEventListener('hashchange', handleNavigation);
    };
  }, []);

  const navigateTo = (page: Page) => {
    if (page !== currentPage) {
      // Only touch history when the page actually changes; otherwise the back
      // button would have to step through a pile of identical entries.
      window.history.pushState(null, '', PAGE_URLS[page]);
      setCurrentPage(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-500 selection:text-white transition-colors duration-300 font-sans antialiased">
      {/* Static metadata (OG, Twitter, canonical, JSON-LD) lives in index.html. Helmet only handles per-page title/description. */}
      {currentPage === 'home' && (
        <Helmet defer={false}>
          <title>Jacob Ayokunle | Agentic Engineer • Tech Founder • Systems Architect</title>
          <meta
            name="description"
            content="Jacob Ayokunle is an Agentic Engineer, Tech Founder (Sprachflow, GetBlitz), and former CTO & Co-Founder of Indicina based in Augsburg & Munich, Germany. Specializing in autonomous multi-agent systems, open-source SEPA fintech rails, and scaling high-performance engineering teams."
          />
        </Helmet>
      )}

      {/* Navigation */}
      <Navbar onNavigateHome={() => navigateTo('home')} />

      {/* Conditional Page View */}
      <main>
        {currentPage === 'imprint' && <ImprintPage onBack={() => navigateTo('home')} />}
        {currentPage === 'privacy' && <PrivacyPage onBack={() => navigateTo('home')} />}
        {currentPage === 'home' && (
          <>
            <Hero />
            <MetricsRibbon />
            <VenturesSection />
            <Suspense fallback={<AgentConsoleFallback />}>
              <AgentConsole />
            </Suspense>
            <ExperienceTimeline />
            <PhilosophySection />
            <ContactSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onOpenImprint={() => navigateTo('imprint')} onOpenPrivacy={() => navigateTo('privacy')} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
