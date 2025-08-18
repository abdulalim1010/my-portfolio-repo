import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router";
import logoimage from "../../assets/193335434.jfif"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div className="space-y-3">
          <div className="flex">
             <h2 className="text-2xl font-bold text-white">Md Abdul Alim</h2>
          <img className="w-15 h-15 rounded-t-full p-3" src={logoimage} alt="" />
         </div>
          <p className="text-gray-400 max-w-xs">
            Full Stack Developer passionate about creating seamless and beautiful web experiences.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/abdulalim1010"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-alim-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
           <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary text-xl font-bold" : "text-xl font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary text-xl font-bold" : "text-xl font-semibold"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-primary text-xl font-bold" : "text-xl font-semibold"
          }
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-primary text-xl font-bold" : "text-xl font-semibold"
          }
        >
          Contact
        </NavLink>
      </li>

     
        <li>
          <NavLink
            to="dashboard"
            className={({ isActive }) =>
              isActive ? "text-primary text-xl font-bold" : "text-xl font-semibold"
            }
          >
            My Dashboard
          </NavLink>
            </li>
         
     
    </>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
          <p>Email: <a href="mailto:alim@example.com" className="hover:text-white transition">abdulalim243457@gmail.com</a></p>
          <p>Phone: <a href="tel:+01739243457" className="hover:text-white transition">01739243457</a></p>
          <p className="mt-4 text-gray-400 text-sm">Feel free to reach out for collaborations or freelance work!</p>
        </div>

        {/* Newsletter (optional) */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Newsletter</h3>
          <p className="text-gray-400 mb-4">Subscribe to get the latest updates.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <hr className="my-10 border-gray-700" />

      <p className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Md Abdul Alim. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
