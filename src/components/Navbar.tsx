import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../data/siteData';
import type { NavigationPath } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPath: NavigationPath;
  onNavigate: (path: NavigationPath) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: NavigationPath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-[#d4af37]/15 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('/')}
          className="group text-left flex flex-col focus:outline-none"
        >
          <span className="font-serif text-xl md:text-2xl font-bold tracking-widest text-white group-hover:text-[#d4af37] transition-colors">
            THE CENTRESTAGE
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-sans font-medium">
            Company
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`relative text-xs tracking-[0.18em] uppercase transition-all duration-200 py-1 font-medium ${
                  isActive
                    ? 'text-[#d4af37]'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d4af37] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA Action */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => handleNavClick('/contact')}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-wider uppercase font-semibold text-black bg-[#d4af37] hover:bg-[#e2bd44] transition-all duration-300 rounded-sm shadow-lg shadow-[#d4af37]/10 hover:shadow-[#d4af37]/20"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-300 hover:text-[#d4af37] focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[70px] bg-[#08080a]/98 backdrop-blur-xl z-40 flex flex-col justify-between p-8 border-t border-[#d4af37]/20 animate-fadeIn">
          <div className="flex flex-col space-y-6 pt-6">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left text-lg font-serif tracking-widest uppercase transition-colors flex items-center justify-between py-2 border-b border-neutral-900 ${
                    isActive ? 'text-[#d4af37] font-semibold' : 'text-neutral-300'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-8 border-t border-[#d4af37]/20 space-y-4">
            <button
              onClick={() => handleNavClick('/contact')}
              className="w-full py-3 text-center text-sm font-semibold tracking-widest uppercase bg-[#d4af37] text-black rounded-sm shadow-md"
            >
              Start a Conversation
            </button>
            <p className="text-center text-xs text-neutral-500 font-serif tracking-widest italic">
              Strategy. Story. Visibility.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
