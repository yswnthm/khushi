import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import { Project } from '../types';

const projects: Project[] = [
  { id: 1, title: "Ceramic Void", category: "Art Direction", image: "https://picsum.photos/id/16/800/1000" },
  { id: 2, title: "Lunar Silk", category: "Branding", image: "https://picsum.photos/id/24/800/1000" },
  { id: 3, title: "Mist & Stone", category: "Web Design", image: "https://picsum.photos/id/42/800/1000" },
  { id: 4, title: "Aeon Trace", category: "Photography", image: "https://picsum.photos/id/55/800/1000" },
];

const Gallery: React.FC = () => {
  const { setVariant, setText } = useCursor();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);

  return (
    <section ref={targetRef} className="h-[300vh] relative bg-dust">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="absolute top-12 left-6 md:left-20 z-10">
           <p className="text-xs font-sans tracking-[0.2em] text-taupe uppercase mb-2">Selected Works</p>
           <h3 className="text-xl font-serif italic text-slate">Pastel Carousel</h3>
        </div>

        <motion.div 
          style={{ x }} 
          className="flex gap-12 md:gap-24 pl-6 md:pl-20 items-center"
        >
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="relative group shrink-0 w-[80vw] md:w-[35vw] aspect-[4/5] md:aspect-[3/4]"
              onMouseEnter={() => {
                setVariant('view');
                setText('EXPLORE');
              }}
              onMouseLeave={() => {
                setVariant('default');
                setText('');
              }}
            >
              <div className="w-full h-full overflow-hidden bg-white/50 p-4 shadow-sm transition-all duration-700 group-hover:shadow-xl group-hover:shadow-slate/5">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[0.3] sepia-[0.2] opacity-90 transition-all duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute -bottom-16 left-0">
                <h4 className="text-3xl font-serif text-slate">{project.title}</h4>
                <p className="text-sm font-sans text-stone tracking-wide">{project.category}</p>
              </div>
            </div>
          ))}
          {/* Spacer for end of scroll */}
          <div className="w-[10vw]"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;