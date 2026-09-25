import React, { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  repeatDelay?: number;
  className?: string;
  cursorColor?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 35,
  repeatDelay = 5000,
  className = '',
  cursorColor = '#d4af37'
}) => {
  const [displayedText, setDisplayedText] = useState(text);
  const [currentIndex, setCurrentIndex] = useState(text.length);
  const [isTypingActive, setIsTypingActive] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasInitialTypedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTypingActive(true);
          if (!hasInitialTypedRef.current) {
            hasInitialTypedRef.current = true;
            // Delay initial clear slightly to prevent flickering
            setTimeout(() => {
              setDisplayedText('');
              setCurrentIndex(0);
            }, 100);
          }
        } else {
          setIsTypingActive(false);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [text]);

  useEffect(() => {
    if (!isTypingActive) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (repeatDelay > 0) {
      const replayTimeout = setTimeout(() => {
        setDisplayedText('');
        setCurrentIndex(0);
      }, repeatDelay);

      return () => clearTimeout(replayTimeout);
    }
  }, [currentIndex, isTypingActive, text, speed, repeatDelay]);

  return (
    <span
      ref={containerRef}
      className={`inline-inline-block max-w-full break-words ${className}`}
      style={{ minHeight: '1.2em' }}
    >
      {displayedText}
      <span
        className="inline-block w-[3px] h-[0.85em] ml-1 align-baseline animate-pulse rounded-full"
        style={{ backgroundColor: cursorColor }}
      />
    </span>
  );
};

