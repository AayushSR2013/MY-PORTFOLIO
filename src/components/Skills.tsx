import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Languages & Core',
    skills: ['JavaScript (ES6+)', 'C', 'C++', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Web Development',
    skills: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'Responsive Design'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Development Tools',
    skills: ['Git & GitHub', 'Postman', 'VS Code', 'Android Studio'],
  },
  {
    title: 'Practices & Methodologies',
    skills: ['OOP', 'DSA', 'MVC Architecture', 'Agile Development'],
  },
  {
    title: 'Learning & Exploring',
    skills: ['TypeScript', 'CI/CD', 'Docker', 'GraphQL', 'Salesforce Development'],
  },
];

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 px-4 bg-gray-50 dark:bg-black scroll-mt-16"
    >
      {/* background gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-black dark:to-gray-900 -z-10" />

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};