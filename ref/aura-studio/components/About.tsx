import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const About: React.FC = () => {
  const { setVariant } = useCursor();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <section className="min-h-[80vh] w-full flex items-center py-32 md:py-40 px-6 md:px-20 relative">
      <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-4">
        
        {/* Sticky Label */}
        <div className="md:col-span-4 relative">
          <div className="md:sticky md:top-32">
            <h2 className="text-6xl md:text-7xl font-serif text-stone opacity-20 md:opacity-30">ABOUT</h2>
            <div className="w-12 h-[1px] bg-taupe mt-8 mb-4"></div>
            <p className="text-xs font-sans tracking-[0.2em] text-taupe uppercase">The Warm Orbit</p>
          </div>
        </div>

        {/* Text Content */}
        <motion.div 
          className="md:col-span-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
        >
          <motion.div 
            className="text-2xl md:text-4xl font-serif leading-relaxed text-slate space-y-8"
            onMouseEnter={() => setVariant('text')}
            onMouseLeave={() => setVariant('default')}
          >
            <motion.p variants={itemVariants}>
              We are a design practice flowing through the quiet spaces of the digital cosmos.
            </motion.p>
            <motion.p variants={itemVariants} className="text-stone opacity-80">
              Balancing handcrafted minimalism with gentle technology, we build web experiences that feel like a slow breath.
            </motion.p>
            <motion.p variants={itemVariants}>
              Founded on the belief that software should be serene, touchable, and deeply human.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;