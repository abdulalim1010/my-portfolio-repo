import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

const ManageProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    github: "",
    live: "",
    image: "",
    id: null,
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("http://localhost:3000/projects");
      const data = await res.json();
      setProjects(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch projects", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = formData.id ? "PUT" : "POST";
    const url = formData.id
      ? `http://localhost:3000/projects/${formData.id}`
      : "http://localhost:3000/projects";

    const projectData = formData.id
      ? formData
      : { ...formData, published: false }; // New project default publish false

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projectData),
    });

    if (res.ok) {
      toast.success(formData.id ? "Project Updated!" : "Project Added!");
      setFormData({
        title: "",
        description: "",
        github: "",
        live: "",
        image: "",
        id: null,
      });
      fetchProjects();
    }
  };

  const handleEdit = (project) => {
    setFormData({ ...project, id: project._id });
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete?")) {
      const res = await fetch(`http://localhost:3000/projects/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Project Deleted!");
        fetchProjects();
      }
    }
  };

  const handlePublish = async (id) => {
    const res = await fetch(`http://localhost:3000/projects/publish/${id}`, {
      method: "PUT",
    });
    if (res.ok) {
      toast.success("Project Published!");
      fetchProjects();
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Manage Projects</h2>

      {/* Project Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
      >
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleInputChange}
          className="input input-bordered"
          required
        />
        <input
          type="text"
          name="github"
          placeholder="GitHub Link"
          value={formData.github}
          onChange={handleInputChange}
          className="input input-bordered"
        />
        <input
          type="text"
          name="live"
          placeholder="Live Link"
          value={formData.live}
          onChange={handleInputChange}
          className="input input-bordered"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleInputChange}
          className="input input-bordered"
        />
        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleInputChange}
          className="textarea textarea-bordered md:col-span-2"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary md:col-span-2">
          {formData.id ? "Update Project" : "Add Project"}
        </button>
      </form>

      {/* Project List */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="border rounded-lg p-4 shadow-md relative"
            >
              {!project.published && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Unpublished
                </span>
              )}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-2">{project.description}</p>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="link link-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  className="link link-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => handleEdit(project)}
                  className="btn btn-sm btn-warning"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="btn btn-sm btn-error"
                >
                  <FaTrash />
                </button>
                {!project.published && (
                  <button
                    onClick={() => handlePublish(project._id)}
                    className="btn btn-sm btn-success"
                  >
                    Publish
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageProjects;
