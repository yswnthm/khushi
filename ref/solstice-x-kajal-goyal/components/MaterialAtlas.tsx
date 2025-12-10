import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  { id: '1', title: 'Creative Direction', desc: 'Guiding the visual soul of your brand through cohesive storytelling.' },
  { id: '2', title: 'Digital Design', desc: 'Crafting websites and interfaces that feel like quiet sanctuaries.' },
  { id: '3', title: 'Visual Identity', desc: 'Logos, typography, and color systems rooted in elemental tones.' },
];

const MaterialAtlas: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className="py-32 bg-powder-moon relative min-h-screen flex flex-col">
      <div className="px-6 md:px-20 mb-20">
        <h2 className="font-display text-5xl md:text-7xl text-slate-blue mb-8">Approach</h2>
        <div className="w-full h-[1px] bg-slate-blue opacity-20"></div>
      </div>

      <div className="px-6 md:px-20 flex flex-col md:flex-row gap-12">
        {/* Left: Material/Image context */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto overflow-hidden">
           <img 
            src="https://picsum.photos/seed/texture/800/1000" 
            alt="Material Texture"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hoveredService ? 'scale-110 grayscale' : 'scale-100 sepia-haze'}`}
           />
           <div className="absolute inset-0 bg-slate-blue opacity-0 transition-opacity duration-500 mix-blend-color" style={{ opacity: hoveredService ? 0.4 : 0 }}></div>
        </div>

        {/* Right: Service List */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          {services.map((s) => (
            <div 
              key={s.id}
              className="group border-b border-slate-blue/20 py-10 cursor-pointer interactive"
              onMouseEnter={() => setHoveredService(s.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-display text-3xl md:text-4xl text-slate-blue group-hover:text-warm-taupe transition-colors duration-300">
                  {s.title}
                </h3>
                <ArrowRight className="text-slate-blue opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              <p className="font-sans text-desaturated-blue max-w-sm opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto transition-all duration-500 ease-in-out">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 right-4 font-display text-slate-blue opacity-20 text-6xl pointer-events-none">
        05
      </div>
    </section>
  );
};

export default MaterialAtlas;