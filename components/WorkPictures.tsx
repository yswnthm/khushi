import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Reveal } from './Reveal';
import { WorkCard } from './WorkCard';

export const WorkPictures: React.FC = () => {
    return (
        <SectionWrapper id="work-photos" pageNumber="04" bgText="GALLERY">
            <div className="flex flex-col space-y-16">
                <Reveal width="100%">
                    <div className="relative">
                        <h3 className="font-serif text-5xl md:text-7xl text-slate-blue leading-tight text-center md:text-left">
                            Visual <br />
                            <span className="font-script text-6xl md:text-8xl text-warm-taupe ml-8 block mt-2">Stories</span>
                        </h3>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 px-4 md:px-0">
                    <div className="mt-0 md:mt-12">
                        <Reveal delay={100}>
                            <WorkCard src="https://picsum.photos/800/600?random=1" alt="Skincare Minimal" />
                            <p className="mt-4 font-serif text-center md:text-left text-lg text-slate-blue/70">Morning Rituals</p>
                        </Reveal>
                    </div>
                    <div className="mt-0">
                        <Reveal delay={300}>
                            <WorkCard src="https://picsum.photos/800/600?random=2" alt="Lifestyle Soft" />
                            <p className="mt-4 font-serif text-center md:text-left text-lg text-slate-blue/70">Daily Essentials</p>
                        </Reveal>
                    </div>
                    <div className="mt-0 md:mt-12">
                        <Reveal delay={500}>
                            <WorkCard src="https://picsum.photos/800/600?random=3" alt="Fashion Detail" />
                            <p className="mt-4 font-serif text-center md:text-left text-lg text-slate-blue/70">Soft Fabrics</p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};
