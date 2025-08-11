import React from "react";
import { motion } from "framer-motion";

const EducationPage = () => {
  const educationData = [
    {
      id: 1,
      title: "High School",
      institution: "ABC High School",
      year: "2014 - 2016",
      description:
        "Completed Secondary School Certificate with a focus on Science group.",
    },
    {
      id: 2,
      title: "College",
      institution: "XYZ College",
      year: "2016 - 2018",
      description:
        "Higher Secondary Certificate in Science with outstanding performance.",
    },
    {
      id: 3,
      title: "University",
      institution: "University of Example",
      year: "2018 - 2022",
      description:
        "Bachelor’s degree in Computer Science & Engineering with strong academic achievements.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-12">
          My Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-left border border-indigo-100 dark:border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                {edu.title}
              </h3>
              <p className="text-gray-800 dark:text-gray-200 font-medium">
                {edu.institution}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {edu.year}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationPage;
