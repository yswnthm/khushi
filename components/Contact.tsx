import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Reveal } from './Reveal';
import { Instagram, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <SectionWrapper id="contact" pageNumber="08" bgText="CONTACT">
            <div className="flex flex-col items-center justify-center py-24 md:py-32 space-y-16">

                <Reveal>
                    <div className="text-center relative">
                        <h2 className="font-serif text-[12vw] leading-none text-slate-blue opacity-90 select-none">
                            COLLABORATE
                        </h2>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] mix-blend-multiply">
                            <span className="font-script text-6xl md:text-8xl text-warm-taupe block whitespace-nowrap">
                                Let's Talk
                            </span>
                        </div>
                    </div>
                </Reveal>

                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 px-8">
                    <Reveal delay={200}>
                        <a href="mailto:hello@example.com" className="flex flex-col items-center group text-center space-y-4">
                            <div className="w-12 h-12 rounded-full border border-slate-blue/20 flex items-center justify-center group-hover:bg-slate-blue group-hover:border-transparent transition-all duration-300">
                                <Mail className="w-5 h-5 text-slate-blue group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h4 className="font-sans text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">Inquiries</h4>
                                <span className="font-serif text-xl md:text-2xl text-slate-blue group-hover:text-warm-taupe transition-colors">hello@example.com</span>
                            </div>
                        </a>
                    </Reveal>

                    <Reveal delay={400}>
                        <a href="#" className="flex flex-col items-center group text-center space-y-4">
                            <div className="w-12 h-12 rounded-full border border-slate-blue/20 flex items-center justify-center group-hover:bg-slate-blue group-hover:border-transparent transition-all duration-300">
                                <MapPin className="w-5 h-5 text-slate-blue group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h4 className="font-sans text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">Studio</h4>
                                <span className="font-serif text-xl md:text-2xl text-slate-blue group-hover:text-warm-taupe transition-colors">Mumbai, India</span>
                            </div>
                        </a>
                    </Reveal>

                    <Reveal delay={600}>
                        <a href="#" className="flex flex-col items-center group text-center space-y-4">
                            <div className="w-12 h-12 rounded-full border border-slate-blue/20 flex items-center justify-center group-hover:bg-slate-blue group-hover:border-transparent transition-all duration-300">
                                <Instagram className="w-5 h-5 text-slate-blue group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h4 className="font-sans text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">Follow</h4>
                                <div className="flex items-center space-x-2 justify-center">
                                    <span className="font-serif text-xl md:text-2xl text-slate-blue group-hover:text-warm-taupe transition-colors">@khushi.ugc</span>
                                    <ArrowUpRight className="w-4 h-4 text-warm-taupe opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 translate-x-1" />
                                </div>
                            </div>
                        </a>
                    </Reveal>
                </div>

                {/* Copyright / Footer Note */}
                <Reveal delay={800}>
                    <div className="border-t border-slate-blue/10 w-full pt-8 mt-12 text-center">
                        <p className="font-sans text-[10px] text-slate-blue/40 tracking-widest uppercase">
                            © {new Date().getFullYear()} Khushi Portfolio. All Rights Reserved.
                        </p>
                    </div>
                </Reveal>

            </div>
        </SectionWrapper>
    );
};
