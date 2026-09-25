import React, { useState, useRef } from 'react';
import { TypewriterText } from './TypewriterText';
import { Sparkles } from 'lucide-react';

interface SpotlightStatementProps {
  text: string;
  subtitle?: string;
  tagline?: string;
  useTypewriter?: boolean;
}

export const SpotlightStatement: React.FC<SpotlightStatementProps> = ({
  text,
  subtitle,
  tagline,
  useTypewriter = true
}) => {
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
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-14 px-6 sm:px-12 md:py-20 rounded-sm border border-[#d4af37]/35 overflow-hidden shadow-2xl transition-all duration-500 group my-12 text-center"
    >
      {/* 1. Dot Grid Matrix Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1.2px,transparent_1.2px)] [background-size:22px_22px] opacity-30 pointer-events-none" />

      {/* 2. Dynamic Radial Spotlight Glow */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(550px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(212,175,55,0.24), rgba(8,8,12,0.96) 75%)`
        }}
      />

      {/* 3. Ambient Floating Particles */}
      <div className="absolute top-1/4 left-1/4 w-36 h-36 bg-[#d4af37]/15 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-44 h-44 bg-[#d4af37]/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '2.5s' }} />

      {/* Content */}
      <div className="relative z-10 space-y-5">
        {subtitle && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 text-xs font-mono text-[#d4af37] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span>{subtitle}</span>
          </div>
        )}

        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-wide uppercase leading-snug max-w-4xl mx-auto">
          {useTypewriter ? <TypewriterText text={text} speed={35} delay={5000} /> : text}
        </h2>

        {tagline && (
          <p className="font-serif italic text-sm sm:text-base text-[#d4af37] pt-2">
            {tagline}
          </p>
        )}
      </div>
    </div>
  );
};
