
import { motion } from 'framer-motion';
import { Camera, Mountain, Trees, Waves } from 'lucide-react';
import RippleButton from './RippleButton';

const ExploreSection = () => {
  const destinations = [
    {
      icon: Mountain,
      title: 'Mountain Peaks',
      description: 'Discover towering summits and breathtaking alpine landscapes',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
    },
    {
      icon: Waves,
      title: 'Ocean Depths',
      description: 'Explore the mysterious underwater world and marine life',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop'
    },
    {
      icon: Trees,
      title: 'Ancient Forests',
      description: 'Journey through pristine wilderness and diverse ecosystems',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop'
    },
    {
      icon: Camera,
      title: 'Hidden Wonders',
      description: 'Uncover secret locations and geological marvels',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
    }
  ];

  return (
    <section id="journey" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Enhanced Moving Background Objects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 200, -100, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '5%', left: '5%' }}
        />
        <motion.div
          className="absolute w-48 h-48 bg-green-500/5 rounded-full blur-2xl"
          animate={{
            x: [0, -150, 100, 0],
            y: [0, 80, -60, 0],
            scale: [1, 0.7, 1.3, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '40%', right: '10%' }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 150, -50, 0],
            y: [0, -80, 100, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '10%', left: '20%' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Start Your <span className="text-blue-400">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your adventure and begin exploring Earth's most incredible destinations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => {
            const IconComponent = destination.icon;
            return (
              <motion.div
                key={destination.title}
                className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div 
                  className="h-48 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${destination.image})` }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                    whileHover={{ opacity: 0.7 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <motion.div 
                    className="absolute bottom-4 left-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="text-blue-400 w-8 h-8 drop-shadow-lg" />
                  </motion.div>
                  
                  {/* Hover overlay with ripple effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0, borderRadius: '50%' }}
                    whileHover={{ 
                      scale: 2, 
                      borderRadius: '0%',
                      transition: { duration: 0.6, ease: "easeOut" }
                    }}
                  />
                </div>
                
                <motion.div 
                  className="p-6 relative"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {destination.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {destination.description}
                  </p>
                  <RippleButton className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                    Explore Now
                  </RippleButton>
                </motion.div>

                {/* Card glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 pointer-events-none"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
