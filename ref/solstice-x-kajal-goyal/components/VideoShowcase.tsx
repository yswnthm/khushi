import React from 'react';
import { Play } from 'lucide-react';
import MagneticButton from './MagneticButton';

const videos = [
  { id: 1, img: 'https://picsum.photos/seed/reel1/400/700' },
  { id: 2, img: 'https://picsum.photos/seed/reel2/400/700' },
  { id: 3, img: 'https://picsum.photos/seed/reel3/400/700' },
];

const VideoShowcase: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-powder-moon relative">
       <div className="mb-16 text-center">
         <h2 className="font-display text-5xl md:text-6xl text-slate-blue">Motion Studies</h2>
         <p className="font-sans text-warm-taupe mt-4 tracking-wide uppercase text-sm">Light in movement</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {videos.map((vid, i) => (
           <div key={vid.id} className={`relative group aspect-[9/16] overflow-hidden ${i === 1 ? 'md:-translate-y-12' : ''}`}>
             <img src={vid.img} alt="Reel thumbnail" className="w-full h-full object-cover sepia-haze" />
             
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/10">
                <MagneticButton className="interactive">
                  <div className="w-16 h-16 rounded-full border border-powder-moon backdrop-blur-sm flex items-center justify-center">
                    <Play className="text-powder-moon fill-powder-moon ml-1" size={20} />
                  </div>
                </MagneticButton>
             </div>
           </div>
         ))}
       </div>

       <div className="absolute bottom-4 right-4 font-display text-slate-blue opacity-20 text-6xl pointer-events-none">
        04
      </div>
    </section>
  );
};

export default VideoShowcase;