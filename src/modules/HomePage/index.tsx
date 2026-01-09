'use client';
import React from 'react';

import About from './About';
import Explore from './Explore';
import Hero from './Hero';
import News from './News';
import Testimonials from './Testimonials';
import Why from './Why';

const HomePage = () : React.ReactElement => {
  return (
    <main>
      <Hero />
      <About />
      <Why />
      <Explore />      
      <Testimonials />
      <News />
    </main>
  );
};

export default HomePage;
