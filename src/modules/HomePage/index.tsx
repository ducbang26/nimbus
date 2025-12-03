'use client';
import React from 'react';
import Hero from './Hero';
import Why from './Why';
import About from './About';
import Explore from './Explore';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Why />
      <Explore />
    </main>
  );
};

export default HomePage;
