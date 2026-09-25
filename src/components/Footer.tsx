import React from 'react';
import type { NavigationPath } from '../types';
import { ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/the_centrestage_company_logo.jpg';

interface FooterProps {
  onNavigate: (path: NavigationPath) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: NavigationPath) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] text-neutral-300 pt-20 pb-12 border-t border-[#d4af37]/20 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-neutral-900">
          
          {/* Brand Intro Column */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="The CENTRESTAGE Company Logo"
                className="w-10 h-10 rounded-sm border border-[#d4af37]/30 object-cover"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-widest text-white leading-none">
                  THE CENTRESTAGE
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-medium pt-1">
                  Company
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              The digital home of an intelligent, contemporary African company operating at the intersection of strategy, story, reputation, visibility and influence.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs font-serif tracking-widest text-[#d4af37] border border-[#d4af37]/30 px-3 py-1 rounded-sm">
                Strategy. Story. Visibility.
              </span>
            </div>
          </div>

          {/* Column 1: THE CENTRESTAGE Architecture */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-[#d4af37] tracking-[0.2em] uppercase font-semibold">
              THE CENTRESTAGE
            </h4>
            <ul className="space-y-3 text-xs tracking-wider text-neutral-400">
              <li>
                <button
                  onClick={() => handleNav('/')}
                  className="hover:text-white transition-colors text-left"
                >
                  The CENTRESTAGE Company
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/ecosystem')}
                  className="hover:text-white transition-colors text-left"
                >
                  The CENTRESTAGE Foundation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/ecosystem')}
                  className="hover:text-white transition-colors text-left"
                >
                  CentreStage Club
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/ecosystem')}
                  className="hover:text-white transition-colors text-left"
                >
                  The Irreplaceable Advantage™
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/ecosystem')}
                  className="hover:text-white transition-colors text-left"
                >
                  The CentreStage Mixer
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: EXPLORE */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-[#d4af37] tracking-[0.2em] uppercase font-semibold">
              EXPLORE
            </h4>
            <ul className="space-y-3 text-xs tracking-wider text-neutral-400">
              <li>
                <button
                  onClick={() => handleNav('/about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/our-work')}
                  className="hover:text-white transition-colors"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/ecosystem')}
                  className="hover:text-white transition-colors"
                >
                  Ecosystem
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/insights')}
                  className="hover:text-white transition-colors"
                >
                  Insights &amp; Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact &amp; Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: CONNECT & LOCATION */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-[#d4af37] tracking-[0.2em] uppercase font-semibold">
              CONNECT
            </h4>
            <ul className="space-y-3 text-xs tracking-wider text-neutral-400">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4af37] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4af37] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4af37] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </a>
              </li>
            </ul>

            <div className="pt-4 border-t border-neutral-900/80">
              <p className="text-[11px] text-neutral-400 leading-relaxed font-light">
                Headquartered in <span className="text-neutral-200 font-medium">Abuja, Nigeria</span>. Working across borders.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-light">
          <p>© {new Date().getFullYear()} The CENTRESTAGE Company. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-neutral-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
