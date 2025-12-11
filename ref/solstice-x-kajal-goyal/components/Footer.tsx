import React from 'react';
import MagneticButton from './MagneticButton';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-powder-moon to-slate-blue text-powder-moon py-32 px-6 md:px-20 relative overflow-hidden">
      
      {/* CTA */}
      <div className="flex flex-col items-center justify-center text-center mb-32 relative z-10">
        <p className="font-sans text-sm tracking-widest uppercase text-warm-taupe mb-6">Start a conversation</p>
        <MagneticButton scale={1.05} className="interactive">
          <h2 className="font-display text-6xl md:text-9xl tracking-tight hover:text-white transition-colors cursor-pointer">
            Get In Touch
          </h2>
        </MagneticButton>
        <div className="w-24 h-1 bg-warm-taupe mt-8 rounded-full opacity-60"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-powder-moon/10 pt-12 text-sm font-sans tracking-wide opacity-80">
        <div>
          <h4 className="text-warm-taupe mb-4 uppercase text-xs">Social</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors interactive">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors interactive">Twitter / X</a></li>
            <li><a href="#" className="hover:text-white transition-colors interactive">LinkedIn</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-warm-taupe mb-4 uppercase text-xs">Contact</h4>
          <ul className="space-y-2">
            <li><a href="mailto:hello@solstice.com" className="hover:text-white transition-colors interactive">hello@solstice.com</a></li>
            <li>Tokyo, Japan</li>
          </ul>
        </div>

        <div className="md:text-right flex flex-col justify-between">
           <div>
            <span className="block text-warm-taupe uppercase text-xs mb-2">Local Time</span>
            <span>{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}</span>
           </div>
           <div className="mt-8 md:mt-0">
             <span className="font-display text-2xl">@solstice.2024</span>
           </div>
        </div>
      </div>

      {/* Background Noise/Grain */}
      <div className="absolute inset-0 bg-grain opacity-5 pointer-events-none mix-blend-overlay"></div>
    </footer>
  );
};

export default Footer;