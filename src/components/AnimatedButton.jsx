import { motion } from "framer-motion";

const AnimatedButton = () => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="btn btn-primary"
  >
    Hire Me
  </motion.button>
);
export default AnimatedButton