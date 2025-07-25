import { FaLinkedin, FaGithub } from "react-icons/fa";
import heroImage from '../../assets/hero.jfif'
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Profile Image */}
        <img
          src={heroImage}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Profile"
        />

        {/* Text Content */}
        <div>
          <h1 className="text-4xl font-bold">Hi, I'm Alim</h1>
          <p className="py-3 text-xl text-gray-600">A Frontend Developer & Learner</p>
          <p className="mb-4 max-w-md">
            I love building responsive, beautiful websites using React, Tailwind & Firebase.
          </p>
          <div className="flex gap-3">
            <a href="/contact" className="btn btn-primary">Hire Me</a>
            <a href="/cv.pdf" className="btn btn-outline btn-secondary">Download CV</a>
          </div>

          {/* Social icons */}
          <div className="mt-4 flex gap-4 text-2xl">
            <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank"><FaGithub /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
