import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import { X } from 'lucide-react';

const materials = [
  { id: 1, name: "Clay", description: "Hand-shaped, baked under soft sunlight.", img: "https://picsum.photos/id/106/800/800" },
  { id: 2, name: "Paper", description: "Textured matte fibers, recycled from old dreams.", img: "https://picsum.photos/id/20/800/800" },
  { id: 3, name: "Linen", description: "Woven threads of natural calm.", img: "https://picsum.photos/id/80/800/800" },
];

const Materials: React.FC = () => {
  const { setVariant, setText } = useCursor();
  const [activeMaterial, setActiveMaterial] = useState<number | null>(null);

  const activeData = materials.find(m => m.id === activeMaterial);

  return (
    <section className="py-32 px-6 md:px-20 bg-moon relative min-h-screen flex flex-col justify-center">
      <div className="mb-16">
        <p className="text-xs font-sans tracking-[0.2em] text-taupe uppercase mb-4">Behind the Scenes</p>
        <h2 className="text-5xl md:text-6xl font-serif text-slate">The Crafted Atlas</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {materials.map((item) => (
          <motion.div
            key={item.id}
            className="aspect-square relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: item.id * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setActiveMaterial(item.id)}
            onMouseEnter={() => {
              setVariant('view');
              setText('EXPAND');
            }}
            onMouseLeave={() => {
              setVariant('default');
              setText('');
            }}
          >
            <img 
              src={item.img} 
              alt={item.name} 
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-2">
              <span className="font-serif text-slate text-lg">{item.name}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeMaterial && activeData && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate/50 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveMaterial(null)}
          >
            <motion.div 
              className="bg-dust w-full max-w-4xl h-[70vh] flex flex-col md:flex-row shadow-2xl overflow-hidden relative"
              layoutId={`material-${activeMaterial}`}
              onClick={(e) => e.stopPropagation()}
            >
               <button 
                onClick={() => setActiveMaterial(null)}
                className="absolute top-4 right-4 z-20 p-2 hover:bg-slate/10 rounded-full transition-colors"
               >
                 <X className="w-6 h-6 text-slate" />
               </button>

               <div className="w-full md:w-1/2 h-1/2 md:h-full">
                 <img src={activeData.img} alt={activeData.name} className="w-full h-full object-cover" />
               </div>
               
               <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                 <p className="font-sans text-xs tracking-widest text-taupe uppercase mb-4">Materiality</p>
                 <h3 className="font-serif text-5xl text-slate mb-8">{activeData.name}</h3>
                 <p className="font-sans text-xl font-light text-stone leading-relaxed">
                   {activeData.description}
                 </p>
                 <div className="mt-12 w-full h-[1px] bg-mist"></div>
                 <p className="mt-4 font-serif italic text-slate/50">Crafted with care.</p>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Materials;