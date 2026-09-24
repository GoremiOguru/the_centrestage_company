import React, { useState, useEffect, useRef } from 'react';

interface CountUpStatProps {
  targetNumber: number;
  suffix: string;
  label: string;
}

export const CountUpStat: React.FC<CountUpStatProps> = ({ targetNumber, suffix, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // 2 seconds animation
    const steps = 40;
    const increment = targetNumber / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, targetNumber]);

  return (
    <div
      ref={domRef}
      className="p-6 md:p-8 bg-[#0e0e13]/80 border border-[#d4af37]/15 rounded-sm hover:border-[#d4af37]/40 transition-all duration-300 group"
    >
      <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white group-hover:text-[#d4af37] transition-colors mb-3">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-xs md:text-sm text-neutral-400 font-sans tracking-wide leading-relaxed">
        {label}
      </p>
    </div>
  );
};
