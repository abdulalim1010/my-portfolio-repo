import React from "react";
import { motion } from "framer-motion";
import imagehero from '../../assets/hero.jfif'

const ContactHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center text-center mb-10 p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-xl text-white max-w-3xl mx-auto"
    >
      <img
        src={imagehero}
        alt="Profile"
        className="w-32 h-32 rounded-full shadow-lg mb-6 border-4 border-white"
      />
      <h1 className="text-4xl font-bold">Md Abdul Alim</h1>
      <p className="mt-2 text-lg font-semibold">Frontend Developer & Learner</p>
      <p className="mt-4 max-w-xl">
        Passionate about building beautiful and responsive web apps using React,
        Tailwind CSS, and Firebase.
      </p>
    </motion.div>
  );
};
export default ContactHeader