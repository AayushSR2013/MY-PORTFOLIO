import { motion } from 'framer-motion';
import { Code2, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <p className="flex items-center justify-center gap-2 text-lg font-semibold">
            Crafted by Aayush Singh Rathore
            <Heart className="w-5 h-5 text-red-500" />
          </p>
          
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 All Rights Reserved
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Code2 className="w-4 h-4" />
            <span>React + Tailwind Powered</span>
          </div>
          
          <p className="text-sm text-purple-600 dark:text-purple-400">
            Versatile Developer • Detail-Oriented Coder • Always Learning
          </p>
        </motion.div>
      </div>
    </footer>
  );
};