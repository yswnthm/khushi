import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

const reels = [
  { id: 1, img: "https://picsum.photos/id/10/400/700" },
  { id: 2, img: "https://picsum.photos/id/15/400/700" },
  { id: 3, img: "https://picsum.photos/id/44/400/700" },
];

const Reels: React.FC = () => {
  const { setVariant } = useCursor();

  return (
    <section className="py-32 px-6 md:px-20 bg-moon">
       <div className="flex justify-between items-end mb-16 max-w-6xl mx-auto">
          <div>
            <p className="text-xs font-sans tracking-[0.2em] text-taupe uppercase mb-4">In Motion</p>
            <h2 className="text-4xl font-serif text-slate">The Calm Strip</h2>
          </div>
          <div className="hidden md:block w-24 h-[1px] bg-mist mb-4"></div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              className="aspect-[9/16] relative overflow-hidden group rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 1 }}
              onMouseEnter={() => setVariant('hover')}
              onMouseLeave={() => setVariant('default')}
            >
              <img 
                src={reel.img} 
                alt="Reel Preview" 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-colors duration-500">
                <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
              </div>
            </motion.div>
          ))}
       </div>
    </section>
  );
};

export default Reels;