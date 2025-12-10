import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { CursorProvider } from './context/CursorContext';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Materials from './components/Materials';
import Services from './components/Services';
import Reels from './components/Reels';
import Contact from './components/Contact';

const SmoothScrollWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

function App() {
  return (
    <CursorProvider>
      <SmoothScrollWrapper>
        <div className="bg-moon min-h-screen w-full relative">
          <Cursor />
          
          <main className="flex flex-col w-full">
            <Hero />
            <About />
            <Gallery />
            <Materials />
            <Services />
            <Reels />
            <Contact />
          </main>
          
          {/* Noise overlay for texture */}
          <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[60] mix-blend-overlay">
             <svg width="100%" height="100%">
               <filter id="noiseApp">
                 <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
               </filter>
               <rect width="100%" height="100%" filter="url(#noiseApp)" />
            </svg>
          </div>
        </div>
      </SmoothScrollWrapper>
    </CursorProvider>
  );
}

export default App;