import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Reveal } from './Reveal';

export const AboutMe: React.FC = () => {
    return (
        <SectionWrapper id="about" pageNumber="03" bgText="PROFILE">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[60vh]">
                <div className="relative">
                    <Reveal>
                        <h3 className="font-serif text-5xl md:text-7xl text-slate-blue leading-tight">
                            A little <br />
                            <span className="font-script text-6xl md:text-8xl text-warm-taupe ml-8 block mt-2">About Me</span>
                        </h3>
                    </Reveal>
                </div>

                <div className="space-y-12 pl-0 md:pl-12">
                    <Reveal delay={200}>
                        <div className="flex flex-col space-y-3">
                            <span className="font-sans text-xs font-semibold tracking-widest text-warm-taupe uppercase border-b border-warm-taupe/20 pb-2 w-fit">The Creator</span>
                            <p className="font-sans text-lg font-light text-slate-blue/80 leading-relaxed">
                                I create visual stories that breathe. My work is rooted in the belief that content should feel like a gentle conversation—authentic, soft, and beautifully composed. I specialize in <span className="text-warm-taupe/90 font-medium">User Generated Content</span> that blends warm minimalism with quiet confidence.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </SectionWrapper>
    );
};
