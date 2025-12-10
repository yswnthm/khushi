import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import { Service } from '../types';
import { ArrowRight } from 'lucide-react';

const services: Service[] = [
  { id: 1, title: "Art Direction", description: "Guiding the visual soul.", previewImage: "https://picsum.photos/id/28/600/400" },
  { id: 2, title: "Digital Design", description: "Interfaces that breathe.", previewImage: "https://picsum.photos/id/29/600/400" },
  { id: 3, title: "Brand Identity", description: "Stories told in silence.", previewImage: "https://picsum.photos/id/36/600/400" },
  { id: 4, title: "Spatial Audio", description: "Soundscapes for the web.", previewImage: "https://picsum.photos/id/48/600/400" },
];

const Services: React.FC = () => {
  const { setVariant } = useCursor();
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 md:px-20 bg-dust min-h-screen flex flex-col justify-center relative overflow-hidden">
      
      {/* Background Glow based on hover */}
      <AnimatePresence>
        {hoveredService && (
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-20 pointer-events-none blur-3xl rounded-full bg-stone"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto w-full z-10">
        <div className="mb-16 text-center">
            <p className="text-xs font-sans tracking-[0.2em] text-taupe uppercase mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-serif text-slate">The Linear Breeze</h2>
        </div>

        <div className="flex flex-col">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group border-b border-mist py-8 md:py-12 flex items-center justify-between cursor-pointer relative"
              onMouseEnter={() => {
                setHoveredService(service.id);
                setVariant('text');
              }}
              onMouseLeave={() => {
                setHoveredService(null);
                setVariant('default');
              }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-4">
                <span className="font-sans text-xs text-taupe w-12">0{service.id}</span>
                <h3 className="font-serif text-3xl md:text-5xl text-slate group-hover:text-stone transition-colors duration-500">
                  {service.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                 <span className="hidden md:block font-sans font-light text-slate">{service.description}</span>
                 <ArrowRight className="w-5 h-5 text-taupe" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;