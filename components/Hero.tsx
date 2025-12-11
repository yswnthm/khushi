import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Product } from './Product';

export const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const scrollToProduct = () => {
        // Since Product is now inside Hero, we can scroll to a specific ref or just let natural scroll happen.
        // But for compatibility, let's target the inner ID if possible, or just scroll the main container.
        // Actually, scrolling "to product" in this sticky context means scrolling the page down.
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    };

    // Animation Transforms

    // "Garg" Text: Moves up and fades out
    // Adjusted to move less distance and separate later to reduce visual gap
    const gargY = useTransform(scrollYProgress, [0, 0.3], ["-50%", "-150%"]);
    const gargOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    // "KHUSHI" Text: Stays fixed (mimicked by not moving, or slight parallax if desired)
    // The user said "stays fixed in place".
    // Since the container is sticky, it stays fixed by default until the container scrolls past.
    // However, we want it to be covered by the image.

    // Image/Product: Slides up from bottom
    // Starts much earlier to close the gap with the exiting text
    const imageY = useTransform(scrollYProgress, [0.05, 0.45], ["100vh", "0vh"]);
    // Reduce scale effect on the whole section as it might look weird on text, keep it subtle or remove.
    // Let's keep it very 1:1 for the section content to avoid blurriness.
    const imageOpacity = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);

    // Scroll Indicator Opacity - Fade out instantly
    const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

    return (
        <div ref={containerRef} id="hero" className="relative h-[300vh] w-full bg-pastel-mist">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

                {/* Initial Content Layer (Text) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
                    <div className="relative w-full text-center flex flex-col items-center justify-center">
                        {/* KHUSHI - Background Text */}
                        <motion.h1
                            className="font-serif text-[18vw] md:text-[22vw] leading-none text-[#D8C8B0] select-none relative"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            KHUSHI
                        </motion.h1>

                        {/* Garg - Overlay Text */}
                        <motion.span
                            style={{ top: "50%", left: "50%", x: "-50%", y: gargY, opacity: gargOpacity }}
                            className="absolute font-script text-[10vw] md:text-[8vw] text-warm-taupe/90 whitespace-nowrap z-20"
                        >
                            Garg
                        </motion.span>
                    </div>
                </div>

                {/* Entering Product Section Layer */}
                <motion.div
                    style={{ y: imageY, opacity: imageOpacity }}
                    className="absolute inset-0 z-30 flex items-center justify-center pointer-events-auto"
                >
                    <div className="w-full h-full relative">
                        <Product />
                    </div>
                </motion.div>


                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: scrollIndicatorOpacity }}
                    onClick={scrollToProduct}
                    className="absolute bottom-8 right-8 cursor-pointer z-40 hidden md:flex items-center space-x-2 pointer-events-auto"
                >
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-blue/50 hover:text-slate-blue transition-colors duration-300">Scroll</span>
                    <ArrowDown className="w-4 h-4 text-slate-blue/50" />
                </motion.div>

                {/* Page Number & Social - Always visible */}
                <div className="absolute bottom-8 right-8 md:bottom-12 md:right-16 flex flex-col items-end pointer-events-none z-50">
                    <span className="font-serif text-3xl md:text-4xl text-warm-taupe opacity-40">01</span>
                </div>
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-16 pointer-events-none z-50">
                    <span className="text-warm-taupe font-sans text-[10px] md:text-xs tracking-[0.2em] opacity-60 uppercase">
                        KHUSHI
                    </span>
                </div>

            </div>
        </div>
    );
};
