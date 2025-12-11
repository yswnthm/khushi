import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const Cursor: React.FC = () => {
  const { variant, text } = useCursor();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      height: 16,
      width: 16,
      backgroundColor: "#A68A74", // Taupe
      mixBlendMode: "normal" as const,
      opacity: 0.8,
    },
    hover: {
      height: 64,
      width: 64,
      backgroundColor: "#E7EBEF",
      border: "1px solid #A68A74",
      opacity: 0.5,
      mixBlendMode: "exclusion" as const,
    },
    text: {
      height: 48,
      width: 4,
      backgroundColor: "#A68A74",
      opacity: 1,
    },
    view: {
      height: 96,
      width: 96,
      backgroundColor: "#FFFFFF",
      mixBlendMode: "difference" as const,
      opacity: 1,
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      variants={variants}
      animate={variant}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      {variant === 'view' && (
        <span className="text-[10px] font-sans tracking-widest text-slate font-bold uppercase">
          {text || 'VIEW'}
        </span>
      )}
    </motion.div>
  );
};

export default Cursor;