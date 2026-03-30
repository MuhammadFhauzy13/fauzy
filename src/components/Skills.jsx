import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Vue', level: 90 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Laravel', level: 85 },
    { name: 'MySQL', level: 85 },
    { name: 'Docker', level: 80 },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl mb-6">
              My Expertise
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              I've spent years working with modern web technologies, constantly learning and adapting to the ever-evolving landscape. Here is a breakdown of my core technical proficiencies.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {['Vue', 'React', 'Laravel', 'MySQL', 'Docker', 'Tailwindcss'].map((t) => (
                <div key={t} className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 font-medium">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">{skill.name}</span>
                  <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-3 max-w-full overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `\${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
