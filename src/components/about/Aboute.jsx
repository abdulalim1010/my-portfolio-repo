import React from "react";
import imagehero from "../../assets/193335434.jfif";
import { Player } from "@lottiefiles/react-lottie-player";

const Aboute = () => {
  return (
    <section className="max-w-6xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-10">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Text Content */}
        <div className="flex-1 text-gray-800">
          <div className="flex ">
            <h1 className="text-4xl font-bold text-indigo-700 mb-4">Md Abdul Alim</h1>
            <img className="w-30 h-20 rounded-full" src={imagehero} alt="" />
         </div>
          <p className="mb-4">
            I am a Full Stack Developer with strong expertise in{" "}
            <span className="font-semibold text-purple-700">
              HTML, CSS, JavaScript, React, Node.js
            </span>{" "}
            and passionate about building modern, responsive web applications.
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Education</h2>
          <p className="mb-4">
            Begum Rokeya University, Rangpur — Department of Electrical & Electronics Engineering (EEE)
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Skills</h2>
          <ul className="list-disc list-inside mb-4">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js & Frontend Development</li>
            <li>Node.js & Backend Development</li>
            <li>Full Stack Web Development</li>
          </ul>

          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Experience</h2>
          <p className="mb-6">Development experience in full stack projects.</p>

          <button
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            Download Resume
          </button>
        </div>

        {/* Animation */}
        <div className="w-full md:w-1/2">
          <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_kyu7xb1v.json"
            style={{ height: "300px", width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Aboute;
