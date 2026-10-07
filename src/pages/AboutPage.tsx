import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { BrandFrameworkVisual } from '../components/BrandFrameworkVisual';
import { SpotlightStatement } from '../components/SpotlightStatement';
import { ImpactPhotoGallery } from '../components/ImpactPhotoGallery';
import type { NavigationPath } from '../types';
import { ArrowRight, Eye, Compass, Award } from 'lucide-react';
import logoImg from '../assets/the_centrestage_company_logo.jpg';

interface AboutPageProps {
  onNavigate: (path: NavigationPath) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title="About The CENTRESTAGE Company | Reputation, Story & Influence"
        description="Discover The CENTRESTAGE Company, an African strategy, reputation and storytelling company helping important work become seen, understood and influential."
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24 space-y-24">
        
        {/* Header Section */}
        <section className="space-y-8 text-center max-w-4xl mx-auto">
          <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
            ABOUT THE CENTRESTAGE
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white font-light leading-tight">
            Where great ideas take <br />
            <span className="text-gold-gradient italic">The CentreStage.</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
            The CENTRESTAGE Company began in 2015 with a simple conviction:
          </p>
        </section>

        {/* Story & Dot Matrix Spotlight Statements */}
        <section className="space-y-16">
          
          {/* Spotlight Statement 1 */}
          <SpotlightStatement
            text="GREAT WORK SHOULD NOT GO UNSEEN."
            subtitle="The Foundational Instinct"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:text-base text-neutral-300 font-light leading-relaxed">
            <div className="space-y-6">
              <p>
                What began in reputation management and visibility has evolved into something broader.
              </p>
              <p>
                Over the years, we have worked with leaders, entrepreneurs, organisations and institutions to clarify their positioning, strengthen reputation, tell better stories, create meaningful experiences and become more visible for the right reasons.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                Through all that evolution, one instinct has remained constant:
              </p>

              {/* Spotlight Statement 2 */}
              <SpotlightStatement
                text="WE SEE WHAT OTHERS MISS."
                subtitle="Strategic Vision"
              />
            </div>
          </div>

          {/* Evolution text */}
          <div className="max-w-3xl mx-auto text-center space-y-6 text-neutral-300 font-light text-base md:text-lg">
            <p>
              We look beneath what is obvious to find the value, story, perspective or possibility that can change how a person, idea or organisation is understood.
            </p>
            <p className="font-serif italic text-xl text-[#d4af37]">
              Then we bring together strategy, story and visibility to move it forward.
            </p>
            <p className="text-neutral-400">
              Today, The CENTRESTAGE is more than a company. It is an expanding ecosystem of ideas, platforms and programmes built around people and work with the potential to matter.
            </p>
            <p className="font-mono text-xs text-[#d4af37] tracking-widest uppercase">
              And we are still evolving.
            </p>
          </div>

        </section>

        {/* OUR BRAND FRAMEWORK */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
              INSTITUTIONAL CORE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              OUR BRAND FRAMEWORK
            </h2>
          </div>

          <BrandFrameworkVisual />
        </section>

        {/* OUR APPROACH */}
        <section className="space-y-12 bg-[#0b0b0e] border border-neutral-800 rounded-sm p-8 md:p-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
              OUR METHODOLOGY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium">
              See. Shape. Position.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            
            {/* SEE */}
            <div className="interactive-card p-8 bg-[#0f0f15] border border-[#d4af37]/20 rounded-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl text-[#d4af37] font-bold">SEE</span>
                <Eye className="w-5 h-5 text-[#d4af37]" />
              </div>
              <p className="font-serif italic text-white text-base">
                We look deeper.
              </p>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                What makes this different? What is being overlooked? What should this organisation or leader be known for? Where is the opportunity others haven't recognised?
              </p>
            </div>

            {/* SHAPE */}
            <div className="interactive-card p-8 bg-[#0f0f15] border border-[#d4af37]/20 rounded-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl text-[#d4af37] font-bold">SHAPE</span>
                <Compass className="w-5 h-5 text-[#d4af37]" />
              </div>
              <p className="font-serif italic text-white text-base">
                We synthesize meaning.
              </p>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                We turn what we discover into a clear position, compelling story and coherent expression.
              </p>
            </div>

            {/* POSITION */}
            <div className="interactive-card p-8 bg-[#0f0f15] border border-[#d4af37]/20 rounded-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl text-[#d4af37] font-bold">POSITION</span>
                <Award className="w-5 h-5 text-[#d4af37]" />
              </div>
              <p className="font-serif italic text-white text-base">
                We build authority.
              </p>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                We place that value where it can be seen, understood and recognised by the people who matter.
              </p>
            </div>

          </div>
        </section>

        {/* VISUAL ARCHIVE & CONVENINGS GALLERY */}
        <ImpactPhotoGallery />

        {/* OUR BEGINNING & LEADERSHIP FEATURE */}
        <section className="space-y-12 pt-8">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
              FOUNDING VISION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium">
              Founded with a point of view.
            </h2>
          </div>

          <div className="bg-[#0b0b0e] border border-[#d4af37]/20 rounded-sm p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Leadership Executive Framing for Dr. Naomi */}
            <div className="lg:col-span-5 relative group overflow-hidden rounded-sm border border-[#d4af37]/40 shadow-2xl bg-[#0e0e14]">
              <div className="relative aspect-[3/4] max-h-[500px] w-full overflow-hidden">
                <img
                  src="/images/dr_naomi.jpg"
                  alt="Dr. Naomi - Founder & Chief Strategist"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-widest bg-black/70 backdrop-blur-md border border-[#d4af37]/40 px-3 py-1 rounded-sm shadow-md">
                    Founder Profile
                  </span>
                  <img
                    src={logoImg}
                    alt="The CENTRESTAGE Company"
                    className="h-6 w-auto object-contain bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-sm border border-neutral-800"
                  />
                </div>

                {/* Bottom Bio Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-1.5 border-t border-white/10 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                  <span className="text-[11px] text-[#d4af37] font-mono uppercase tracking-[0.2em] font-semibold block">
                    Founder &amp; Chief Strategist
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                    Dr. Naomi
                  </h3>
                  <p className="text-xs text-neutral-300 font-serif italic pt-1 border-t border-neutral-800/80">
                    "Great work should not go unseen."
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Copy */}
            <div className="lg:col-span-7 space-y-6 text-neutral-300 text-sm md:text-base font-light leading-relaxed">
              <p>
                The CENTRESTAGE Company was founded by <strong className="text-white font-medium">Dr. Naomi</strong>, a strategist, storyteller and communication professional whose work spans reputation, leadership, storytelling and human potential.
              </p>
              <p>
                Since 2015, that founding vision has grown into a wider ecosystem of platforms, programmes and ideas, united by one belief:
              </p>

              <blockquote className="p-6 bg-[#111118] border-l-2 border-[#d4af37] rounded-r-sm font-serif italic text-lg text-white">
                "Great work should not go unseen."
              </blockquote>

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={() => onNavigate('/contact')}
                  className="px-6 py-3 bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#e2bd44] transition-all rounded-sm flex items-center gap-2 whitespace-normal break-words"
                >
                  <span>Connect With Leadership</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </section>

      </div>
    </>
  );
};
