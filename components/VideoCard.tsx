import React from 'react';
import { Play } from 'lucide-react';

interface VideoCardProps {
  src: string;
  caption: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({ src, caption }) => {
  return (
    <div className="group relative overflow-hidden aspect-[9/16] cursor-pointer bg-white/40">
      <img
        src={src}
        alt={caption}
        className="w-full h-full object-cover opacity-[0.95] group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
      />

      {/* Play Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-12 h-12 rounded-full border-[0.5px] border-white/60 bg-white/10 backdrop-blur-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
          <Play className="w-4 h-4 text-white fill-white opacity-90 ml-0.5" />
        </div>
      </div>

      <div className="absolute bottom-6 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 transform translate-y-4 group-hover:translate-y-0">
        <p className="text-white text-xs font-sans tracking-[0.2em] uppercase drop-shadow-md">{caption}</p>
      </div>

      {/* Gradient for text readability */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};