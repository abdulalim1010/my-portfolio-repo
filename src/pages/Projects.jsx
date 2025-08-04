import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-24 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          My Projects
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          A collection of my latest and greatest works, crafted with precision and passion.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {projects.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">No Projects Published Yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <motion.div
                key={project._id}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border dark:border-gray-700"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <picture>
                  <source srcSet={project.image} type="image/avif" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                </picture>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                  >
                    Visit Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
