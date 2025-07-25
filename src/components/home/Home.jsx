import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Stats from '../Stats';
import Services from '../Services';

const Home = () => {
  return (
    <div className='bg-green-100'>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Stats />
      <Services/>
    </div>
  );
};

export default Home;