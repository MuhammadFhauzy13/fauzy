import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const target = document.querySelector(href);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const handleDesktopClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
  };

  const handleMobileClick = (e, href) => {
    e.preventDefault();
    // Pre-calculate the position BEFORE closing the menu
    // (closing changes the DOM layout, making measurement unreliable)
    const target = document.querySelector(href);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY;
    setIsOpen(false);
    // Wait for menu close animation (300ms) then scroll to pre-calculated position
    setTimeout(() => {
      window.scrollTo({ top, behavior: 'smooth' });
    }, 350);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={clsx(
        'fixed w-full z-50 transition-colors duration-300',
        scrolled 
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              FauzyUmamit
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleDesktopClick(e, link.href)}
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-amber-400" />
              ) : (
                <Moon className="h-5 w-5 text-slate-600" />
              )}
            </button>
            <a
              href="#contact"
              onClick={(e) => handleDesktopClick(e, '#contact')}
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors shadow-lg shadow-blue-500/30"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-slate-600" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-xl border-t border-slate-100 dark:border-slate-800 overflow-hidden"
          >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 border-b border-slate-100 dark:border-slate-800"
                onClick={(e) => handleMobileClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 block w-full text-center px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-lg shadow-blue-500/30"
              onClick={(e) => handleMobileClick(e, '#contact')}
            >
              Let's Talk
            </a>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
