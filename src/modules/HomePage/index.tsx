'use client';
import React from 'react';

import About from './About';
import CTA from './CTA';
import Explore from './Explore';
import Hero from './Hero';
import HowItWork from './HowItWork';
import Innovation from './Innovation';
import News from './News';
import Testimonials from './Testimonials';
import Why from './Why';

const HomePage = (): React.ReactElement => {
  return (
    <main>
      <Hero />
      <About />
      <Why />
      <Explore />
      <Testimonials />
      <News />
      <HowItWork />
      <Innovation />
      <CTA />
    </main>
  );
};

export default HomePage;
