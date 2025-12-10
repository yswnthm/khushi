import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Sphere Pulse
      gsap.to(sphereRef.current, {
        scale: 1.1,
        opacity: 0.6,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Entrance
      const tl = gsap.timeline();
      
      tl.from(sphereRef.current, {
        scale: 0,
        opacity: 0,
        duration: 2,
        ease: "power3.out"
      })
      .from(textRef.current, {
        opacity: 0,
        y: 20,
        duration: 1.5,
        ease: "power2.out"
      }, "-=1")
      .from(".hero-social", {
        opacity: 0,
        y: 15,
        stagger: 0.2,
        duration: 1,
        ease: "back.out(1.7)"
      }, "-=0.5");

      // Scroll Exit
      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        scale: 1.5,
        opacity: 0,
        filter: "blur(10px)"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-powder-moon"
    >
      {/* Background Sphere */}
      <div 
        ref={sphereRef}
        className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-tr from-mist-grey via-white to-powder-moon blur-3xl opacity-40 pointer-events-none"
      />

      {/* Main Typography */}
      <div ref={textRef} className="relative z-10 text-center mix-blend-multiply">
        <h1 className="font-display text-[12vw] leading-none text-slate-blue tracking-tight opacity-90">
          SOLSTICE
        </h1>
        <p className="font-sub text-warm-taupe tracking-[0.3em] text-sm md:text-base mt-4 uppercase">
          Kajal Goyal
        </p>
      </div>

      {/* Social / Scroll Indicators */}
      <div className="absolute bottom-12 flex flex-col items-center gap-6 hero-social">
        <div className="flex gap-8 font-sans text-xs text-slate-blue tracking-widest uppercase">
          <a href="#" className="hover:text-warm-taupe transition-colors interactive">Instagram</a>
          <a href="#" className="hover:text-warm-taupe transition-colors interactive">LinkedIn</a>
          <a href="#" className="hover:text-warm-taupe transition-colors interactive">Email</a>
        </div>
        <div className="animate-bounce mt-4 text-warm-taupe opacity-60">
          <ArrowDown size={20} strokeWidth={1.5} />
        </div>
      </div>
      
      {/* Visual Anchor */}
      <div className="absolute bottom-4 right-4 font-display text-slate-blue opacity-20 text-6xl pointer-events-none">
        01
      </div>
    </section>
  );
};

export default Hero;