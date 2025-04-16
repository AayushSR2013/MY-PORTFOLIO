import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';

export const ScrollDownButton = () => {
  return (
    <Link to="about" smooth={true} duration={500} offset={-64}>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="cursor-pointer"
      >
        <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-300" />
      </motion.div>
    </Link>
  );
};