import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Code, Globe, Server, Smartphone } from 'lucide-react';

const AnimatedSection = ({ children, delay = 0, initial = { opacity: 0, y: 20 } }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0, x: 0 });
        } else {
          controls.start(initial);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls, initial]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const cards = [
    {
      title: 'Frontend Development',
      description: 'Building responsive web interfaces using React, Vue, and Tailwind CSS.',
      icon: Globe,
      color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
    },
    {
      title: 'Backend Systems',
      description: 'Building RESTful APIs and web applications using Laravel and MySQL.',
      icon: Server,
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    },
    {
      title: 'Mobile Apps',
      description: 'Building cross-platform mobile applications using Flutter.',
      icon: Smartphone,
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    },
    {
      title: 'Clean Code & Docker',
      description: 'Writing maintainable code with modular structure, basic testing, and containerizing apps using Docker.',
      icon: Code,
      color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection initial={{ opacity: 0, y: 20 }}>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Web developer focused on building responsive and maintainable applications, bridging design and functionality
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <AnimatedSection key={index} delay={index * 0.1} initial={{ opacity: 0, y: 20 }}>
              <div className="relative p-8 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${card.color}`}>
                  <card.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">{card.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
