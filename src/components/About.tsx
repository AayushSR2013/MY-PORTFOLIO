import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Rocket } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 px-4 bg-gray-50 dark:bg-black scroll-mt-16"
    >
      {/* background gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-black dark:to-gray-900 -z-10" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

        <div className="space-y-6 text-gray-600 dark:text-gray-300">
          {[
            "I'm a passionate and adaptable Software Engineer with experience in full-stack development, backend systems, and modern web technologies.",
            "After completing my B.Tech in Computer Engineering, I joined TopNotch Technologies where I've contributed to building and optimizing large-scale services.",
            "Whether it's collaborating with teams, solving performance bottlenecks, or developing user-focused applications, I bring a strong commitment to writing clean, maintainable code and shipping high-quality products.",
            "I'm actively learning new tools and patterns, and I'm always ready to take on challenges across the development lifecycle.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {[
            {
              icon: <Code2 className="w-8 h-8 text-purple-600 mb-4" />,
              title: 'Full Stack Development',
              desc: 'Building end-to-end solutions with modern technologies',
            },
            {
              icon: <Brain className="w-8 h-8 text-blue-600 mb-4" />,
              title: 'Problem Solving',
              desc: 'Tackling complex challenges with systematic approaches',
            },
            {
              icon: <Rocket className="w-8 h-8 text-green-600 mb-4" />,
              title: 'Continuous Learning',
              desc: 'Always exploring new technologies and best practices',
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};