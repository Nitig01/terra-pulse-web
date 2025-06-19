
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
    <section id="journey" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${destination.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <IconComponent className="text-blue-400 w-8 h-8" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {destination.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {destination.description}
                  </p>
                  <RippleButton className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                    Explore Now
                  </RippleButton>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
