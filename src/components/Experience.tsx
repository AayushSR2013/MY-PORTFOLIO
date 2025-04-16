import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'TopNotch Technologies',
    location: 'Jaipur',
    duration: 'Sept 2024 – Present',
    description: [
      'Contributed to the development of scalable web services and internal tools used by thousands of users',
      'Built and optimized APIs and backend logic to reduce latency and improve system stability',
      'Partnered with frontend teams to improve user experience and data flow',
      'Participated in sprint planning, reviews, and system architecture improvements',
    ],
  },
  {
    title: 'Salesforce Trainee',
    company: 'Learn and Build',
    location: '',
    duration: 'Dec 2023 – Jun 2024',
    description: [
      'Learned the foundations of Salesforce Admin (Automation, Reporting, Roles & Permissions)',
      'Gained hands-on exposure to Apex and Lightning Web Components',
    ],
  },
  {
    title: 'Web Developer Intern',
    company: 'Arootle Pvt. Ltd.',
    location: '',
    duration: 'Jul 2023 – Dec 2023',
    description: [
      'Designed and developed UI components using React, HTML, and CSS',
      'Improved frontend responsiveness and cross-browser compatibility',
      'Collaborated in Agile sprints to deliver high-quality features on schedule',
    ],
  },
];

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-purple-500"
            >
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-0" />
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <h4 className="text-lg text-purple-600 dark:text-purple-400 mb-4">{exp.company}</h4>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {exp.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};