
import { motion, AnimatePresence } from 'framer-motion';
import { Users, MapPin, Camera, Compass } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

const ExploreSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useTheme();

  const explorers = [
    {
      id: 1,
      name: 'Alex Rivera',
      role: 'Mountain Explorer',
      location: 'Himalayas',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      achievements: '47 Peaks Conquered'
    },
    {
      id: 2,
      name: 'Maya Chen',
      role: 'Ocean Researcher',
      location: 'Pacific Ocean',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      achievements: '200+ Species Documented'
    },
    {
      id: 3,
      name: 'Jake Thompson',
      role: 'Forest Guide',
      location: 'Amazon',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      achievements: '15 Years Experience'
    },
    {
      id: 4,
      name: 'Sofia Martinez',
      role: 'Desert Navigator',
      location: 'Sahara',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      achievements: '32 Expeditions Led'
    }
  ];

  const handleCurtainClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="explore" className={`py-12 md:py-20 transition-all duration-500 ${isDark ? 'bg-gradient-to-b from-black to-gray-900' : 'bg-gradient-to-b from-white to-gray-100'} relative overflow-hidden`}>
      {/* Moving Background Objects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute w-20 h-20 md:w-40 md:h-40 ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-500/20'} rounded-full blur-2xl`}
          animate={{
            x: [0, 150, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '20%', left: '20%' }}
        />
        <motion.div
          className={`absolute w-16 h-16 md:w-32 md:h-32 ${isDark ? 'bg-cyan-500/10' : 'bg-cyan-500/20'} rounded-full blur-xl`}
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '30%', right: '25%' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-4xl lg:text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 md:mb-6`}>
            Connect with <span className="text-emerald-400">Explorers</span>
          </h2>
          <p className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-8`}>
            Meet passionate adventurers from around the world and discover their incredible journeys
          </p>
        </motion.div>

        {/* Curtain Effect Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Curtain Button */}
          <motion.div
            className={`relative ${isDark ? 'bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 border-emerald-500/30' : 'bg-gradient-to-r from-emerald-100 to-cyan-100 border-emerald-500/50'} border-2 rounded-2xl md:rounded-3xl p-8 md:p-16 cursor-pointer overflow-hidden backdrop-blur-sm`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCurtainClick}
          >
            {/* Curtain Layers */}
            <motion.div
              className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200'} z-10`}
              initial={{ scaleX: 1 }}
              animate={{ scaleX: isOpen ? 0 : 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ originX: 0.5 }}
            />
            
            <motion.div
              className={`absolute inset-0 ${isDark ? 'bg-gradient-to-l from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-l from-gray-200 via-gray-100 to-gray-200'} z-20`}
              initial={{ scaleX: 1 }}
              animate={{ scaleX: isOpen ? 0 : 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
              style={{ originX: 0.5 }}
            />

            {/* Curtain Preview Content */}
            <div className={`relative z-30 text-center ${isOpen ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="flex -space-x-2 md:-space-x-4">
                  {explorers.slice(0, 3).map((explorer) => (
                    <motion.img
                      key={explorer.id}
                      src={explorer.image}
                      alt={explorer.name}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-white shadow-lg"
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                    />
                  ))}
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-white ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-700'} flex items-center justify-center font-bold text-xs md:text-sm shadow-lg`}>
                    +{explorers.length - 3}
                  </div>
                </div>
              </div>
              <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2 md:mb-4`}>
                Touch to Reveal Our Explorer Community
              </h3>
              <div className="flex justify-center items-center space-x-2 md:space-x-4">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                <span className={`text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {explorers.length} Active Explorers
                </span>
              </div>
            </div>

            {/* Revealed Content */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="relative z-40"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {explorers.map((explorer, index) => (
                      <motion.div
                        key={explorer.id}
                        className={`${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-black/5 border-black/10 hover:bg-black/10'} border rounded-xl p-4 md:p-6 text-center hover:scale-105 transition-all duration-300`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                        whileHover={{ y: -5 }}
                      >
                        <img
                          src={explorer.image}
                          alt={explorer.name}
                          className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-3 md:mb-4 border-4 border-emerald-400/50"
                        />
                        <h4 className={`text-base md:text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-1 md:mb-2`}>
                          {explorer.name}
                        </h4>
                        <p className="text-emerald-400 text-sm md:text-base font-medium mb-2">
                          {explorer.role}
                        </p>
                        <div className="flex items-center justify-center space-x-1 mb-2">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                          <span className={`text-xs md:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {explorer.location}
                          </span>
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                          <Camera className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                          <span className={`text-xs md:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {explorer.achievements}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.button
                    className={`mt-6 md:mt-8 px-6 md:px-8 py-2 md:py-3 ${isDark ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-500 hover:bg-emerald-600'} text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm md:text-base`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(false);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                  >
                    <div className="flex items-center space-x-2">
                      <Compass className="w-4 h-4 md:w-5 md:h-5" />
                      <span>Close Curtain</span>
                    </div>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
