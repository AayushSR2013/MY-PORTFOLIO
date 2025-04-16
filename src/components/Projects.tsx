import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Database, Layout } from 'lucide-react';

const projects = [
  {
    title: 'Blog Platform',
    subtitle: 'MERN + Microservices',
    description: [
      'Developed a Medium-style platform with user auth, content creation, and search capabilities',
      'Designed a modular architecture with React frontend and Node.js backend',
      'Implemented MongoDB + MySQL for data handling and scalable storage',
    ],
    githubUrl: 'https://github.com/AayushSR2013',
    tech: ['React', 'Node.js', 'MongoDB', 'MySQL', 'Microservices'],
    icon: Database,
  },
  {
    title: 'E-Commerce Website',
    subtitle: 'React + JS',
    description: [
      'Built a complete e-commerce interface with shopping cart, filters, and wishlist functionality',
      'Focused on smooth UX, dynamic data handling, and fully responsive layout',
    ],
    tech: ['React', 'JavaScript', 'Redux', 'Tailwind CSS'],
    icon: Layout,
  },
];

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        
        <div className="space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <Icon className="w-8 h-8 text-purple-600" />
                      <div>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-purple-600 dark:text-purple-400">{project.subtitle}</p>
                      </div>
                    </div>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                  
                  <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                    {project.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ExternalLink className="w-5 h-5 mt-1 flex-shrink-0 text-purple-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};