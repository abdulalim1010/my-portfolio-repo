import { motion } from "framer-motion";
import heroImage from '../../assets/hero.jfif';
import { Typewriter } from 'react-simple-typewriter';
import HeroGreeting from "./HeroGreeting";

const Hero = () => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between bg-green-300 text-white px-4"
  >
    {/* Text Section */}
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center md:pr-8">
      <HeroGreeting/>
      <h1 className="text-5xl font-bold font-heading text-primary">I'm Abdul Alim</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
        <Typewriter
          words={['Full Stack Developer', 'MERN Stack Expert', 'React Developer', 'Backend Developer']}
          loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>
      <p className="text-lg md:text-xl my_heading mb-8">
       Passionate Full Stack Developer <br /> specializing in building <br /> responsive and interactive web applications <br /> using modern technologies like React.js, Node.js, and MongoDB.
      </p>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="/contact"
        className="inline-block bg-secondary px-6 py-3 rounded-lg text-white font-semibold shadow-lg"
      >
        Hire Me
      </motion.a>
    </div>

  
    {/* Image Section with Animated Left Border & Glowing Border */}
    <div className="w-full md:w-1/2 flex items-center justify-center mt-10 mb-3 md:mt-0 relative">
      
      {/* Animated Vertical Left Border */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: '80%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="hidden md:block absolute left-0 w-2 bg-gradient-to-b bg-pink-300 via-purple-500 to-pink-500 rounded-full"
      ></motion.div>

      {/* Image with Glowing Gradient Border & Hover Animation */}
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.5)"
        }}
        className="p-1 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 rounded-xl"
      >
        <img
          src={heroImage}
          alt="Alim Profile"
          className="w-72 md:w-80 rounded-lg object-cover"
        />
      </motion.div>

    </div>
  </motion.section>
);

export default Hero;
