import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { CAPABILITIES, CASE_STUDIES } from '../data/siteData';
import { CaseStudyModal } from '../components/CaseStudyModal';
import type { CaseStudy, NavigationPath } from '../types';
import { ChevronRight } from 'lucide-react';

interface WorkPageProps {
  onNavigate: (path: NavigationPath) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate }) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <>
      <SEOHead
        title="Reputation, Executive Positioning & Storytelling | The CENTRESTAGE"
        description="Explore The CENTRESTAGE Company's work across reputation, executive presence, storytelling, thought leadership and high impact experiences."
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24 space-y-28">
        
        {/* H1 Header & Lead Copy */}
        <section className="space-y-8 text-center max-w-4xl mx-auto">
          <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
            03 — OUR WORK
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white font-light leading-tight">
            Great work <br />
            <span className="text-gold-gradient italic">isn't enough.</span>
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
            <p>You can be excellent at what you do and still be overlooked.</p>
            <p>You can have expertise and remain unheard.</p>
            <p>You can build something remarkable and still struggle to explain why it matters.</p>
            <div className="pt-2">
              <span className="font-serif text-2xl text-white font-medium italic block">
                The CENTRESTAGE exists to close that gap.
              </span>
            </div>
            <p className="text-sm text-neutral-400">
              We work with leaders and organisations to uncover what makes them distinctive, strengthen how they are perceived and build the stories, platforms and experiences that grow influence.
            </p>
          </div>
        </section>

        {/* Visual Moment Sentence */}
        <section className="p-8 md:p-14 bg-[#0d0d12] border-y border-[#d4af37]/30 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white font-medium tracking-wide uppercase">
            VISIBILITY IS NOT THE GOAL. <span className="text-[#d4af37]">SIGNIFICANCE IS.</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
            The CENTRESTAGE doesn't pursue visibility for visibility's sake. We work backwards from what needs to change: perception, reputation, relevance, authority, connection or opportunity.
          </p>
        </section>

        {/* 5 CAPABILITY AREAS IN GREATER DETAIL */}
        <section className="space-y-16">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
              CORE CAPABILITIES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium">
              Five Strategic Practice Areas
            </h2>
          </div>

          <div className="space-y-12">
            {CAPABILITIES.map((cap, index) => (
              <div
                key={cap.id}
                className="p-8 md:p-12 bg-[#0b0b0e] border border-neutral-800 hover:border-[#d4af37]/30 transition-all rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-4 space-y-3">
                  <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest block">
                    PRACTICE 0{index + 1}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white">
                    {cap.title}
                  </h3>
                  <p className="font-serif italic text-sm text-[#d4af37]">
                    "{cap.tagline}"
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                    {cap.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-3">
                      Our work in this area may include:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cap.includes.map((inc, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-[#12121a] border border-neutral-800 text-xs text-neutral-300 rounded-sm font-sans"
                        >
                          {inc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SELECTED WORK (CASE STUDIES) */}
        <section className="space-y-12 pt-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
              SELECTED WORK
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium">
              The work behind the work.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              We measure impact by shifts in perception, authority, reach, and opportunity. Each featured engagement demonstrates our strategic intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.id}
                onClick={() => setSelectedCaseStudy(study)}
                className="p-8 bg-[#0d0d12] border border-[#d4af37]/20 hover:border-[#d4af37] transition-all rounded-sm space-y-6 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase block">
                    {study.clientCategory}
                  </span>
                  <h3 className="font-serif text-2xl text-white group-hover:text-[#d4af37] transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light">
                    {study.summary}
                  </p>

                  {/* What We Saw highlight */}
                  <div className="p-4 bg-[#12121c] border-l-2 border-[#d4af37] rounded-r-sm">
                    <span className="text-[10px] font-mono text-[#d4af37] uppercase block mb-1">
                      WHAT WE SAW
                    </span>
                    <p className="font-serif text-xs text-neutral-200 italic line-clamp-2">
                      "{study.whatWeSaw}"
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-xs text-[#d4af37] font-semibold tracking-wider uppercase">
                  <span>Explore Case Monograph</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>

          {/* Quiet Client Logos / Partner Indicators */}
          <div className="pt-16 border-t border-neutral-900 text-center space-y-6">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
              Trusted by leaders across finance, technology, sovereign energy, and social impact
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
              <div className="font-serif text-lg text-neutral-400 font-semibold tracking-wider">PAN-AFRICAN BANKING GROUP</div>
              <div className="font-serif text-lg text-neutral-400 font-semibold tracking-wider">SOVEREIGN TECH INFRASTRUCTURE</div>
              <div className="font-serif text-lg text-neutral-400 font-semibold tracking-wider">ENERGY CONGLOMERATE</div>
              <div className="font-serif text-lg text-neutral-400 font-semibold tracking-wider">GLOBAL WOMEN FOUNDATION</div>
            </div>
          </div>

        </section>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onContactClick={() => onNavigate('/contact')}
      />
    </>
  );
};
