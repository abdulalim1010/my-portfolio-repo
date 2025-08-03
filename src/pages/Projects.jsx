import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects") // This route returns published projects only.
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section className="py-12 bg-white dark:bg-gray-900 transition duration-300 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-12">
          My Projects
        </h2>

        {projects.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">No Projects Published Yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project._id}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden border dark:border-gray-700"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
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
