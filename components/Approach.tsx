import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Reveal } from './Reveal';

export const Approach: React.FC = () => {
    return (
        <SectionWrapper id="approach" pageNumber="07" bgText="CRAFT">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[60vh]">
                <div className="order-2 md:order-1 space-y-12 pr-0 md:pr-12">
                    <Reveal delay={200}>
                        <div className="flex flex-col space-y-3">
                            <span className="font-sans text-xs font-semibold tracking-widest text-warm-taupe uppercase border-b border-warm-taupe/20 pb-2 w-fit">Concept</span>
                            <p className="font-sans text-lg font-light text-slate-blue/80 leading-relaxed">
                                Every project begins with understanding your brand's core essence. I research trends, analyze your audience, and build a mood board that aligns with your vision.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={400}>
                        <div className="flex flex-col space-y-3">
                            <span className="font-sans text-xs font-semibold tracking-widest text-warm-taupe uppercase border-b border-warm-taupe/20 pb-2 w-fit">Creation</span>
                            <p className="font-sans text-lg font-light text-slate-blue/80 leading-relaxed">
                                Shooting with natural light and minimal gear to keep things authentic. My editing style focuses on enhance natural beauty, keeping colors true and vibes high.
                            </p>
                        </div>
                    </Reveal>
                </div>

                <div className="order-1 md:order-2 relative">
                    <Reveal>
                        <h3 className="font-serif text-5xl md:text-7xl text-slate-blue leading-tight text-right">
                            My Creative <br />
                            <span className="font-script text-6xl md:text-8xl text-warm-taupe mr-8 block mt-2">Approach</span>
                        </h3>
                    </Reveal>
                </div>
            </div>
        </SectionWrapper>
    );
};
