import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles } from 'lucide-react';

const exploringTech = [
  {
    title: 'TypeScript',
    description: 'For robust frontend development',
  },
  {
    title: 'CI/CD',
    description: 'With GitHub Actions',
  },
  {
    title: 'GraphQL',
    description: 'For flexible APIs',
  },
  {
    title: 'Docker',
    description: 'Deployment Workflows',
  },
  {
    title: 'Salesforce',
    description: 'Apex + LWC for CRM app development',
  },
];

export const Exploring = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Currently Exploring</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exploringTech.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md group hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-purple-600 group-hover:text-purple-500 transition-colors" />
                <h3 className="text-lg font-semibold">{tech.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};