'use client';
import React from 'react';
import Hero from './Hero';
import Why from './Why';
import About from './About';
import Explore from './Explore';
import Testimonials from './Testimonials';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Why />
      <Explore />
      <Testimonials />
    </main>
  );
};

export default HomePage;
