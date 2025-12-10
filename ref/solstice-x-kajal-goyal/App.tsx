import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Ethos from './components/Ethos';
import Gallery from './components/Gallery';
import VideoShowcase from './components/VideoShowcase';
import MaterialAtlas from './components/MaterialAtlas';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const scrollFn = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };

    requestAnimationFrame(scrollFn);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="antialiased bg-powder-moon text-slate-blue overflow-hidden">
      <CustomCursor />
      
      {/* Background Grain for texture */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-grain mix-blend-multiply"></div>

      <main>
        <Hero />
        <Ethos />
        <Gallery />
        <VideoShowcase />
        <MaterialAtlas />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;