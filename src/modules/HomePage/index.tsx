'use client';
import React from 'react';

import CTA from './CTA';
import Explore from './Explore';
import Gallery from './Gallery';
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
      <Why />
      <Explore />
      <Testimonials />
      <News />
      <HowItWork />
      <Innovation />
      <Gallery />
      <CTA />
    </main>
  );
};

export default HomePage;
