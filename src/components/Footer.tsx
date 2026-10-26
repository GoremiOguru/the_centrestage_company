import React from 'react';
import type { NavigationPath } from '../types';
import { ArrowUpRight, Mail } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { TikTokIcon } from './TikTokIcon';
import logoImg from '../assets/the_centrestage_company_logo.jpg';
import { SOCIAL_LINKS } from '../data/siteData';

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
            <img
              src={logoImg}
              alt="The CentreStage Company Logo"
              className="h-12 w-auto object-contain max-w-[220px] border border-[#d4af37]/30 rounded-sm p-1 bg-black/40"
            />

            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              The digital home of an intelligent, contemporary African company operating at the intersection of strategy, story, reputation, visibility and influence.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs font-serif tracking-widest text-[#d4af37] border border-[#d4af37]/30 px-3 py-1 rounded-sm">
                Strategy. Story. Visibility.
              </span>
            </div>
          </div>

          {/* Column 1: The CentreStage Architecture */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-[#d4af37] tracking-[0.2em] uppercase font-semibold">
              The CentreStage
            </h4>
            <ul className="space-y-3 text-xs tracking-wider text-neutral-400">
              <li>
                <button
                  onClick={() => handleNav('/')}
                  className="hover:text-white transition-colors text-left"
                >
                  The CentreStage Company
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/ecosystem')}
                  className="hover:text-white transition-colors text-left"
                >
                  The CentreStage Foundation
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
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4af37] transition-colors inline-flex items-center justify-between w-full group py-0.5"
                >
                  <span className="inline-flex items-center gap-2">
                    <InstagramIcon className="w-3.5 h-3.5 text-[#d4af37] group-hover:scale-110 transition-transform" />
                    <span>Instagram</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="text-[10px] text-neutral-500 font-mono group-hover:text-neutral-400">@thecentrestagehq</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-600 group-hover:text-[#d4af37]" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4af37] transition-colors inline-flex items-center justify-between w-full group py-0.5"
                >
                  <span className="inline-flex items-center gap-2">
                    <TikTokIcon className="w-3.5 h-3.5 text-[#d4af37] group-hover:scale-110 transition-transform" />
                    <span>TikTok</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="text-[10px] text-neutral-500 font-mono group-hover:text-neutral-400">@thecentrestagehq</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-600 group-hover:text-[#d4af37]" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4af37] transition-colors inline-flex items-center justify-between w-full group py-0.5"
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="w-3.5 text-center font-bold text-[10px] text-[#d4af37]">in</span>
                    <span>LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600 group-hover:text-[#d4af37]" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="hover:text-[#d4af37] transition-colors inline-flex items-center justify-between w-full group py-0.5"
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Email Us</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600 group-hover:text-[#d4af37]" />
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
          <p>© {new Date().getFullYear()} The CentreStage Company. All rights reserved.</p>
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
