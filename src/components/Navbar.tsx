import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../data/siteData';
import type { NavigationPath } from '../types';
import { Menu, X, ArrowUpRight, Flame, Clock, Sparkles } from 'lucide-react';
import logoImg from '../assets/the_centrestage_company_logo.jpg';

interface NavbarProps {
  currentPath: NavigationPath;
  onNavigate: (path: NavigationPath) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(() => {
    try {
      return sessionStorage.getItem('baw_banner_dismissed') === 'true';
    } catch {
      return false;
    }
  });

  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 7,
    hours: 8,
    minutes: 24,
    seconds: 40
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Live countdown timer to October 15, 2026
  useEffect(() => {
    const targetDate = new Date('2026-10-15T11:00:00+01:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
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

  const handleDismissBanner = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBannerDismissed(true);
    try {
      sessionStorage.setItem('baw_banner_dismissed', 'true');
    } catch {}
  };

  const formatDigits = (n: number) => String(n).padStart(2, '0');

  return (
    <>
      {/* High-End Dynamic Announcement Ribbon with Live Countdown, Shimmer Sweep & Close 'X' */}
      {!bannerDismissed && (
        <div 
          onClick={() => handleNavClick('/workshop')}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0d0a04] via-[#211706] to-[#0d0a04] border-b border-[#d4af37]/50 px-2 sm:px-4 py-1.5 sm:py-2 text-center cursor-pointer group hover:bg-[#2b1f09] transition-all overflow-hidden select-none shadow-lg shadow-black/70 animate-fadeIn"
        >
          {/* Animated Lightbeam Sweep Effect */}
          <div className="absolute inset-y-0 w-48 bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent animate-banner-shimmer pointer-events-none" />

          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-[10px] sm:text-xs font-mono tracking-wider text-[#d4af37] relative z-10">
            
            {/* Left/Center Info & Countdown Ticker */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 flex-1">
              {/* Flame Badge */}
              <div className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[#d4af37] text-black font-bold rounded-sm uppercase tracking-widest text-[8px] sm:text-[9px] shadow-sm animate-gold-glow">
                <Flame className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-600 fill-red-600 animate-bounce" />
                <span>MASTERCLASS</span>
              </div>

              {/* Title Hook */}
              <span className="text-neutral-200 group-hover:text-white transition-colors flex items-center gap-1 font-sans text-[11px] sm:text-xs truncate max-w-[200px] sm:max-w-none">
                <strong className="text-[#d4af37] font-semibold">BAW Abuja</strong>
                <span className="hidden md:inline text-neutral-300 font-light">• The Business Advantage Workshop</span>
              </span>

              {/* Countdown Ticker */}
              <div className="inline-flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-0.5 bg-black/80 border border-[#d4af37]/40 rounded-sm font-mono text-[9px] sm:text-xs text-white">
                <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#d4af37] animate-pulse" />
                <span className="font-bold text-[#d4af37]">{formatDigits(timeLeft.days)}d</span>
                <span className="text-[#d4af37]/60">:</span>
                <span className="font-bold text-white">{formatDigits(timeLeft.hours)}h</span>
                <span className="text-[#d4af37]/60">:</span>
                <span className="font-bold text-white">{formatDigits(timeLeft.minutes)}m</span>
                <span className="text-[#d4af37]/60">:</span>
                <span className="font-bold text-[#e2bd44]">{formatDigits(timeLeft.seconds)}s</span>
              </div>

              {/* Reserve CTA */}
              <div className="hidden sm:inline-flex items-center gap-1 text-[#d4af37] group-hover:text-white font-semibold underline underline-offset-2 decoration-[#d4af37]/60 group-hover:decoration-white transition-colors">
                <span>Reserve Seat</span>
                <Sparkles className="w-3 h-3 text-[#d4af37] group-hover:rotate-45 transition-transform" />
              </div>
            </div>

            {/* Right: Quick Dismiss Button 'X' */}
            <button
              onClick={handleDismissBanner}
              className="p-1 text-neutral-400 hover:text-white hover:bg-neutral-800/80 rounded-full transition-colors flex-shrink-0"
              aria-label="Dismiss workshop announcement"
              title="Dismiss announcement"
            >
              <X className="w-3.5 h-3.5" />
            </button>

          </div>
        </div>
      )}

      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          !bannerDismissed
            ? 'top-[36px] sm:top-[40px]'
            : 'top-0'
        } ${
          isScrolled
            ? 'bg-[#08080a]/95 backdrop-blur-md border-b border-[#d4af37]/20 py-2.5 sm:py-3 shadow-2xl'
            : 'bg-transparent py-3 sm:py-4'
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
          <nav className="hidden lg:flex items-center space-x-7">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.path;
              const isWorkshop = item.path === '/workshop';
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`relative text-xs tracking-[0.16em] uppercase transition-all duration-200 py-1 font-medium flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#d4af37]'
                      : isWorkshop
                      ? 'text-[#d4af37] font-semibold hover:text-[#e2bd44]'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isWorkshop && (
                    <span className="px-1.5 py-0.5 text-[9px] bg-[#d4af37] text-black font-bold rounded-sm uppercase tracking-widest animate-pulse">
                      BAW
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d4af37] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA Action */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('/workshop')}
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs tracking-wider uppercase font-semibold text-[#d4af37] border border-[#d4af37]/60 hover:bg-[#d4af37]/10 transition-all rounded-sm"
            >
              <span>Join Workshop</span>
            </button>

            <button
              onClick={() => handleNavClick('/contact')}
              className="group relative inline-flex items-center gap-2 px-5 py-2 text-xs tracking-wider uppercase font-semibold text-black bg-[#d4af37] hover:bg-[#e2bd44] transition-all duration-300 rounded-sm shadow-lg shadow-[#d4af37]/10 hover:shadow-[#d4af37]/20"
            >
              <span>Contact</span>
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
