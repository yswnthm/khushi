import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Reveal } from './Reveal';
import { VideoCard } from './VideoCard';

export const WorkVideos: React.FC = () => {
    return (
        <SectionWrapper id="work-videos" pageNumber="05" bgText="MOTION">
            <div className="flex flex-col space-y-16">
                <Reveal width="100%">
                    <div className="relative text-right w-full">
                        <h3 className="font-serif text-5xl md:text-7xl text-slate-blue leading-tight inline-block text-right">
                            In <br />
                            <span className="font-script text-6xl md:text-8xl text-warm-taupe ml-8 block mt-2">Motion</span>
                        </h3>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-8 md:px-0">
                    <Reveal delay={100}>
                        <VideoCard src="https://picsum.photos/800/600?random=4" caption="Morning Routine" />
                    </Reveal>
                    <Reveal delay={300}>
                        <VideoCard src="https://picsum.photos/800/600?random=5" caption="Aesthetics" />
                    </Reveal>
                    <Reveal delay={500}>
                        <VideoCard src="https://picsum.photos/800/600?random=6" caption="GRWM Style" />
                    </Reveal>
                </div>
            </div>
        </SectionWrapper>
    );
};
