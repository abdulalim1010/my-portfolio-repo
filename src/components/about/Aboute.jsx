import React from "react";
import imagehero from "../../assets/hero.jfif";

const Aboute = () => {
  return (
    <section className="max-w-5xl mx-auto p-6 bg-blue-400 rounded-lg shadow-lg mt-10">
      <div className="flex flex-col items-center md:items-start gap-8">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={imagehero}
            alt="Md Abdul Alim"
            className="w-48 h-48 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-blue-300 mb-4">Md Abdul Alim</h1>
          <p className="text-gray-700 mb-4">
            I am a Full Stack Developer with strong expertise in{" "}
            <span className="font-semibold">HTML, CSS, JavaScript, React, Node.js</span> and
            passionate about building modern, responsive web applications.
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Education</h2>
          <p className="text-gray-700 mb-4">
            Begum Rokeya University, Rangpur — Department of Electrical & Electronics Engineering (EEE)
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Skills</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js & Frontend Development</li>
            <li>Node.js & Backend Development</li>
            <li>Full Stack Web Development</li>
          </ul>

          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Experience</h2>
          <p className="text-gray-700 mb-6">Development experience in full stack projects.</p>

          <button
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
            onClick={() => window.open("/resume.pdf", "_blank")} // নিজের resume link দিন
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Aboute;
