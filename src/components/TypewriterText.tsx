import React, { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  repeatDelay?: number;
  className?: string;
  cursorColor?: string;
  showCursor?: boolean;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 30,
  delay = 100,
  repeatDelay = 0, // 0 = type once and hold permanently
  className = '',
  cursorColor = '#d4af37',
  showCursor = true
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingActive, setIsTypingActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          setTimeout(() => {
            setIsTypingActive(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!isTypingActive) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsFinished(true);
      if (repeatDelay > 0) {
        const replayTimeout = setTimeout(() => {
          setDisplayedText('');
          setCurrentIndex(0);
          setIsFinished(false);
        }, repeatDelay);

        return () => clearTimeout(replayTimeout);
      }
    }
  }, [currentIndex, isTypingActive, text, speed, repeatDelay]);

  return (
    <span
      ref={containerRef}
      className={`inline ${className}`}
    >
      {displayedText}
      {showCursor && (!isFinished || repeatDelay > 0) && (
        <span
          className="inline-block w-[3px] h-[0.85em] ml-1 align-baseline animate-pulse rounded-full"
          style={{ backgroundColor: cursorColor }}
        />
      )}
    </span>
  );
};

