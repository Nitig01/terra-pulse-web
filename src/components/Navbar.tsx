
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Explore', href: '#explore' },
    { name: 'Stats', href: '#stats' },
    { name: 'Journey', href: '#journey' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? `${isDark ? 'bg-black/20' : 'bg-white/20'} backdrop-blur-md border-b ${isDark ? 'border-white/10' : 'border-black/10'}`
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'} transition-colors duration-300`}
            whileHover={{ scale: 1.05 }}
          >
            Earth<span className="text-blue-400">Explore</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`${isDark ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'} px-3 py-2 text-sm font-medium transition-colors duration-200`}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Enhanced Theme Toggle */}
            <motion.div
              className={`relative p-1 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'} backdrop-blur-sm transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                onClick={toggleTheme}
                className={`relative p-3 rounded-full ${isDark ? 'bg-blue-600 text-white' : 'bg-yellow-400 text-black'} transition-all duration-500 shadow-lg`}
                animate={{
                  rotate: isDark ? 0 : 180,
                  backgroundColor: isDark ? '#2563eb' : '#fbbf24'
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isDark ? 0 : 180 }}
                  transition={{ duration: 0.5 }}
                >
                  {isDark ? <Moon size={20} /> : <Sun size={20} />}
                </motion.div>
                
                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-full ${isDark ? 'bg-blue-400' : 'bg-yellow-300'} blur-md opacity-30`}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.button>
              
              {/* Theme label */}
              <motion.span
                className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs ${isDark ? 'text-white' : 'text-black'} font-medium whitespace-nowrap`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {isDark ? 'Dark Mode' : 'Light Mode'}
              </motion.span>
            </motion.div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${isDark ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'} p-2 transition-colors duration-200`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden ${isDark ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-md ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`block ${isDark ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'} px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
