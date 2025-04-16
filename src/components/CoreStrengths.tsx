import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';

const strengths = [
  'Full Stack Application Development',
  'Clean, Maintainable Code',
  'API Integration & Data Handling',
  'Systematic Problem Solving',
  'Collaboration & Communication',
  'Adaptability in Fast-Changing Tech Environments',
];

export const CoreStrengths = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Core Strengths</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span className="text-lg">{strength}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};