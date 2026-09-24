import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WorkPage } from './pages/WorkPage';
import { EcosystemPage } from './pages/EcosystemPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import type { NavigationPath, InsightArticle } from './types';

export function App() {
  const [currentPath, setCurrentPath] = useState<NavigationPath>('/');
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as NavigationPath;
      if (['/', '/about', '/our-work', '/ecosystem', '/insights', '/contact'].includes(path)) {
        setCurrentPath(path);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: NavigationPath) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenArticle = (article: InsightArticle) => {
    setSelectedArticle(article);
    handleNavigate('/insights');
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={handleNavigate} onOpenArticle={handleOpenArticle} />;
      case '/about':
        return <AboutPage onNavigate={handleNavigate} />;
      case '/our-work':
        return <WorkPage onNavigate={handleNavigate} />;
      case '/ecosystem':
        return <EcosystemPage onNavigate={handleNavigate} />;
      case '/insights':
        return <InsightsPage onNavigate={handleNavigate} selectedArticleFromParent={selectedArticle} />;
      case '/contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} onOpenArticle={handleOpenArticle} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-neutral-100 flex flex-col font-sans selection:bg-[#d4af37] selection:text-black">
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
