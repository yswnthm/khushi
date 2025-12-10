import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Reveal } from './Reveal';
import { Instagram, Mail, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
    const images = [
        'images/work1.jpg',
        'images/work2.jpg',
        'images/video2-thumb.jpg'
    ];
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const handleImageClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const scrollToAbout = () => {
        const element = document.getElementById('about');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <SectionWrapper id="hero" pageNumber="01" className="items-center justify-center">
            <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-12 lg:px-24">

                {/* Decorative Background Text (Name) - Subtle & Large */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none mix-blend-multiply opacity-[0.03]">
                    <span className="font-serif text-[15vw] leading-none text-slate-blue whitespace-nowrap tracking-tight">
                        KAJAL GOYAL
                    </span>
                </div>

                {/* Left Content: Text */}
                <div className="relative flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 z-20 md:w-1/2">
                    <Reveal delay={200} direction="none">
                        <div className="relative inline-block">
                            <h2 className="font-script text-6xl md:text-8xl text-warm-taupe/90 rotate-[-3deg] mb-2 relative z-10">
                                UGC Portfolio
                            </h2>
                            <div className="absolute -bottom-2 -right-4 w-12 h-12 bg-warm-taupe/20 rounded-full blur-xl -z-10"></div>
                        </div>
                    </Reveal>

                    <Reveal delay={400}>
                        <h1 className="font-serif text-4xl md:text-6xl tracking-wide uppercase text-slate-blue font-light leading-tight">
                            Kajal <br className="hidden md:block" /> Goyal
                        </h1>
                    </Reveal>

                    <Reveal delay={600}>
                        <p className="text-slate-blue/70 max-w-md text-lg md:text-xl font-light">
                            Creating authentic stories that resonate.
                            <span className="italic block mt-1">Let's bring your brand to life.</span>
                        </p>
                    </Reveal>

                    <Reveal delay={800}>
                        <div className="flex items-center space-x-6 text-icon-blue/80 pt-4">
                            <a href="https://instagram.com/kay.life173" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2 transition-all duration-300 hover:text-warm-taupe">
                                <span className="transition-all duration-300">
                                    <Instagram className="w-5 h-5 stroke-[1.5]" />
                                </span>
                                <span className="text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 hidden md:inline-block">Instagram</span>
                            </a>
                            <a href="mailto:Kay.life173@gmail.com" className="group flex items-center space-x-2 transition-all duration-300 hover:text-warm-taupe">
                                <span className="transition-all duration-300">
                                    <Mail className="w-5 h-5 stroke-[1.5]" />
                                </span>
                                <span className="text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 hidden md:inline-block">Email Me</span>
                            </a>
                        </div>
                    </Reveal>
                </div>

                {/* Right Content: Image */}
                <div className="relative mt-12 md:mt-0 md:w-5/12 z-20 flex justify-center md:justify-end">
                    <Reveal delay={500} direction="none">
                        <div className="relative w-64 md:w-80 lg:w-[400px] aspect-[3/4]">
                            {/* Decorative Frame */}
                            <div className="absolute inset-0 border border-slate-blue/20 translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5"></div>

                            {/* Image Container */}
                            <div
                                className="relative w-full h-full overflow-hidden bg-white shadow-xl rotate-[2deg] hover:rotate-0 transition-transform duration-700 ease-out cursor-pointer"
                                onClick={handleImageClick}
                            >
                                <img
                                    src={images[currentImageIndex]}
                                    alt="Kajal Goyal"
                                    className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-blue/10 to-transparent opacity-50 pointer-events-none"></div>
                            </div>
                        </div>
                    </Reveal>
                </div>


                {/* Scroll Down Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer z-30 opacity-70 hover:opacity-100 transition-opacity" onClick={scrollToAbout}>
                    <ArrowDown className="w-6 h-6 text-slate-blue" />
                </div>
            </div >
        </SectionWrapper >
    );
};
