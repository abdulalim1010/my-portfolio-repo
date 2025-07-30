import React from "react";
import { motion } from "framer-motion";
import imagehero from "../../assets/hero.jfif";

const ContactHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-[90vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-400 rounded-2xl shadow-2xl text-white p-10"
    >
      {/* 🔵 Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-5xl font-extrabold mb-8 underline decoration-white decoration-4"
      >
        Contact & Profile Info
      </motion.h2>

      {/* 🧑‍💻 Profile Image */}
      <motion.img
        src={imagehero}
        alt="Md Abdul Alim"
        className="w-36 h-36 rounded-full border-4 border-white shadow-xl mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />

      {/* 📝 Name & Title */}
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Md Abdul Alim
      </motion.h1>
      <p className="mt-2 text-lg font-semibold">
        Frontend Developer & Lifelong Learner
      </p>

      {/* 🧠 Bio */}
      <p className="mt-4 max-w-xl text-sm md:text-base">
        Passionate about crafting beautiful and responsive web applications using
        React, Tailwind CSS, and Firebase. Always eager to learn and grow in the
        world of tech.
      </p>

      {/* 📇 Contact Info */}
      <motion.div
        className="mt-6 space-y-2 text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <p><strong>📧 Gmail:</strong> abdulalim243457@gmail.com</p>
        <p><strong>📱 WhatsApp:</strong> 01739243457</p>
        <p><strong>📞 Phone:</strong>  01739243457</p>
        <p><strong>🎓 Education:</strong> B.Sc Engg,in  Begum Rokeya University,Rangpur</p>
        <p><strong>🌍 Location:</strong> Dhaka, Bangladesh</p>
      </motion.div>

      {/* 📎 Resume Button */}
      <motion.a
        href="/resume.pdf"
        download
        className="mt-6 inline-block bg-white text-indigo-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-indigo-100 transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        📄 Download Resume
      </motion.a>
    </motion.div>
  );
};

export default ContactHeader;
