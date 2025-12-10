import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const Hero: React.FC = () => {
  const { setVariant } = useCursor();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background oversized initial */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ y }}
      >
        <h1 className="text-[40vw] font-serif text-slate opacity-[0.03] leading-none">A</h1>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="z-10 text-center relative"
        style={{ opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p 
          className="font-sans text-sm tracking-[0.3em] uppercase text-taupe mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Est. 2024
        </motion.p>
        
        <h1 
          className="text-7xl md:text-9xl font-serif text-slate tracking-tighter mix-blend-multiply"
          onMouseEnter={() => setVariant('hover')}
          onMouseLeave={() => setVariant('default')}
        >
          AURA
          <span className="block text-4xl md:text-5xl mt-2 italic font-light tracking-wide text-stone">Studio</span>
        </h1>

        <motion.div 
          className="absolute -inset-10 bg-moon blur-3xl -z-10 opacity-60 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="block w-[1px] h-16 bg-gradient-to-b from-slate to-transparent mx-auto"></span>
      </motion.div>
    </section>
  );
};

export default Hero;