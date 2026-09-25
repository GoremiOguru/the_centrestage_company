import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HorizontalSliderProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export const HorizontalSlider: React.FC<HorizontalSliderProps> = ({ children, title, subtitle }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full space-y-6">
      {(title || subtitle) && (
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            {subtitle && (
              <span className="text-xs font-mono tracking-[0.25em] text-[#d4af37] uppercase block mb-1">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="font-serif text-2xl sm:text-4xl text-white font-medium">
                {title}
              </h2>
            )}
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 bg-[#0f0f15] border border-neutral-800 text-neutral-300 hover:text-[#d4af37] hover:border-[#d4af37] rounded-sm transition-colors"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 bg-[#0f0f15] border border-neutral-800 text-neutral-300 hover:text-[#d4af37] hover:border-[#d4af37] rounded-sm transition-colors"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Scrollable Container */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>
    </div>
  );
};
