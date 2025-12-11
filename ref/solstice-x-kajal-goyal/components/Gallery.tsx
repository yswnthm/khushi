import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Project } from '../types';

const projects: Project[] = [
  { id: '1', title: 'Ceramic Void', category: 'Art Direction', year: '2023', imageUrl: 'https://picsum.photos/seed/ceramic/800/1000' },
  { id: '2', title: 'Lunar Dust', category: 'Web Design', year: '2024', imageUrl: 'https://picsum.photos/seed/lunar/800/1000' },
  { id: '3', title: 'Silence I', category: 'Photography', year: '2023', imageUrl: 'https://picsum.photos/seed/silence/800/1000' },
  { id: '4', title: 'Moss Iron', category: 'Branding', year: '2022', imageUrl: 'https://picsum.photos/seed/moss/800/1000' },
];

const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const getScrollAmount = () => {
        let trackWidth = track.scrollWidth;
        return -(trackWidth - window.innerWidth);
      };

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${getScrollAmount() * -1}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full bg-powder-moon overflow-hidden relative">
      <div className="absolute top-12 left-12 z-10">
        <span className="font-sub text-xs uppercase tracking-widest text-slate-blue">Featured Works</span>
      </div>

      <div ref={trackRef} className="flex h-full items-center px-[20vw] w-max gap-20">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="group relative w-[400px] md:w-[500px] h-[60vh] md:h-[70vh] flex-shrink-0 flex flex-col"
          >
            <div className="w-full h-full overflow-hidden relative interactive cursor-none">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover sepia-haze transform transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Bloom */}
              <div className="absolute inset-0 bg-warm-taupe mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>
            
            <div className="mt-6 flex justify-between items-baseline opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-display text-4xl text-forged-iron">{project.title}</h3>
              <div className="text-right">
                <span className="block font-sans text-xs text-warm-taupe uppercase tracking-wider">{project.category}</span>
                <span className="block font-sans text-xs text-slate-blue mt-1">{project.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 right-4 font-display text-slate-blue opacity-20 text-6xl pointer-events-none">
        03
      </div>
    </section>
  );
};

export default Gallery;