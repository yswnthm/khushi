import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  pageNumber: string;
  bgText?: string;
  className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  id, 
  pageNumber, 
  bgText,
  className = ""
}) => {
  return (
    <section 
      id={id} 
      className={`relative min-h-screen w-full flex flex-col justify-center px-6 md:px-24 py-24 overflow-hidden ${className}`}
    >
      {/* Background Decorative Text - Ultra Light */}
      {bgText && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 w-full flex justify-center overflow-hidden">
          <span className="font-serif text-[18vw] md:text-[14vw] leading-none text-slate-blue opacity-[0.04] whitespace-nowrap tracking-tighter">
            {bgText}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {children}
      </div>

      {/* Footer / Identity Thread */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-16 flex flex-col items-end pointer-events-none z-20">
        <span className="font-serif text-3xl md:text-4xl text-warm-taupe opacity-40">{pageNumber}</span>
      </div>
      
      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-16 pointer-events-none z-20">
        <span className="text-warm-taupe font-sans text-[10px] md:text-xs tracking-[0.2em] opacity-60 uppercase">
          @kay.life173
        </span>
      </div>
    </section>
  );
};