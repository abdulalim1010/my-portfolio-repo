import React, { useState } from "react";
import skills from "../../data/skills.json";
import { FaStar, FaStarHalfAlt, FaRegStar, FaHtml5, FaCss3Alt, FaJs, FaReact, FaFire } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const icons = {
  html: <FaHtml5 className="text-orange-500 text-5xl" />,
  css: <FaCss3Alt className="text-blue-500 text-5xl" />,
  js: <FaJs className="text-yellow-400 text-5xl" />,
  react: <FaReact className="text-cyan-400 text-5xl" />,
  tailwind: <SiTailwindcss className="text-teal-400 text-5xl" />,
  firebase: <FaFire className="text-yellow-500 text-5xl" />,
};

const generateStars = (level) => {
  const stars = [];
  const totalStars = 5;
  const full = Math.floor((level / 100) * 5);
  const half = (level / 100) * 5 - full >= 0.5;

  for (let i = 0; i < full; i++) stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
  if (half) stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
  while (stars.length < totalStars) stars.push(<FaRegStar key={`empty-${stars.length}`} className="text-gray-400" />);

  return stars;
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const filterSkills = skills.filter(skill => skill.category === activeCategory);

  console.log("Filtered Skills:", filterSkills);

  return (
    <section id="skills" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        {["Frontend", "Backend", "Tools"].map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeCategory === category
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filterSkills.map(({ name, level, icon }) => (
          <motion.div
            key={name}
            className="bg-[#1e293b] rounded-2xl shadow-xl p-6 text-center text-white hover:scale-105 hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{icons[icon]}</div>
            <h3 className="text-2xl font-semibold mb-2">{name}</h3>
            <div className="flex justify-center mb-3">{generateStars(level)}</div>
            <div className="w-full bg-white/10 rounded-full h-3 mb-2">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
                style={{ width: `${level}%` }}
              />
            </div>
            <p className="text-sm text-gray-300">{level}% Proficiency</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
