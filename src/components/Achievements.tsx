import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle2 } from 'lucide-react';

const achievements = [
  {
    title: 'MERN Stack Developer',
    organization: 'Learn and Build',
    icon: CheckCircle2,
  },
  {
    title: 'HTML, Java, Libra Certified',
    organization: 'IIT Bombay',
    icon: Award,
  },
  {
    title: 'Team Leadership',
    description: 'Led 15-member team for college events, boosting participation by 40%',
    icon: CheckCircle2,
  },
  {
    title: 'Open Source Contributor',
    description: 'Contributed to open-source repositories on GitHub',
    icon: CheckCircle2,
  },
];

export const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Certifications & Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start gap-4">
                  <Icon className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
                    {achievement.organization && (
                      <p className="text-purple-600 dark:text-purple-400 text-sm">
                        {achievement.organization}
                      </p>
                    )}
                    {achievement.description && (
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        {achievement.description}
                      </p>
                    )}
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