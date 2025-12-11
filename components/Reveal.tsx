import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: 'up' | 'none';
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0,
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.disconnect();
    };
  }, []);

  const transformClass = direction === 'up' 
    ? (isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16")
    : (isVisible ? "opacity-100" : "opacity-0");

  return (
    <div ref={ref} style={{ width }} className={`relative`}>
      <div
        style={{ transitionDelay: `${delay}ms` }}
        className={`transform transition-all duration-[1500ms] ease-out ${transformClass}`}
      >
        {children}
      </div>
    </div>
  );
};