import React, { useState, useRef } from 'react';
import { Sparkles } from 'lucide-react';

interface SpotlightStatementProps {
  text: string;
  subtitle?: string;
  tagline?: string;
}

interface TouchRipple {
  id: number;
  x: number;
  y: number;
}

export const SpotlightStatement: React.FC<SpotlightStatementProps> = ({
  text,
  subtitle,
  tagline
}) => {
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isTapped, setIsTapped] = useState(false);
  const [ripples, setRipples] = useState<TouchRipple[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100));
    setSpotlightPos({ x, y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handlePointerMove(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleInteraction = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    setIsTapped(true);
    const newRipple: TouchRipple = { id: Date.now(), x, y };
    setRipples((prev) => [...prev.slice(-4), newRipple]); // keep max 5 active ripples

    setTimeout(() => setIsTapped(false), 700);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleInteraction(e.clientX, e.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      handleInteraction(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      className={`relative py-14 px-6 sm:px-12 md:py-20 rounded-sm border border-[#d4af37]/40 overflow-hidden shadow-2xl transition-all duration-300 group my-10 text-center cursor-pointer select-none bg-[#08080c] ${
        isTapped ? 'scale-[1.015] border-[#d4af37]' : 'hover:border-[#d4af37]/70'
      }`}
    >
      {/* 1. Dot Grid Matrix Overlay with Brightness Pulse */}
      <div className={`absolute inset-0 bg-[radial-gradient(#d4af37_1.5px,transparent_1.5px)] [background-size:22px_22px] transition-opacity duration-300 pointer-events-none ${
        isTapped ? 'opacity-70' : 'opacity-35 group-hover:opacity-50'
      }`} />

      {/* 2. Touch/Mouse Interactive Radial Spotlight Glow */}
      <div
        className="absolute inset-0 transition-all duration-150 pointer-events-none"
        style={{
          background: `radial-gradient(${isTapped ? '650px' : '450px'} circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(212,175,55,${isTapped ? 0.45 : 0.25}), rgba(8,8,12,0.96) 72%)`
        }}
      />

      {/* 3. Tap Position Interactive Gold Ripple Waves */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full pointer-events-none animate-ping bg-[#d4af37]/40 border border-[#d4af37]"
          style={{
            left: r.x - 75,
            top: r.y - 75,
            width: 150,
            height: 150,
            animationDuration: '0.8s'
          }}
        />
      ))}

      {/* 4. Ambient Glowing Floating Particles */}
      <div className="absolute top-8 left-8 w-2 h-2 rounded-full bg-[#d4af37] animate-ping pointer-events-none opacity-60" style={{ animationDuration: '2.5s' }} />
      <div className="absolute bottom-10 right-10 w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-ping pointer-events-none opacity-50" style={{ animationDuration: '3.5s', animationDelay: '0.7s' }} />
      <div className="absolute top-1/2 right-12 w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping pointer-events-none opacity-70" style={{ animationDuration: '2s', animationDelay: '0.3s' }} />

      {/* Content */}
      <div className="relative z-10 space-y-4">
        {subtitle && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/15 text-xs font-mono text-[#d4af37] uppercase tracking-widest shadow-md">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
            <span>{subtitle}</span>
          </div>
        )}

        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-wide uppercase leading-snug max-w-4xl mx-auto drop-shadow-md">
          {text}
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

