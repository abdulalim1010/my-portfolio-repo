import { FaUserAlt, FaCode, FaProjectDiagram, FaTrophy } from "react-icons/fa";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    title: "Happy Clients",
    icon: <FaUserAlt className="text-4xl text-blue-500" />,
    count: 120,
  },
  {
    title: "Projects Done",
    icon: <FaProjectDiagram className="text-4xl text-green-500" />,
    count: 45,
  },
  {
    title: "Skills Mastered",
    icon: <FaCode className="text-4xl text-purple-500" />,
    count: 12,
  },
  {
    title: "Awards",
    icon: <FaTrophy className="text-4xl text-yellow-500" />,
    count: 5,
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">My Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-green-500 dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">{stat.icon}</div>
            <h3 className="text-3xl font-bold text-primary">
              <CountUp end={stat.count} duration={2} />
              +
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{stat.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
