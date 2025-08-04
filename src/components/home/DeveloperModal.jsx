import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const DeveloperModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end z-50" // items-end for bottom placement
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-t-2xl shadow-xl w-full max-w-xl p-6 relative"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 text-2xl"
            >
              ✖
            </button>
            <h2 className="text-3xl font-bold text-center mb-6 text-primary">Full Stack Developer</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-secondary">Frontend</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  React.js, TailwindCSS, DaisyUI, Framer Motion, Next.js, Redux, Chart Libraries.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary">Backend</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Node.js, Express.js, MongoDB, Firebase, REST APIs, JWT Auth, Stripe Integration.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary">Tools & DevOps</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Git, GitHub, Postman, Vercel, Netlify, MongoDB Atlas, Nginx (Basics).
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeveloperModal;
