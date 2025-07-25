import { motion } from "framer-motion";
import heroImage from '../../assets/hero.jfif';

const Hero = () => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-primary text-white px-4"
  >
    <div className="max-w-3xl text-center md:text-left md:mr-10">
      <h1 className="text-6xl font-bold mb-4">Hi, I'm Alim</h1>
      <p className="text-xl mb-8">
        Frontend Developer building responsive, beautiful websites with React & Tailwind.
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
    <img
      src={heroImage}
      alt="Alim Profile"
      className="w-72 rounded-lg shadow-lg mt-10 md:mt-0"
    />
  </motion.section>
);

export default Hero;
