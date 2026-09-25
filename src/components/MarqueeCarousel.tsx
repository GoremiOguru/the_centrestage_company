import React from 'react';

interface MarqueeCarouselProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: string;
  badgeStyle?: 'gold' | 'dark';
}

export const MarqueeCarousel: React.FC<MarqueeCarouselProps> = ({
  items,
  badgeStyle = 'gold'
}) => {
  // Duplicate array to ensure seamless infinite looping
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden py-3 relative group">
      {/* Left/Right Fading Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-[#0a0a0d] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-[#0a0a0d] to-transparent z-10 pointer-events-none" />

      <div className="flex gap-4 animate-marquee whitespace-nowrap">
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className={`inline-flex items-center gap-2 px-5 py-2 text-xs font-sans tracking-widest uppercase rounded-sm border transition-all ${
              badgeStyle === 'gold'
                ? 'bg-[#12121a] text-[#d4af37] border-[#d4af37]/30 hover:border-[#d4af37]'
                : 'bg-[#0f0f15] text-neutral-200 border-neutral-800 hover:border-neutral-600'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
