import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Reveal } from './Reveal';
import { ArrowDown, Instagram, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
    const images = [
        'images/work1.jpg',
        'images/product2.png',
        'images/product3.png'
    ];
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [isHovered, setIsHovered] = React.useState(false);

    const handleImageClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const scrollToAbout = () => {
        const element = document.getElementById('about');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <SectionWrapper id="hero" pageNumber="01" className="items-center justify-center overflow-hidden">
            <div className="relative w-full h-full flex flex-col items-center justify-center">

                {/* Main Heading Layer - Behind Image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full text-center">
                    <Reveal delay={200}>
                        <h1 className={`font-serif text-[18vw] md:text-[22vw] leading-none ${isHovered ? 'text-slate-blue/5' : 'text-[#D8C8B0]'} transition-colors duration-700 opacity-0 animate-fade-in select-none`}>
                            KHUSHI
                        </h1>
                    </Reveal>
                </div>

                {/* Central Focus */}
                <div className="relative z-10 flex flex-col items-center">


                    {/* Image Container */}
                    <Reveal delay={400} direction="none">
                        <div
                            className="relative w-[300px] md:w-[450px] aspect-[3/4] cursor-pointer group"
                            onClick={handleImageClick}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {/* Frame Border */}
                            <div className="absolute inset-0 border-[1px] border-slate-blue/20 scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"></div>

                            {/* Image Mask/Reveal */}
                            <div className="w-full h-full overflow-hidden relative bg-pastel-cloud">
                                <img
                                    src={images[currentImageIndex]}
                                    alt="Khushi Portrait"
                                    className="w-full h-full object-cover animate-reveal scale-110 group-hover:scale-100 transition-all duration-1000 grayscale-[20%] group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-warm-taupe/10 mix-blend-overlay"></div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Lower Description */}
                    <div className="absolute -bottom-20 md:-bottom-12 md:-left-24 max-w-xs text-center md:text-left z-20">
                        <Reveal delay={1000}>
                            <p className="font-sans text-sm md:text-base tracking-widest uppercase text-slate-blue/80 leading-relaxed bg-pastel-mist/80 backdrop-blur-sm p-4 md:p-0">
                                Curating aesthetic visuals & <br />
                                <span className="text-warm-taupe font-semibold">authentic storytelling</span>
                            </p>
                        </Reveal>
                    </div>
                </div>

                {/* Social Sidebar */}
                <div className="absolute left-8 bottom-12 hidden md:flex flex-col space-y-6 z-30">
                    <Reveal delay={1200}>
                        <div className="flex flex-col space-y-4 text-slate-blue/60">
                            <a href="mailto:hello@example.com" className="hover:text-icon-blue transition-colors duration-300">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="#" target="_blank" className="hover:text-icon-blue transition-colors duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                        {/* Vertical Decoration Line */}
                        <div className="w-[1px] h-16 bg-slate-blue/20 mx-auto mt-4"></div>
                    </Reveal>
                </div>

                {/* Scroll Indicator */}
                <div
                    onClick={scrollToAbout}
                    className="absolute bottom-8 right-8 cursor-pointer group z-30 hidden md:flex items-center space-x-2"
                >
                    <Reveal delay={1400}>
                        <span className="text-xs uppercase tracking-[0.2em] text-slate-blue/50 group-hover:text-slate-blue transition-colors duration-300">Scroll</span>
                        <ArrowDown className="w-4 h-4 text-slate-blue/50 group-hover:translate-y-1 transition-all duration-300" />
                    </Reveal>
                </div>

            </div>
        </SectionWrapper>
    );
};
