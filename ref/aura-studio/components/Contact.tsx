import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import { Mail, MapPin, Instagram, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const { setVariant } = useCursor();
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="min-h-[80vh] bg-[#3B4453] text-moon px-6 md:px-20 py-32 relative overflow-hidden flex flex-col justify-between">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
           <filter id="noise">
             <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
           </filter>
           <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        <div>
           <h2 className="text-6xl md:text-8xl font-serif leading-none mb-12 opacity-90">
             Let's<br />Drift
           </h2>
           <p className="font-sans text-sm tracking-widest uppercase opacity-50 mb-8">
             {time} • Earth
           </p>
        </div>

        <div className="flex flex-col justify-end space-y-8">
           <a 
             href="#" 
             className="group flex items-center gap-4 text-xl font-light border-b border-white/10 pb-4 hover:border-taupe transition-colors duration-500"
             onMouseEnter={() => setVariant('hover')}
             onMouseLeave={() => setVariant('default')}
           >
             <Mail className="w-5 h-5 text-taupe group-hover:scale-110 transition-transform" />
             <span>hello@aura.studio</span>
             <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300" />
           </a>

           <div className="group flex items-center gap-4 text-xl font-light border-b border-white/10 pb-4">
             <MapPin className="w-5 h-5 text-taupe" />
             <span>Kyoto • Los Angeles</span>
           </div>

           <a 
             href="#" 
             className="group flex items-center gap-4 text-xl font-light border-b border-white/10 pb-4 hover:border-taupe transition-colors duration-500"
             onMouseEnter={() => setVariant('hover')}
             onMouseLeave={() => setVariant('default')}
           >
             <Instagram className="w-5 h-5 text-taupe group-hover:scale-110 transition-transform" />
             <span>@aura.studio</span>
           </a>
        </div>
      </div>

      <div className="mt-32 flex flex-col md:flex-row justify-between items-end opacity-40 font-sans text-xs tracking-widest uppercase">
        <p>© 2024 Aura Studio. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <span className="hover:text-taupe cursor-pointer transition-colors">Legal</span>
          <span className="hover:text-taupe cursor-pointer transition-colors">Credits</span>
        </div>
      </div>
    </footer>
  );
};

export default Contact;