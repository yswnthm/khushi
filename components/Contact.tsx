import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Reveal } from './Reveal';
import { Instagram, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <SectionWrapper id="contact" pageNumber="07" bgText="CONTACT">
            <div className="flex flex-col md:flex-row h-full items-center justify-between gap-16 py-12">

                <div className="order-2 md:order-1 relative w-full md:w-auto">
                    <Reveal>
                        <h2 className="font-serif text-5xl md:text-7xl leading-tight text-slate-blue opacity-90">
                            Something<br />
                            <span className="font-script text-6xl md:text-8xl text-warm-taupe md:ml-12 block mt-2">Else</span>
                        </h2>
                        <p className="font-sans text-lg text-slate-600 mt-8 max-w-md leading-relaxed">
                            Let's create something unique together. Open for freelance opportunities and collaborations.
                        </p>
                    </Reveal>
                </div>

                <div className="order-1 md:order-2 w-full md:w-auto flex flex-col space-y-8 md:space-y-12">
                    <Reveal delay={200}>
                        <a href="mailto:hello@example.com" className="group flex items-center space-x-8 hover:translate-x-4 transition-transform duration-500">
                            <div className="p-3 border-b border-warm-taupe/20 group-hover:border-warm-taupe transition-colors duration-500">
                                <Mail className="w-5 h-5 text-slate-blue group-hover:text-warm-taupe transition-colors" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1">Email</span>
                                <span className="font-serif text-2xl md:text-3xl text-slate-blue">hello@example.com</span>
                            </div>
                        </a>
                    </Reveal>

                    <Reveal delay={300}>
                        <div className="group flex items-center space-x-8 hover:translate-x-4 transition-transform duration-500">
                            <div className="p-3 border-b border-warm-taupe/20 group-hover:border-warm-taupe transition-colors duration-500">
                                <MapPin className="w-5 h-5 text-slate-blue group-hover:text-warm-taupe transition-colors" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1">Based In</span>
                                <span className="font-serif text-2xl md:text-3xl text-slate-blue">Location, City</span>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={400}>
                        <a href="#" className="group flex items-center space-x-8 hover:translate-x-4 transition-transform duration-500">
                            <div className="p-3 border-b border-warm-taupe/20 group-hover:border-warm-taupe transition-colors duration-500">
                                <Instagram className="w-5 h-5 text-slate-blue group-hover:text-warm-taupe transition-colors" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1">Social</span>
                                <span className="font-serif text-2xl md:text-3xl text-slate-blue">@username</span>
                            </div>
                        </a>
                    </Reveal>
                </div>

            </div>
        </SectionWrapper>
    );
};
