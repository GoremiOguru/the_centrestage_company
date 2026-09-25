import React, { useState, useRef } from 'react';
import { TypewriterText } from './TypewriterText';
import { Sparkles } from 'lucide-react';

export const SpotlightBeliefSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 text-center space-y-8 my-16">
      <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
        OUR BELIEF
      </span>

      {/* Dot Grid Particle Background with Radial Spotlight Glow Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative py-16 px-6 sm:px-12 md:py-24 rounded-sm border border-[#d4af37]/30 overflow-hidden shadow-2xl transition-all duration-500 group"
      >
        {/* 1. Dot Grid Matrix Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-25 pointer-events-none" />

        {/* 2. Interactive Radial Spotlight Glow */}
        <div
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(212,175,55,0.22), rgba(8,8,12,0.95) 75%)`
          }}
        />

        {/* 3. Ambient Floating Particle Orbs */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-[#d4af37]/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

        {/* Content */}
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 text-xs font-mono text-[#d4af37] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Founding Principle</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-medium tracking-wide uppercase leading-tight">
            <TypewriterText text="GREAT WORK SHOULD NOT GO UNSEEN." speed={40} delay={100} />
          </h2>

          <div className="pt-2">
            <span className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent inline-block" />
          </div>
        </div>
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
  );
};
