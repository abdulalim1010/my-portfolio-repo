import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="projects" className="max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map(({ _id, title, description, github, live, image }) => (
          <div key={_id} className="border rounded-lg shadow-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="mb-4">{description}</p>
              <div className="flex gap-4">
                <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  GitHub
                </a>
                <a href={live} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
