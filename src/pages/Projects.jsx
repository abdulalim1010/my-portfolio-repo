import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Parcel Delivery Website",
    description: "Full-stack app with authentication, tracking, and Stripe integration.",
    image: "/projects/parcel.jpg",
    link: "https://your-site.com/parcel",
  },
  {
    id: 2,
    title: "News Portal",
    description: "Dynamic news website with admin dashboard, filtering, and premium content.",
    image: "/projects/news.jpg",
    link: "https://your-site.com/news",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900 transition duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
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
                  href={project.link}
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
      </div>
    </section>
  );
};

export default Projects;
