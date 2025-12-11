import React from 'react';

interface WorkCardProps {
  src: string;
  alt: string;
}

export const WorkCard: React.FC<WorkCardProps> = ({ src, alt }) => {
  return (
    <div className="group relative overflow-hidden aspect-[3/4] cursor-pointer">
      <div className="absolute inset-0 bg-warm-taupe/0 group-hover:bg-warm-taupe/10 transition-colors duration-700 z-10" />
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
      />
    </div>
  );
};