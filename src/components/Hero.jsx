import { ArrowRight, Download } from 'lucide-react';
import { Github, Linkedin, Twitter } from './Icons';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background blobs for visual flair */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-200/50 dark:border-blue-800/50 bg-blue-50/50 dark:bg-blue-900/20 backdrop-blur-sm shadow-sm md:text-sm text-xs font-medium text-blue-700 dark:text-blue-300">
            <span className="flex h-2 w-2 relative mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for new projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-tight">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">M. Fauzy Nasir Umamit</span>
          </h1>
          
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-400 mx-auto leading-relaxed">
            I'm a full-stack developer passionate about creating intuitive, dynamic applications with Vue, React, Laravel, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a href="#projects" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
              View My Work <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#cv" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-600 text-slate-900 dark:text-slate-100 font-medium transition-all flex items-center justify-center gap-2 hover:-translate-y-1 shadow-sm">
              <Download className="w-4 h-4" /> Download Resumé
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12">
            {[
              { icon: Github, href: 'https://github.com/MuhammadFhauzy13' },
              { icon: Linkedin, href: '#' },
              { icon: Twitter, href: '#' }
            ].map((social, index) => (
              <a key={index} href={social.href} className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
