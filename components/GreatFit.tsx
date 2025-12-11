import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Reveal } from './Reveal';

export const GreatFit: React.FC = () => {
    return (
        <SectionWrapper id="why-fit" pageNumber="06" bgText="VISION">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[60vh]">
                <div className="relative">
                    <Reveal>
                        <h3 className="font-serif text-5xl md:text-7xl text-slate-blue leading-tight">
                            Why we'd be a <br />
                            <span className="font-script text-6xl md:text-8xl text-warm-taupe ml-8 block mt-2">Great Fit</span>
                        </h3>
                    </Reveal>
                </div>

                <div className="space-y-12 pl-0 md:pl-12">
                    <Reveal delay={200}>
                        <div className="flex flex-col space-y-3">
                            <span className="font-sans text-xs font-semibold tracking-widest text-warm-taupe uppercase border-b border-warm-taupe/20 pb-2 w-fit">Authenticity</span>
                            <p className="font-sans text-lg font-light text-slate-blue/80 leading-relaxed">
                                I don't just capture products; I capture feelings. My content seamlessly integrates into a user's feed, feeling like a recommendation from a trusted friend rather than an ad.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={400}>
                        <div className="flex flex-col space-y-3">
                            <span className="font-sans text-xs font-semibold tracking-widest text-warm-taupe uppercase border-b border-warm-taupe/20 pb-2 w-fit">Consistency</span>
                            <p className="font-sans text-lg font-light text-slate-blue/80 leading-relaxed">
                                With a keen eye for soft lighting and balanced composition, I ensure every frame aligns with your brand's high-quality standards while maintaining a relatable touch.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </SectionWrapper>
    );
};
