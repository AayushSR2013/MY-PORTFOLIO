import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Linkedin, Github, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-purple-600" />
              <a
                href="mailto:aayushsingh2002rathore@gmail.com"
                className="text-lg hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                aayushsingh2002rathore@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-purple-600" />
              <span className="text-lg">Jaipur, India</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Linkedin className="w-6 h-6 text-purple-600" />
              <a
                href="https://linkedin.com/in/aayush-singh-rathore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                linkedin.com/in/aayush-singh-rathore
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <Github className="w-6 h-6 text-purple-600" />
              <a
                href="https://github.com/AayushSR2013"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                github.com/AayushSR2013
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-semibold">Let's Connect!</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              I'm open to software engineering roles, internships, freelance gigs, or tech collaborations.
              Feel free to reach out!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};