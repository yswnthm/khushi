import React from 'react';
import { SectionWrapper } from './components/SectionWrapper';
import { Reveal } from './components/Reveal';
import { WorkCard } from './components/WorkCard';
import { VideoCard } from './components/VideoCard';
import { Instagram, Mail, MapPin, ArrowDown } from 'lucide-react';

const App: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-pastel-mist text-slate-blue overflow-x-hidden">

      {/* --- SCENE 1: HERO (The Signature Opener) --- */}
      <SectionWrapper id="hero" pageNumber="01" className="items-center text-center">
        <div className="relative z-10 w-full flex flex-col items-center justify-center h-full">

          {/* Decorative Background Text (Name) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none mix-blend-multiply opacity-[0.04]">
            <span className="font-serif text-[15vw] md:text-[18vw] leading-none text-slate-blue whitespace-nowrap tracking-tight">
              KAJAL GOYAL
            </span>
          </div>

          {/* Foreground Content */}
          <div className="relative flex flex-col items-center space-y-6">
            <Reveal delay={200} direction="none">
              <h2 className="font-script text-5xl md:text-7xl text-warm-taupe/90 rotate-[-5deg] mb-2">
                UGC Portfolio
              </h2>
            </Reveal>

            <Reveal delay={400}>
              <h1 className="font-serif text-3xl md:text-4xl tracking-[0.2em] uppercase text-slate-blue font-light">
                Kajal Goyal
              </h1>
            </Reveal>

            <Reveal delay={600}>
              <div className="w-px h-16 bg-gradient-to-b from-slate-blue/0 via-slate-blue/30 to-slate-blue/0 my-4"></div>
            </Reveal>

            <Reveal delay={800}>
              <div className="flex space-x-10 text-icon-blue/80">
                <a href="#contact" className="hover:text-warm-taupe hover:scale-110 transition-all duration-500">
                  <Instagram className="w-5 h-5 stroke-[1.5]" />
                </a>
                <a href="#contact" className="hover:text-warm-taupe hover:scale-110 transition-all duration-500">
                  <Mail className="w-5 h-5 stroke-[1.5]" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float cursor-pointer opacity-30 hover:opacity-100 transition-opacity duration-500" onClick={scrollToAbout}>
            <ArrowDown className="w-5 h-5 text-warm-taupe" />
          </div>
        </div>
      </SectionWrapper>

      {/* --- SCENE 2: ABOUT ME (The Warm Introduction) --- */}
      <SectionWrapper id="about" pageNumber="02">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-center min-h-[50vh]">
          {/* Left Column: Heading */}
          <div className="md:col-span-5 relative flex flex-col justify-center">
            <Reveal>
              <div className="relative">
                <h2 className="font-serif text-6xl md:text-8xl text-pastel-cloud text-stroke-slate-blue leading-[0.85] select-none opacity-80">
                  ABOUT<br />ME
                </h2>
                <span className="absolute -top-4 -right-4 md:-right-8 font-script text-4xl text-warm-taupe/80 rotate-12">
                  Hello
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Paragraph */}
          <div className="md:col-span-7 md:pl-12 border-l border-slate-blue/10">
            <Reveal delay={200}>
              <div className="pl-6 md:pl-10 space-y-6">
                <h3 className="font-sans text-xs tracking-[0.3em] text-warm-taupe uppercase font-semibold">The Creator</h3>
                <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-slate-blue/80 text-justify md:text-left max-w-xl">
                  I create visual stories that breathe. My work is rooted in the belief that content should feel like a gentle conversation—authentic, soft, and beautifully composed. I specialize in <span className="text-warm-taupe/90 font-normal">User Generated Content</span> that blends warm minimalism with quiet confidence.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionWrapper>

      {/* --- SCENE 3: MY WORK PICTURES (Soft Gallery Panel) --- */}
      <SectionWrapper id="work-photos" pageNumber="03" bgText="GALLERY">
        <div className="flex flex-col space-y-16">
          <Reveal width="100%">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <span className="font-sans text-xs tracking-[0.3em] text-warm-taupe uppercase">Visuals</span>
              <h3 className="font-serif text-4xl md:text-5xl text-slate-blue italic">My Work Pictures</h3>
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

      {/* --- SCENE 4: MY WORK VIDEOS (Calm Video Strip) --- */}
      <SectionWrapper id="work-videos" pageNumber="04">
        <div className="flex flex-col space-y-16">
          <Reveal width="100%">
            <div className="flex flex-col items-center md:items-end space-y-2 text-right w-full">
              <span className="font-sans text-xs tracking-[0.3em] text-warm-taupe uppercase">Motion</span>
              <h3 className="font-serif text-4xl md:text-5xl text-slate-blue italic">My Work Videos</h3>
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

      {/* --- SCENE 5: WHY ME (Confidence Without Noise) --- */}
      <SectionWrapper id="why-fit" pageNumber="05" bgText="VISION">
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

      {/* --- SCENE 6: GET IN TOUCH (The Quiet Close) --- */}
      <SectionWrapper id="contact" pageNumber="06">
        <div className="flex flex-col md:flex-row h-full items-center justify-between gap-16 py-12">

          <div className="order-2 md:order-1 relative w-full md:w-auto">
            <Reveal>
              <h2 className="font-serif text-6xl md:text-[8rem] leading-none text-slate-blue opacity-90">
                Get In<br />
                <span className="font-script text-7xl md:text-[9rem] text-warm-taupe md:ml-24 block mt-4">Touch</span>
              </h2>
            </Reveal>
          </div>

          <div className="order-1 md:order-2 w-full md:w-auto flex flex-col space-y-8 md:space-y-12">
            <Reveal delay={200}>
              <a href="mailto:hello@kaylife.com" className="group flex items-center space-x-8 hover:translate-x-4 transition-transform duration-500">
                <div className="p-3 border-b border-warm-taupe/20 group-hover:border-warm-taupe transition-colors duration-500">
                  <Mail className="w-5 h-5 text-slate-blue group-hover:text-warm-taupe transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1">Email</span>
                  <span className="font-serif text-2xl md:text-3xl text-slate-blue">hello@kaylife.com</span>
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
                  <span className="font-serif text-2xl md:text-3xl text-slate-blue">New York, NY</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <a href="https://instagram.com" className="group flex items-center space-x-8 hover:translate-x-4 transition-transform duration-500">
                <div className="p-3 border-b border-warm-taupe/20 group-hover:border-warm-taupe transition-colors duration-500">
                  <Instagram className="w-5 h-5 text-slate-blue group-hover:text-warm-taupe transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1">Social</span>
                  <span className="font-serif text-2xl md:text-3xl text-slate-blue">@kay.life173</span>
                </div>
              </a>
            </Reveal>
          </div>

        </div>
      </SectionWrapper>
    </div>
  );
};

export default App;