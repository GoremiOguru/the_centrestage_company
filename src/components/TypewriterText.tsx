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
  speed = 30, // Snappy typing speed
  repeatDelay = 4000, // Replay every 4 seconds
  className = '',
  cursorColor = '#d4af37'
}) => {
  const [displayedText, setDisplayedText] = useState(text); // Default to full text so no blank/delayed box on load
  const [currentIndex, setCurrentIndex] = useState(text.length);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasTypedRef = useRef(false);

  // IntersectionObserver to trigger typing when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // If first time entering view, start typing instantly from index 0
          if (!hasTypedRef.current) {
            hasTypedRef.current = true;
            setDisplayedText('');
            setCurrentIndex(0);
          }
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [text]);

  // Typing effect loop
  useEffect(() => {
    if (!isInView) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      // Completed full text: pause for 4 seconds then re-type seamlessly
      const replayTimeout = setTimeout(() => {
        setDisplayedText('');
        setCurrentIndex(0);
      }, repeatDelay);

      return () => clearTimeout(replayTimeout);
    }
  }, [currentIndex, isInView, text, speed, repeatDelay]);

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
