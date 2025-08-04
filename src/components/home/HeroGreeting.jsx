import React from "react";
import { motion } from "framer-motion";

const HeroGreeting = () => {
  return (
    <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-4 py-2 rounded-full shadow-md cursor-default">
      <span className="text-lg font-semibold">Hi</span>
      <motion.span
        className="text-2xl"
        animate={{ rotate: [0, 20, -10, 20, 0] }}
        transition={{
          repeat: Infinity,
          repeatDelay: 2,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        👋
      </motion.span>
    </div>
  );
};

export default HeroGreeting;
