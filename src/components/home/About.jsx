import { motion } from "framer-motion";
import logoimage from '../../assets/193335434.jfif'

const About = () => {
  return (
    <section id="about" className="max-w-7xl mt-10 mx-auto py-20 px-6 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-lg shadow-xl text-white">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold mb-10 text-center tracking-wide drop-shadow-lg"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="flex flex-col md:flex-row items-center gap-12"
      >
        <motion.img
          src={logoimage}
          alt="Profile"
          className="w-64 rounded-3xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500"
          whileHover={{ scale: 1.1 }}
        />

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-lg leading-relaxed space-y-6 bg-black bg-opacity-20 rounded-xl p-8 backdrop-blur-md shadow-lg"
        >
          <p className="my_heading">
            I am a passionate frontend developer with 3+ years of experience building scalable and
            user-friendly web applications using React, Tailwind CSS, and Firebase.
          </p>
          <p className="my_heading">
            I enjoy working in dynamic teams and always eager to learn new technologies and improve my
            skills.
          </p>
          <p className="my_heading">
            When I am not coding, I love reading tech blogs and contributing to open source projects.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
