import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Ethos: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Split text animation logic would typically use SplitText plugin (paid). 
      // Using standard opacity fade for open source compatibility.
      
      gsap.fromTo(textRef.current, 
        { 
          opacity: 0.1, 
          y: 30 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "center 40%",
            scrub: 1,
          }
        }
      );

      gsap.to(".ethos-img", {
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen w-full py-24 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between relative bg-powder-moon">
      
      <div className="w-full md:w-1/3 mb-12 md:mb-0 relative z-10">
        <h2 className="font-display text-6xl md:text-8xl text-mist-grey opacity-40 fixed-heading sticky top-24">
          ABOUT
        </h2>
      </div>

      <div className="w-full md:w-2/3 md:pl-20 relative z-20">
        <p 
          ref={textRef} 
          className="font-display text-3xl md:text-5xl lg:text-6xl text-slate-blue leading-[1.2] text-justify md:text-left"
        >
          We shape ideas that linger like echoes in quiet rooms. A search for confidence without noise, merging cosmic minimalism with gentle, handcrafted design.
        </p>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-slate-blue text-sm leading-relaxed opacity-80">
          <p>
            With a background in digital architecture and visual storytelling, my work exists in the space between functionality and feeling.
          </p>
          <p>
            I believe digital spaces should breathe. Every interaction is an opportunity for a pause, a breath, a moment of clarity.
          </p>
        </div>
      </div>

      {/* Decorative Dust/Grain Overlay could go here */}
      <div className="absolute bottom-4 right-4 font-display text-slate-blue opacity-20 text-6xl pointer-events-none">
        02
      </div>
    </section>
  );
};

export default Ethos;