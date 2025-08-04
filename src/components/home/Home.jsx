import React, { useState } from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';

import Stats from '../Stats';
import Services from '../Services';
import Projects from '../../pages/Projects';
import DeveloperModal from './DeveloperModal';

const Home = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='bg-green-100'>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-primary to-secondary text-white text-center px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Hi, I'm a Full Stack Developer</h1>
      <p className="text-lg mb-8">Crafting Web Experiences from Frontend to Backend</p>
      <button
        className="btn btn-accent btn-lg"
        onClick={() => setIsModalOpen(true)}
      >
        Know More About My Stack
      </button>

      <DeveloperModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
      <Stats />npm
      <Services/>
    </div>
  );
};

export default Home;