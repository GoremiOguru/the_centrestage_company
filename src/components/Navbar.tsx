import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../data/siteData';
import type { NavigationPath } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/the_centrestage_company_logo.jpg';

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

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (path: NavigationPath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08080a]/95 backdrop-blur-md border-b border-[#d4af37]/20 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Beautifully Displayed Company Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="group text-left flex items-center focus:outline-none"
          >
            <img
              src={logoImg}
              alt="The CENTRESTAGE Company Logo"
              className="h-10 sm:h-12 w-auto object-contain max-w-[200px] sm:max-w-[240px] border border-[#d4af37]/30 rounded-sm p-1 bg-black/40 group-hover:border-[#d4af37] transition-all"
            />
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
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-[#d4af37] hover:text-white focus:outline-none"
            aria-label="Open Navigation"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </header>

      {/* FULL-SCREEN FIXED Z-999 MOBILE NAVIGATION DRAWER (Fixes Screenshot 4 Scroll Bug) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-[#08080a] text-neutral-100 flex flex-col justify-between p-6 sm:p-10 overflow-y-auto animate-fadeIn">
          
          {/* Header Bar inside drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-neutral-900">
            <img
              src={logoImg}
              alt="Logo"
              className="h-10 w-auto object-contain max-w-[180px] border border-[#d4af37]/40 rounded-sm p-1"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 text-white bg-neutral-900 border border-[#d4af37]/40 hover:bg-[#d4af37] hover:text-black rounded-full transition-all"
              aria-label="Close Navigation"
            >
              <X className="w-6 h-6 text-[#d4af37] hover:text-black" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-6 my-8">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left text-2xl font-serif tracking-widest uppercase transition-colors flex items-center justify-between py-3 border-b border-neutral-900 ${
                    isActive ? 'text-[#d4af37] font-semibold' : 'text-neutral-200 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />}
                </button>
              );
            })}
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-neutral-900 space-y-4">
            <button
              onClick={() => handleNavClick('/contact')}
              className="w-full py-4 text-center text-xs font-semibold tracking-widest uppercase bg-[#d4af37] text-black rounded-sm shadow-xl whitespace-normal break-words"
            >
              Start a Conversation
            </button>
            <p className="text-center text-xs text-neutral-500 font-serif tracking-widest italic">
              Strategy. Story. Visibility.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
