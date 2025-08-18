import React from "react";

const Resume = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          My Resume
        </h2>

        {/* Resume Preview */}
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="w-full h-[600px] border rounded-lg"
        ></iframe>

        {/* Download Button */}
        <div className="text-center mt-6">
          <a
            href="/resume.pdf"
            download
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
