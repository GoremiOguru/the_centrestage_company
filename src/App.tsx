import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WorkPage } from './pages/WorkPage';
import { EcosystemPage } from './pages/EcosystemPage';
import { ContactPage } from './pages/ContactPage';
import type { NavigationPath } from './types';

export function App() {
  const [currentPath, setCurrentPath] = useState<NavigationPath>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname as NavigationPath;
      if (['/', '/about', '/our-work', '/ecosystem', '/contact'].includes(path)) {
        return path;
      }
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as NavigationPath;
      if (['/', '/about', '/our-work', '/ecosystem', '/contact'].includes(path)) {
        setCurrentPath(path);
      } else {
        setCurrentPath('/');
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

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={handleNavigate} />;
      case '/about':
        return <AboutPage onNavigate={handleNavigate} />;
      case '/our-work':
        return <WorkPage onNavigate={handleNavigate} />;
      case '/ecosystem':
        return <EcosystemPage onNavigate={handleNavigate} />;
      case '/contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
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
