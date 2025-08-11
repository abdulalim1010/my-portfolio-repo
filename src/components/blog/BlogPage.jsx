import React from "react";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "How I Built My First Full-Stack Project",
      date: "August 10, 2025",
      image: "https://via.placeholder.com/600x400",
      excerpt:
        "I share the journey, challenges, and lessons learned while building my first full-stack app...",
    },
    {
      id: 2,
      title: "Why TailwindCSS Changed My Development Workflow",
      date: "July 28, 2025",
      image: "https://via.placeholder.com/600x400",
      excerpt:
        "TailwindCSS has been a game-changer for my styling process — here’s why...",
    },
    {
      id: 3,
      title: "Firebase Authentication Made Easy",
      date: "July 15, 2025",
      image: "https://via.placeholder.com/600x400",
      excerpt:
        "Authentication doesn’t have to be scary. I explain how I implemented Google & Email login in minutes...",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <h1 className="text-3xl font-bold text-center mb-10">📚 My Blog</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-500 text-sm mb-3">{blog.date}</p>
              <p className="text-gray-700 mb-4">{blog.excerpt}</p>
              <button className="text-blue-500 hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
