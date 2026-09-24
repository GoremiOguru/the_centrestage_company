import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { CountUpStat } from '../components/CountUpStat';
import { CAPABILITIES, ECOSYSTEM_PILLARS, INSIGHTS_ARTICLES, IMPACT_STATS } from '../data/siteData';
import type { NavigationPath, InsightArticle } from '../types';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: NavigationPath) => void;
  onOpenArticle: (article: InsightArticle) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenArticle }) => {
  const publishedArticles = INSIGHTS_ARTICLES.filter((a) => a.isPublished);

  return (
    <>
      <SEOHead
        title="The CENTRESTAGE Company | Strategy, Story & Visibility"
        description="The CENTRESTAGE Company helps leaders and organisations strengthen reputation, sharpen positioning, tell powerful stories and build influence."
      />

      <div className="space-y-32 pb-20">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden border-b border-[#d4af37]/15">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 backdrop-blur-sm animate-fadeIn">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
              <span className="text-xs font-serif tracking-[0.25em] text-[#d4af37] uppercase">
                Strategy. Story. Visibility.
              </span>
            </div>

            {/* Main H1 Title */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.08] tracking-tight">
              Make great work <br className="hidden sm:inline" />
              <span className="italic text-gold-gradient font-normal">impossible to overlook.</span>
            </h1>

            {/* Lead Copy */}
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
              We work with leaders, organisations and ideas to uncover what sets them apart, shape how they are perceived and build the visibility that grows influence.
            </p>

            {/* CTAs */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('/our-work')}
                className="w-full sm:w-auto px-8 py-4 bg-[#d4af37] text-black font-semibold text-xs tracking-widest uppercase hover:bg-[#e2bd44] transition-all rounded-sm shadow-xl shadow-[#d4af37]/10 flex items-center justify-center gap-3 group"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('/contact')}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-700 hover:border-[#d4af37] text-white font-medium text-xs tracking-widest uppercase transition-all rounded-sm flex items-center justify-center gap-2"
              >
                <span>Start a Conversation</span>
              </button>
            </div>

          </div>
        </section>

        {/* SECTION 02 — OUR BELIEF */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 text-center space-y-8">
          <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
            02 — OUR BELIEF
          </span>
          
          {/* Visual Moment Sentence */}
          <div className="py-10 border-y border-neutral-800 my-8">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-wide uppercase">
              GREAT WORK SHOULD NOT GO UNSEEN.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            <p>
              There is extraordinary work happening every day that remains under recognised, poorly positioned or simply unseen.
            </p>
            <p className="font-serif text-xl sm:text-2xl text-white italic">
              We exist to change that.
            </p>
            <p className="text-neutral-400">
              Not by creating more noise, but by finding what is distinctive, shaping the story around it and positioning it to be seen, understood and remembered.
            </p>
          </div>
        </section>

        {/* SECTION 03 — HOW WE THINK */}
        <section className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="bg-[#0b0b0f] border border-[#d4af37]/20 rounded-sm p-8 md:p-16 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
                  03 — HOW WE THINK
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium leading-tight">
                  We see what <br />
                  <span className="text-gold-gradient italic">others miss.</span>
                </h2>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  The most powerful positioning often begins with something that is already there. We find it, shape it, and bring it forward.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => onNavigate('/about')}
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#d4af37] uppercase hover:underline"
                  >
                    <span>Discover How We Work</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Overlooked Advantages Checklist */}
              <div className="lg:col-span-7 space-y-4">
                {[
                  "Sometimes the greatest advantage is already there.",
                  "An overlooked strength.",
                  "An untold story.",
                  "An underused asset.",
                  "An idea waiting for the right language.",
                  "An opportunity hiding in plain sight."
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-[#101017] border border-neutral-800 rounded-sm flex items-center gap-4 hover:border-[#d4af37]/40 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#d4af37]/10 text-[#d4af37] flex items-center justify-center text-xs font-mono">
                      0{index + 1}
                    </span>
                    <span className="text-sm md:text-base text-neutral-200 font-light">
                      {item}
                    </span>
                  </div>
                ))}
                <div className="p-4 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-sm text-center font-serif italic text-[#d4af37] text-base">
                  We find it. We shape it. We bring it forward.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 04 — WHAT WE DO */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-800">
            <div>
              <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block mb-2">
                04 — WHAT WE DO
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium">
                We turn distinction into influence.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/our-work')}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#d4af37] hover:text-white transition-colors"
            >
              <span>View All Capabilities</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                onClick={() => onNavigate('/our-work')}
                className="p-8 bg-[#0b0b0e] border border-neutral-800 hover:border-[#d4af37]/40 transition-all rounded-sm group flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase block">
                    CAPABILITY
                  </span>
                  <h3 className="font-serif text-2xl text-white group-hover:text-[#d4af37] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs font-serif italic text-neutral-400">
                    "{cap.tagline}"
                  </p>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-500 group-hover:text-[#d4af37]">
                  <span>Explore detail</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 05 — ECOSYSTEM PREVIEW */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
              05 — ECOSYSTEM PREVIEW
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium">
              ONE HOUSE. MANY EXPRESSIONS.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light">
              The CENTRESTAGE has evolved beyond a single company. Today, our ecosystem creates platforms for business, leadership, intellectual property, social impact, young people and convening.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ECOSYSTEM_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="p-8 bg-[#0d0d12] border border-[#d4af37]/15 rounded-sm flex flex-col justify-between hover:border-[#d4af37]/50 transition-all group"
              >
                <div className="space-y-4">
                  {pillar.badge && (
                    <span className="inline-block px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-sm">
                      {pillar.badge}
                    </span>
                  )}
                  <h3 className="font-serif text-2xl text-white group-hover:text-[#d4af37] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="font-serif italic text-sm text-neutral-300">
                    "{pillar.headline}"
                  </p>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed whitespace-pre-line">
                    {pillar.description.slice(0, 160)}...
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-900">
                  <button
                    onClick={() => onNavigate('/ecosystem')}
                    className="w-full py-2.5 text-center text-xs font-semibold tracking-wider uppercase text-black bg-[#d4af37] hover:bg-[#e2bd44] transition-colors rounded-sm"
                  >
                    {pillar.ctaText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('/ecosystem')}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#d4af37] hover:underline"
            >
              <span>Explore The Full Ecosystem</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* SECTION 06 — PROOF / OUR IMPACT */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
              06 — PROOF
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium">
              More than a decade of bringing great work to The CentreStage.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {IMPACT_STATS.map((stat, idx) => (
              <CountUpStat
                key={idx}
                targetNumber={stat.number}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </section>

        {/* SECTION 07 — INSIGHTS PREVIEW */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-800">
            <div>
              <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block mb-2">
                07 — INSIGHTS PREVIEW
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium">
                Ideas worth putting CentreStage.
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 font-light mt-2">
                We think deeply about reputation, influence, storytelling, leadership, human distinction and the changing world of work.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/insights')}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#d4af37] hover:underline"
            >
              <span>Explore Journal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publishedArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onOpenArticle(article)}
                className="p-8 bg-[#0b0b0e] border border-neutral-800 hover:border-[#d4af37]/40 transition-all rounded-sm group flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
                    <span className="text-[#d4af37] uppercase tracking-widest">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl text-white group-hover:text-[#d4af37] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-400 group-hover:text-[#d4af37]">
                  <span>Read Monograph</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 08 — FINAL HOMEPAGE CTA */}
        <section className="max-w-5xl mx-auto px-6 text-center space-y-8 pt-12">
          <div className="p-12 md:p-20 bg-[#0c0c12] border border-[#d4af37]/30 rounded-sm relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[#d4af37]/5 pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
                FINAL HOMEPAGE CTA
              </span>
              
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-medium leading-tight">
                What deserves to be seen more clearly?
              </h2>

              <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-300 font-light">
                Whether you are repositioning a company, building executive influence, introducing an important idea or creating something the world needs to understand, we should talk.
              </p>

              <div className="pt-4">
                <span className="font-serif text-xl sm:text-2xl text-[#d4af37] italic block mb-6">
                  Bring it to The CentreStage.
                </span>
                
                <button
                  onClick={() => onNavigate('/contact')}
                  className="px-10 py-4 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#e2bd44] transition-all rounded-sm shadow-xl"
                >
                  Start a Conversation
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
