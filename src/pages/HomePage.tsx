import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { CountUpStat } from '../components/CountUpStat';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { SpotlightBeliefSection } from '../components/SpotlightBeliefSection';
import { TypewriterText } from '../components/TypewriterText';
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

      <div className="space-y-24 pb-20">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[75vh] flex items-center justify-center pt-24 sm:pt-32 pb-12 overflow-hidden border-b border-[#d4af37]/15">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 backdrop-blur-md shadow-lg shadow-[#d4af37]/5">
              <span className="text-xs font-serif tracking-[0.25em] text-[#d4af37] uppercase font-semibold">
                Strategy. Story. Visibility.
              </span>
            </div>

            {/* Main H1 Title - Fully visible with zero clipping */}
            <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] tracking-tight">
              Make great work <br className="hidden sm:inline" />
              <span className="italic text-gold-gradient font-normal">
                <TypewriterText text="impossible to overlook." speed={40} cursorColor="#d4af37" />
              </span>
            </h1>

            {/* Lead Copy */}
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
              We work with leaders, organisations and ideas to uncover what sets them apart, shape how they are perceived and build the visibility that grows influence.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('/our-work')}
                className="w-full sm:w-auto px-8 py-4 bg-[#d4af37] text-black font-semibold text-xs tracking-widest uppercase hover:bg-[#e2bd44] transition-all rounded-sm shadow-xl shadow-[#d4af37]/10 flex items-center justify-center gap-3 group whitespace-normal break-words"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('/contact')}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-700 hover:border-[#d4af37] text-white font-medium text-xs tracking-widest uppercase transition-all rounded-sm flex items-center justify-center gap-2 whitespace-normal break-words"
              >
                <span>Start a Conversation</span>
              </button>
            </div>

          </div>
        </section>

        {/* SECTION: OUR BELIEF SPOTLIGHT WITH DOT MATRIX & RADIAL GLOW */}
        <SpotlightBeliefSection />

        {/* SECTION: LIVE CONVENINGS & MOMENTS VISUAL SHOWCASE */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800 pb-4">
            <div>
              <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
                PROOF OF PRESENCE
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-white font-medium">
                Where ideas meet the world.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/about')}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#d4af37] hover:underline"
            >
              <span>Explore Visual Archive</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                src: "/images/dr_naomi_speaking_stage.jpg",
                title: "Executive Stage & Keynotes",
                label: "Keynote & Speaking",
                desc: "High-stakes keynote addresses and strategic reputation framing."
              },
              {
                src: "/images/founder_keynote_naomi.jpg",
                title: "Continental Keynotes",
                label: "Narrative Authority",
                desc: "Elevating leadership narratives on high-stakes stages."
              },
              {
                src: "/images/mixer_gala_networking.jpg",
                title: "The CentreStage Mixer Gala",
                label: "Curated Rooms",
                desc: "Connecting decision makers and executives across diverse industries."
              },
              {
                src: "/images/high_table_convening.jpg",
                title: "High-Table Convenings",
                label: "Executive Dinners",
                desc: "Intimate convening of founders, leaders, and institutional partners."
              },
              {
                src: "/images/executive_awards_celebration.jpg",
                title: "Excellence & Awards",
                label: "Recognition Ceremonies",
                desc: "Shaping institutional milestone moments that reinforce long-term authority."
              },
              {
                src: "/images/women_with_stories_abuja.jpg",
                title: "The Women With Stories",
                label: "Impact Movement",
                desc: "Convening female leaders across 4 continents for authentic documentation."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate('/about')}
                className="group relative aspect-[4/3] rounded-sm overflow-hidden bg-[#0d0d12] border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-500 cursor-pointer shadow-lg"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#d4af37] bg-black/80 px-2 py-0.5 rounded-sm border border-[#d4af37]/30">
                    {item.label}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 space-y-0.5">
                  <h3 className="font-serif text-lg text-white font-medium leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-neutral-300 font-light line-clamp-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: FEATURED HIGH-CONVERTING WORKSHOP SPOTLIGHT */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-br from-[#121008] via-[#101017] to-[#0a0a0e] border-2 border-[#d4af37]/60 rounded-sm p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden group">
            
            {/* Ambient Background Gold Beam */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/15 text-[11px] font-mono tracking-widest text-[#d4af37] uppercase font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
                  UPCOMING MASTERCLASS SERIES • ABUJA
                </div>

                <div className="space-y-2">
                  <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium leading-tight">
                    The Business Advantage <br />
                    <span className="italic text-gold-gradient">Workshop (BAW)</span>
                  </h2>
                  <p className="font-serif text-lg sm:text-xl text-[#d4af37] italic">
                    "The advantage your organisation needs may already be inside it."
                  </p>
                </div>

                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  Six practical classes designed to help business owners, leaders and teams turn internal value into turnover, win high-value proposals, protect pricing, and build repeat trust in an AI-disrupted world.
                </p>

                {/* Key Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {[
                    "Protect pricing without discounting",
                    "Stop losing customer inquiries",
                    "Eliminate expensive internal rework",
                    "Uncover overlooked team capabilities"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing summary pill */}
                <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
                  <span className="text-white font-semibold">Flexible Passes:</span>
                  <span className="text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-1 rounded-sm border border-[#d4af37]/30">1 Class: ₦70k</span>
                  <span className="text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-1 rounded-sm border border-[#d4af37]/30">3 Classes: ₦180k</span>
                  <span className="text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-1 rounded-sm border border-[#d4af37]/30">All 6: ₦300k</span>
                </div>

                {/* Action CTAs */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={() => onNavigate('/workshop')}
                    className="px-8 py-4 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#e2bd44] transition-all rounded-sm shadow-xl shadow-[#d4af37]/20 flex items-center justify-center gap-2"
                  >
                    <span>Explore Classes &amp; Book Seats</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/2347049748121?text=Hello%20Cora,%20I%20would%20like%20to%20inquire%20about%20booking%20seats%20for%20The%20Business%20Advantage%20Workshop."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 bg-transparent border border-neutral-700 hover:border-[#d4af37] text-white font-medium text-xs uppercase tracking-widest transition-all rounded-sm text-center"
                  >
                    Chat With Cora (0704 974 8121)
                  </a>
                </div>

              </div>

              {/* Right Column: Visual Photo Card with Class Dates */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#d4af37]/50 shadow-2xl group">
                  <img
                    src="/images/executive_workshop.jpg"
                    alt="The Business Advantage Workshop"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-widest bg-black/80 px-2 py-0.5 rounded-sm border border-[#d4af37]/30 block w-max">
                      Thursdays in Abuja • 11 AM - 4 PM
                    </span>
                    <h3 className="font-serif text-white text-xl">The Irreplaceable Advantage™</h3>
                    <p className="text-xs text-neutral-300 font-light">Facilitated by Dr. Naomi Osemedua</p>
                  </div>
                </div>

                {/* 6 Dates Badge Ribbon */}
                <div className="p-4 bg-[#0a0a0f] border border-neutral-800 rounded-sm grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 bg-[#12121a] rounded-sm border border-neutral-800/80">
                    <span className="text-[9px] font-mono text-neutral-400 block">CLASS 1 &amp; 2</span>
                    <span className="text-xs font-serif text-[#d4af37] font-semibold">Oct 15 &amp; 22</span>
                  </div>
                  <div className="p-2 bg-[#12121a] rounded-sm border border-neutral-800/80">
                    <span className="text-[9px] font-mono text-neutral-400 block">CLASS 3 &amp; 4</span>
                    <span className="text-xs font-serif text-[#d4af37] font-semibold">Oct 29 &amp; Nov 5</span>
                  </div>
                  <div className="p-2 bg-[#12121a] rounded-sm border border-neutral-800/80">
                    <span className="text-[9px] font-mono text-neutral-400 block">CLASS 5 &amp; 6</span>
                    <span className="text-xs font-serif text-[#d4af37] font-semibold">Nov 12 &amp; 19</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* SECTION: HOW WE THINK */}
        <section className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="bg-[#0b0b0f] border border-[#d4af37]/20 rounded-sm p-8 md:p-14 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
                  HOW WE THINK
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium leading-tight">
                  We see what <br />
                  <span className="italic text-gold-gradient">others miss.</span>
                </h2>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  The most powerful positioning often begins with something that is already there. We find it, shape it, and bring it forward.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('/about')}
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#d4af37] uppercase hover:underline"
                  >
                    <span>Discover How We Work</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Overlooked Advantages List */}
              <div className="lg:col-span-7 space-y-3">
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
                    className="p-3.5 bg-[#101017] border border-neutral-800 rounded-sm flex items-center gap-4 hover:border-[#d4af37]/40 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                    <span className="text-xs sm:text-sm text-neutral-200 font-light">
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

        {/* SECTION: WHAT WE DO (HORIZONTAL SLIDER WITH INTERACTIVE SHAKE CARDS) */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <HorizontalSlider
            title="We turn distinction into influence."
            subtitle="WHAT WE DO"
          >
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                onClick={() => onNavigate('/our-work')}
                className="interactive-card w-[300px] sm:w-[360px] flex-shrink-0 p-6 sm:p-8 bg-[#0b0b0e] border border-neutral-800 rounded-sm group flex flex-col justify-between cursor-pointer snap-start"
              >
                <div className="space-y-4">
                  {cap.image && (
                    <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-neutral-800 group-hover:border-[#d4af37]/40 transition-colors">
                      <img
                        src={cap.image}
                        alt={cap.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>
                  )}

                  <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase block">
                    CAPABILITY
                  </span>
                  <h3 className="font-serif text-2xl text-white group-hover:text-[#d4af37] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs font-serif italic text-neutral-400">
                    "{cap.tagline}"
                  </p>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed line-clamp-3">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-500 group-hover:text-[#d4af37]">
                  <span>Explore practice</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </HorizontalSlider>

          <div className="text-right pt-2">
            <button
              onClick={() => onNavigate('/our-work')}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#d4af37] hover:underline"
            >
              <span>Explore All Capabilities</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* SECTION: FOUNDER SPOTLIGHT CARD */}
        <section className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="bg-[#0b0b0f] border border-[#d4af37]/30 rounded-sm p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4">
                <div className="relative aspect-[3/4] max-h-[380px] w-full rounded-sm overflow-hidden border border-[#d4af37]/50 shadow-xl group">
                  <img
                    src="/images/dr_naomi.jpg"
                    alt="Dr. Naomi - Founder & Chief Strategist"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] bg-black/80 px-2 py-0.5 rounded-sm border border-[#d4af37]/30 block w-max mb-1">
                      Founder Profile
                    </span>
                    <p className="font-serif text-white text-lg font-medium">Dr. Naomi</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-5">
                <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
                  LEADERSHIP &amp; VISION
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium leading-tight">
                  "Great work should not go unseen."
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  Founded by <strong className="text-white font-medium">Dr. Naomi</strong>, a strategist, storyteller and communication professional whose work spans reputation, leadership, storytelling and human potential. Since 2015, that founding conviction has grown into a continent-spanning ecosystem.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <button
                    onClick={() => onNavigate('/about')}
                    className="px-6 py-3 bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#e2bd44] transition-all rounded-sm flex items-center gap-2"
                  >
                    <span>Read The Founder's Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="px-6 py-3 border border-neutral-700 hover:border-[#d4af37] text-white font-medium text-xs uppercase tracking-widest transition-all rounded-sm"
                  >
                    Connect With Leadership
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: ECOSYSTEM PREVIEW (HORIZONTAL SLIDER WITH INTERACTIVE SHAKE CARDS) */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <HorizontalSlider
            title="ONE HOUSE. MANY EXPRESSIONS."
            subtitle="ECOSYSTEM PREVIEW"
          >
            {ECOSYSTEM_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="interactive-card w-[320px] sm:w-[380px] flex-shrink-0 p-6 sm:p-8 bg-[#0d0d12] border border-[#d4af37]/20 rounded-sm flex flex-col justify-between group snap-start"
              >
                <div className="space-y-4">
                  {pillar.image && (
                    <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-neutral-800 group-hover:border-[#d4af37]/40 transition-colors">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>
                  )}

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
                  <p className="text-xs text-neutral-400 font-light leading-relaxed line-clamp-3">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-900">
                  <button
                    onClick={() => onNavigate('/ecosystem')}
                    className="w-full py-3 text-center text-xs font-semibold tracking-wider uppercase text-black bg-[#d4af37] hover:bg-[#e2bd44] transition-colors rounded-sm whitespace-normal break-words"
                  >
                    {pillar.ctaText}
                  </button>
                </div>
              </div>
            ))}
          </HorizontalSlider>
        </section>

        {/* SECTION: PROOF / OUR IMPACT */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
              OUR IMPACT &amp; PROOF
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

        {/* SECTION: INSIGHTS PREVIEW (HORIZONTAL SLIDER WITH INTERACTIVE SHAKE CARDS) */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <HorizontalSlider
            title="Ideas worth putting CentreStage."
            subtitle="INSIGHTS PREVIEW"
          >
            {publishedArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onOpenArticle(article)}
                className="interactive-card w-[300px] sm:w-[360px] flex-shrink-0 p-6 sm:p-8 bg-[#0b0b0e] border border-neutral-800 rounded-sm group flex flex-col justify-between cursor-pointer snap-start"
              >
                <div className="space-y-4">
                  {article.image && (
                    <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-neutral-800 group-hover:border-[#d4af37]/40 transition-colors">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#d4af37] uppercase tracking-widest">{article.category}</span>
                    <span className="text-neutral-500">{article.readTime}</span>
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
          </HorizontalSlider>
        </section>

      </div>
    </>
  );
};
