import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorOutline = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Direct movement for the dot
      if (cursorDot.current) {
        cursorDot.current.style.left = `${clientX}px`;
        cursorDot.current.style.top = `${clientY}px`;
      }

      // Smooth movement for the outline
      if (cursorOutline.current) {
        gsap.to(cursorOutline.current, {
          x: clientX,
          y: clientY,
          duration: 0.15,
          ease: 'power2.out'
        });
      }
    };

    const onHoverStart = () => {
      cursorOutline.current?.classList.add('hovered');
    };

    const onHoverEnd = () => {
      cursorOutline.current?.classList.remove('hovered');
    };

    window.addEventListener('mousemove', onMouseMove);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onHoverStart);
      el.addEventListener('mouseleave', onHoverEnd);
    });

    // Observer for new elements (SPA transitions)
    const observer = new MutationObserver((mutations) => {
       const newInteractiveElements = document.querySelectorAll('a, button, .interactive');
       newInteractiveElements.forEach(el => {
         el.removeEventListener('mouseenter', onHoverStart);
         el.removeEventListener('mouseleave', onHoverEnd);
         el.addEventListener('mouseenter', onHoverStart);
         el.addEventListener('mouseleave', onHoverEnd);
       });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onHoverStart);
        el.removeEventListener('mouseleave', onHoverEnd);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorOutline} className="cursor-outline" style={{ transform: 'translate(-50%, -50%)' }} />
      <div ref={cursorDot} className="cursor-dot" />
    </>
  );
};

export default CustomCursor;