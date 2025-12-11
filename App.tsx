import React from 'react';
import { Hero } from './components/Hero';
import { Product } from './components/Product';
import { AboutMe } from './components/AboutMe';
import { WorkPictures } from './components/WorkPictures';
import { WorkVideos } from './components/WorkVideos';
import { GreatFit } from './components/GreatFit';
import { Approach } from './components/Approach';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-pastel-mist text-slate-blue">
      <Hero />
      <AboutMe />
      <WorkPictures />
      <WorkVideos />
      <GreatFit />
      <Approach />
      <Contact />
    </div>
  );
};

export default App;