import React, { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  repeatDelay?: number;
  className?: string;
  cursorColor?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 35,
  delay = 100,
  repeatDelay = 4000, // Auto plays every 4 seconds when in view
  className = '',
  cursorColor = '#d4af37'
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  // IntersectionObserver to trigger independently when each section is scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
          setDisplayedText('');
          setCurrentIndex(0);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [text]);

  // Typing & 4-second Auto-Replay Loop
  useEffect(() => {
    if (!isInView) return;

    if (currentIndex === 0 && displayedText === '') {
      const startTimer = setTimeout(() => {
        if (text.length > 0) {
          setDisplayedText(text[0]);
          setCurrentIndex(1);
        }
      }, delay);
      return () => clearTimeout(startTimer);
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      // Finished typing: wait 4 seconds then auto replay
      const replayTimeout = setTimeout(() => {
        setDisplayedText('');
        setCurrentIndex(0);
      }, repeatDelay);

      return () => clearTimeout(replayTimeout);
    }
  }, [currentIndex, displayedText, isInView, text, speed, delay, repeatDelay]);

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {displayedText}
      <span
        className="inline-block w-[3px] h-[0.85em] ml-1 align-baseline animate-pulse rounded-full"
        style={{ backgroundColor: cursorColor }}
      />
    </span>
  );
};
