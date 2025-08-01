import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const projects = [
  {
    title: "Parcel Delivery App",
    description: "A full-stack web app for managing and tracking parcel deliveries.",
    technologies: ["React", "Firebase", "MongoDB", "Node.js"],
    link: "https://yourprojectlink.com",
  },
  {
    title: "News Portal Website",
    description: "A dynamic news portal with admin approval, subscriptions, and user article features.",
    technologies: ["React", "Express", "MongoDB"],
    link: "https://yournewsproject.com",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="min-h-screen p-6 bg-gradient-to-b from-purple-100 to-indigo-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-indigo-700">My Projects 🚀</h2>
        <p className="mb-10 text-gray-700">Some recent work I've done</p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                View Project 🔗
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_kdx6cani.json"
            style={{ height: "200px", width: "200px", margin: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
