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
    <section className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-800 to-purple-800 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          My Projects
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          A collection of my works, crafted with precision and passion.
        </p>
      </div>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        {projects.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-300">
            No Projects Published Yet.
          </p>
        ) : (
          projects.map((project) => (
            <motion.div
              key={project._id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row items-center border dark:border-gray-700"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 h-64 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col justify-center md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                    >
                      Live Site
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-900 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
