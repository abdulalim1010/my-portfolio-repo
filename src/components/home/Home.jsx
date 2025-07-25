import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects/>
    </div>
  );
};

export default Home;