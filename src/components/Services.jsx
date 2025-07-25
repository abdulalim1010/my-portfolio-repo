import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaServer } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description: "Building responsive and scalable websites using React, Next.js, and Tailwind CSS.",
    icon: <FaLaptopCode className="text-5xl text-blue-600 mb-4" />,
  },
  {
    title: "Mobile Development",
    description: "Creating modern and performant mobile apps with React Native and Firebase.",
    icon: <FaMobileAlt className="text-5xl text-green-600 mb-4" />,
  },
  {
    title: "UI/UX Design",
    description: "Crafting user-friendly interfaces with clean design and smooth experience.",
    icon: <FaPaintBrush className="text-5xl text-purple-600 mb-4" />,
  },
  {
    title: "Backend Development",
    description: "Handling server-side logic and databases with Node.js, Express, and MongoDB.",
    icon: <FaServer className="text-5xl text-yellow-500 mb-4" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        My Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center">
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
