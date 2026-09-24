import React from 'react';
import { BRAND_FRAMEWORK } from '../data/siteData';
import { Compass, Target, Eye, Sparkles, Shield, Heart } from 'lucide-react';

export const BrandFrameworkVisual: React.FC = () => {
  return (
    <div className="w-full bg-[#0a0a0d] border border-[#d4af37]/20 rounded-sm p-6 md:p-12 shadow-2xl relative overflow-hidden my-12">
      {/* Editorial Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-neutral-800 gap-4">
        <div>
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#d4af37] uppercase block mb-1">
            Institutional Architecture
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-white">
            The CENTRESTAGE Brand Framework
          </h3>
        </div>
        <div className="text-right">
          <span className="text-xs font-serif italic text-neutral-400">
            {BRAND_FRAMEWORK.brandShorthand}
          </span>
        </div>
      </div>

      {/* 4 Core Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        
        {/* BELIEF */}
        <div className="p-6 bg-[#0e0e14] border border-[#d4af37]/15 rounded-sm flex flex-col justify-between hover:border-[#d4af37]/40 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">01 / BELIEF</span>
              <Eye className="w-4 h-4 text-[#d4af37]" />
            </div>
            <p className="font-serif text-lg text-white font-medium leading-snug">
              "{BRAND_FRAMEWORK.belief}"
            </p>
          </div>
          <span className="text-[11px] text-neutral-500 mt-4 block">The underlying conviction</span>
        </div>

        {/* PURPOSE */}
        <div className="p-6 bg-[#0e0e14] border border-[#d4af37]/15 rounded-sm flex flex-col justify-between hover:border-[#d4af37]/40 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">02 / PURPOSE</span>
              <Target className="w-4 h-4 text-[#d4af37]" />
            </div>
            <p className="font-serif text-lg text-white font-medium leading-snug">
              {BRAND_FRAMEWORK.purpose}
            </p>
          </div>
          <span className="text-[11px] text-neutral-500 mt-4 block">Why we exist</span>
        </div>

        {/* MISSION */}
        <div className="p-6 bg-[#0e0e14] border border-[#d4af37]/15 rounded-sm flex flex-col justify-between hover:border-[#d4af37]/40 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">03 / MISSION</span>
              <Compass className="w-4 h-4 text-[#d4af37]" />
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {BRAND_FRAMEWORK.mission}
            </p>
          </div>
          <span className="text-[11px] text-neutral-500 mt-4 block">How we execute</span>
        </div>

        {/* VISION */}
        <div className="p-6 bg-[#0e0e14] border border-[#d4af37]/15 rounded-sm flex flex-col justify-between hover:border-[#d4af37]/40 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">04 / VISION</span>
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {BRAND_FRAMEWORK.vision}
            </p>
          </div>
          <span className="text-[11px] text-neutral-500 mt-4 block">The horizon we build toward</span>
        </div>

      </div>

      {/* Center Banner: CORE IDEA & PROMISE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8 bg-[#13131a] border border-[#d4af37]/30 rounded-sm mb-10">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase block mb-2">
            CORE IDEA
          </span>
          <h4 className="font-serif text-xl md:text-2xl text-white font-medium">
            {BRAND_FRAMEWORK.coreIdea}
          </h4>
        </div>
        <div className="md:border-l md:border-neutral-800 md:pl-6">
          <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase block mb-2">
            PROMISE
          </span>
          <p className="font-serif text-lg text-neutral-200">
            {BRAND_FRAMEWORK.promise}
          </p>
        </div>
      </div>

      {/* Values & Spirit Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-neutral-800">
        
        {/* VALUES */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-4 h-4 text-[#d4af37]" />
            <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase">VALUES</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {BRAND_FRAMEWORK.values.map((val) => (
              <span
                key={val}
                className="px-3 py-1.5 text-xs font-sans tracking-wider bg-[#101016] text-neutral-200 border border-neutral-800 rounded-sm"
              >
                {val}
              </span>
            ))}
          </div>
        </div>

        {/* SPIRIT */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-4 h-4 text-[#d4af37]" />
            <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase">SPIRIT</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {BRAND_FRAMEWORK.spirit.map((sp) => (
              <span
                key={sp}
                className="px-3 py-1.5 text-xs font-sans tracking-wider bg-[#101016] text-[#d4af37] border border-[#d4af37]/20 rounded-sm"
              >
                {sp}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
