import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  scale?: number;
  tollerance?: number;
  speed?: number;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  scale = 1.1,
  tollerance = 0.8,
  speed = 0.25
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);

      // Only magnetize if within tolerance distance
      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = Math.max(width, height) * tollerance + 50;

      if (distance < maxDistance) {
        gsap.to(el, {
          x: x * speed,
          y: y * speed,
          scale: scale,
          duration: 0.4,
          ease: "power2.out"
        });
      } else {
        gsap.to(el, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "elastic.out(1, 0.3)"
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "elastic.out(1, 0.3)"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    // Note: In a complex app, optimize this listener to only run when hovering near element
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [scale, speed, tollerance]);

  return (
    <div 
      ref={ref} 
      className={`inline-block cursor-none ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default MagneticButton;