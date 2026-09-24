import React from 'react';
import { SEOHead } from '../components/SEOHead';
import type { NavigationPath } from '../types';

interface EcosystemPageProps {
  onNavigate: (path: NavigationPath) => void;
}

export const EcosystemPage: React.FC<EcosystemPageProps> = ({ onNavigate }) => {
  const handleCtaClick = (_enquiryType: string) => {
    onNavigate('/contact');
  };

  return (
    <>
      <SEOHead
        title="The CENTRESTAGE Ecosystem | Company, Foundation & Programmes"
        description="Explore The CENTRESTAGE ecosystem spanning reputation, leadership, social impact, youth development, human distinction and convening."
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24 space-y-24">
        
        {/* Header Section */}
        <section className="space-y-8 text-center max-w-4xl mx-auto">
          <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
            04 — ECOSYSTEM
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white font-light leading-tight">
            One house. <br />
            <span className="text-gold-gradient italic">Many expressions.</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
            The CENTRESTAGE has evolved into an ecosystem built around one enduring idea:
          </p>
        </section>

        {/* Visual Moment Sentence */}
        <section className="p-8 md:p-14 bg-[#0d0d12] border-y border-[#d4af37]/30 text-center">
          <h2 className="font-serif text-2xl sm:text-4xl text-white font-medium tracking-wide leading-relaxed">
            "People, ideas and stories can create possibility when given the right platform."
          </h2>
        </section>

        {/* 5 Distinct Ecosystem Visual Blocks */}
        <section className="space-y-16">
          
          {/* 1. The CENTRESTAGE Company */}
          <div className="p-8 md:p-12 bg-[#0b0b0e] border border-[#d4af37]/30 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8">
              <div className="space-y-4 max-w-3xl">
                <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase block">
                  COMMERCIAL HEART
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-white">
                  The CENTRESTAGE Company
                </h2>
                <p className="font-serif italic text-lg text-[#d4af37]">
                  "Where great work becomes difficult to overlook."
                </p>
                <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                  The commercial heart of our ecosystem. We work with leaders and organisations across reputation, positioning, storytelling, executive presence, thought leadership and experiences.
                </p>
              </div>

              <div>
                <button
                  onClick={() => handleCtaClick('Work With Us')}
                  className="px-8 py-4 bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#e2bd44] transition-all rounded-sm whitespace-nowrap"
                >
                  Work With Us
                </button>
              </div>
            </div>
          </div>

          {/* 2. The CENTRESTAGE Foundation */}
          <div className="p-8 md:p-12 bg-[#0d0d14] border border-[#d4af37]/30 rounded-sm shadow-2xl space-y-8">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 pb-6 border-b border-neutral-800">
              <div className="space-y-3 max-w-2xl">
                <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase block">
                  SOCIAL IMPACT PLATFORM
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-white">
                  The CENTRESTAGE Foundation
                </h2>
                <p className="font-serif italic text-lg text-[#d4af37]">
                  "Stories can change what statistics cannot."
                </p>
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  The social impact expression of The CENTRESTAGE. The Foundation creates platforms that elevate stories, develop people and expand possibility.
                </p>
              </div>

              <div>
                <button
                  onClick={() => handleCtaClick('Foundation')}
                  className="px-8 py-4 bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#e2bd44] transition-all rounded-sm whitespace-nowrap"
                >
                  Explore The Foundation
                </button>
              </div>
            </div>

            {/* Nested Initiatives under Foundation */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                Initiatives nested beneath the Foundation:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* The Women With Stories */}
                <div className="p-6 bg-[#12121c] border border-neutral-800 rounded-sm space-y-3">
                  <h4 className="font-serif text-xl text-white font-medium">The Women With Stories</h4>
                  <p className="text-xs font-serif italic text-[#d4af37]">
                    "Statistics don't tell the story. Stories rewrite the stats."
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    A global storytelling movement changing the way women's experiences are seen, heard and remembered.
                  </p>
                </div>

                {/* Africa Thru My Eyes */}
                <div className="p-6 bg-[#12121c] border border-neutral-800 rounded-sm space-y-3">
                  <h4 className="font-serif text-xl text-white font-medium">Africa Thru My Eyes</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    A platform inviting Africans to tell richer, more human stories about the continent through their own eyes.
                  </p>
                </div>

                {/* Young Adult Mentorship Programme */}
                <div className="p-6 bg-[#12121c] border border-neutral-800 rounded-sm space-y-3">
                  <h4 className="font-serif text-xl text-white font-medium">Young Adult Mentorship</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    Equipping emerging adults with the perspective, relationships and capabilities to navigate life, leadership and work.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* 3. CentreStage Club */}
          <div className="p-8 md:p-12 bg-[#0b0b0e] border border-[#d4af37]/30 rounded-sm shadow-2xl">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8">
              <div className="space-y-4 max-w-3xl">
                <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase block">
                  YOUTH DEVELOPMENT
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-white">
                  CentreStage Club
                </h2>
                <p className="font-serif italic text-lg text-[#d4af37]">
                  "Future ready starts now."
                </p>
                <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                  The world young people are entering is changing faster than the systems preparing them for it. CentreStage Club is a school based development experience helping young people discover who they are while building the capabilities the future will demand.
                </p>
                <p className="text-xs text-neutral-400 font-light">
                  Students develop critical thinking, communication, public speaking, leadership, teamwork, adaptability and confidence while learning to recognise the value they bring in an AI disrupted world.
                </p>
              </div>

              <div>
                <button
                  onClick={() => handleCtaClick('CentreStage Club')}
                  className="px-8 py-4 bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#e2bd44] transition-all rounded-sm whitespace-nowrap"
                >
                  Bring CentreStage Club to Your School
                </button>
              </div>
            </div>
          </div>

          {/* 4. The Irreplaceable Advantage™ */}
          <div className="p-8 md:p-12 bg-[#101017] border border-[#d4af37]/40 rounded-sm shadow-2xl">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8">
              <div className="space-y-4 max-w-3xl">
                <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase block">
                  PROPRIETARY FRAMEWORK
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-white">
                  The Irreplaceable Advantage™
                </h2>
                <p className="font-serif italic text-lg text-[#d4af37]">
                  "What can only you bring?"
                </p>
                <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                  In a world where technology can replicate more of what we do, the question of what makes us distinctive becomes increasingly important.
                </p>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  The Irreplaceable Advantage™ is our proprietary framework for identifying the distinctive combination of experience, perspective, knowledge, values, thinking and capability that makes an individual or organisation difficult to replicate.
                </p>
              </div>

              <div>
                <button
                  onClick={() => handleCtaClick('Work With Us')}
                  className="px-8 py-4 bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#e2bd44] transition-all rounded-sm whitespace-nowrap"
                >
                  Discover The Irreplaceable Advantage™
                </button>
              </div>
            </div>
          </div>

          {/* 5. The CentreStage Mixer */}
          <div className="p-8 md:p-12 bg-[#0b0b0e] border border-[#d4af37]/30 rounded-sm shadow-2xl">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8">
              <div className="space-y-4 max-w-3xl">
                <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase block">
                  INVITE-ONLY CONVENING
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-white">
                  The CentreStage Mixer
                </h2>
                <p className="font-serif italic text-lg text-[#d4af37]">
                  "The right room changes everything."
                </p>
                <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                  The CentreStage Mixer is an invite only gathering bringing leaders, thinkers, experts, creators and decision makers from different sectors into one carefully curated room.
                </p>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  It is not another networking event. It is a place for ideas to cross sectors, relationships to begin and unexpected possibilities to emerge.
                </p>
              </div>

              <div>
                <button
                  onClick={() => handleCtaClick('Partnerships')}
                  className="px-8 py-4 bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#e2bd44] transition-all rounded-sm whitespace-nowrap"
                >
                  Partner With The Mixer
                </button>
              </div>
            </div>
          </div>

        </section>

      </div>
    </>
  );
};
