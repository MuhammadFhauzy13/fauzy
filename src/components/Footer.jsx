import { Code2, Mail } from 'lucide-react';
import { Github, Linkedin, Twitter } from './Icons';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-50 dark:bg-slate-950 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                FauzyUmamit
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-6 leading-relaxed">
              Crafting beautiful, modern, and high-performance web experiences. Open to freelance opportunities and full-time roles.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/MuhammadFhauzy13" className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-500 hover:text-blue-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all shadow-sm">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-500 hover:text-blue-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-500 hover:text-blue-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all shadow-sm">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:fauzyumamit@gmail.com" className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-500 hover:text-blue-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all shadow-sm">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects'].map((link) => (
                <li key={link}>
                  <a href={`#\${link.toLowerCase()}`} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-slate-600 dark:text-slate-400">
                Available for remote work<br />
                Worldwide
              </li>
              <li>
                <a href="mailto:fauzyumamit@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  fauzyumamit@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} M. Fauzy Nasir Umamit. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-slate-900 dark:hover:text-slate-50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-slate-50 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
