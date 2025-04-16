import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div className="flex items-start gap-6">
            <div className="hidden md:block">
              <GraduationCap className="w-12 h-12 text-purple-600" />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Bachelor of Technology
              </h3>
              <p className="text-xl text-purple-600 dark:text-purple-400 mb-4">
                Computer Engineering
              </p>
              <p className="text-lg mb-2">
                Anand International College of Engineering, Jaipur
              </p>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Calendar className="w-5 h-5" />
                <span>Aug 2020 – Jul 2024</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};