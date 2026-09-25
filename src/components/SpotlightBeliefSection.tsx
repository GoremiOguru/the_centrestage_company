import React from 'react';
import { SpotlightStatement } from './SpotlightStatement';

export const SpotlightBeliefSection: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 text-center space-y-8 my-16">
      <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
        OUR BELIEF
      </span>

      {/* Spotlight Matrix Card */}
      <SpotlightStatement
        text="GREAT WORK SHOULD NOT GO UNSEEN."
        subtitle="Founding Principle"
      />

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
