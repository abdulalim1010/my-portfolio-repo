import React, { useState } from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "Why I Love Full-Stack Development",
      date: "August 2025",
      excerpt: "A journey through building both frontend and backend...",
      content:
        "Full-stack development allows me to see a project come to life from start to finish...",
    },
    {
      id: 2,
      title: "My Top 5 React Tips",
      date: "July 2025",
      excerpt: "These tips have helped me write cleaner, faster React code...",
      content:
        "When working with React, I focus on reusable components, hooks, and performance optimization...",
    },
    {
      id: 3,
      title: "Deploying Projects with Ease",
      date: "June 2025",
      excerpt: "How I quickly deploy my apps using Vercel, Netlify, and Firebase Hosting...",
      content:
        "Deployment used to be a nightmare, but now with tools like Vercel and Firebase Hosting...",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Blog
      </motion.h1>

      <div className="grid gap-6 md:grid-cols-2">
        {blogs.map((post) => (
          <motion.div
            key={post.id}
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-500 text-sm">{post.date}</p>
            <p className="mt-2 text-gray-700">{post.excerpt}</p>
            <button
              onClick={() => setSelectedPost(post)}
              className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
            >
              Read More →
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <motion.div
            className="bg-white p-6 rounded-lg max-w-lg w-full"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold mb-2">{selectedPost.title}</h2>
            <p className="text-gray-500 text-sm">{selectedPost.date}</p>
            <p className="mt-4 text-gray-700">{selectedPost.content}</p>
            <button
              onClick={() => setSelectedPost(null)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Blog;
