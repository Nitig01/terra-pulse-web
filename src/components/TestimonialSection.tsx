
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { isDark } = useTheme();

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Adventure Photographer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      quote: 'EarthExplore opened my eyes to the incredible beauty of our planet. The immersive experiences are absolutely breathtaking and inspiring.',
      rating: 5
    },
    {
      id: 2,
      name: 'Marcus Chen',
      role: 'Environmental Scientist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      quote: 'The detailed exploration of ecosystems through this platform has enhanced my understanding of nature in ways I never imagined possible.',
      rating: 5
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      role: 'Travel Blogger',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      quote: 'Every journey feels real and magical. The attention to detail in capturing Earth\'s wonders is simply extraordinary.',
      rating: 5
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Nature Enthusiast',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      quote: 'EarthExplore has revolutionized how I connect with nature. It\'s like having a personal guide to the most beautiful places on Earth.',
      rating: 5
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 md:w-5 md:h-5 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : `${isDark ? 'text-gray-600' : 'text-gray-300'}`
        }`}
      />
    ));
  };

  return (
    <section className={`py-12 md:py-20 transition-all duration-500 ${isDark ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-gray-100 to-white'} relative overflow-hidden`}>
      {/* Moving Background Objects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute w-16 h-16 md:w-32 md:h-32 ${isDark ? 'bg-blue-500/10' : 'bg-blue-500/20'} rounded-full blur-xl`}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className={`absolute w-12 h-12 md:w-24 md:h-24 ${isDark ? 'bg-green-500/10' : 'bg-green-500/20'} rounded-full blur-lg`}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '60%', right: '15%' }}
        />
        <motion.div
          className={`absolute w-20 h-20 md:w-40 md:h-40 ${isDark ? 'bg-purple-500/10' : 'bg-purple-500/20'} rounded-full blur-2xl`}
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '20%', left: '5%' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-4xl lg:text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 md:mb-6`}>
            What Our <span className="text-blue-400">Explorers</span> Say
          </h2>
          <p className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Join thousands of adventurers who have discovered the magic of Earth through our platform
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl md:rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `${-currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2 md:px-4">
                  <motion.div
                    className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} backdrop-blur-sm border rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-center transition-all duration-300 hover:scale-105`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-4 md:mb-6 border-4 border-blue-400/50"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="flex justify-center mb-3 md:mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <blockquote className={`text-base md:text-lg lg:text-xl ${isDark ? 'text-gray-200' : 'text-gray-700'} mb-4 md:mb-6 italic leading-relaxed`}>
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div>
                      <h4 className={`text-lg md:text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-400 font-medium text-sm md:text-base">
                        {testimonial.role}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'} backdrop-blur-sm p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110`}
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'} backdrop-blur-sm p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110`}
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center mt-6 md:mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentIndex
                  ? 'bg-blue-400 w-4 md:w-8'
                  : `${isDark ? 'bg-white/30 hover:bg-white/50' : 'bg-black/30 hover:bg-black/50'}`
              }`}
            />
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="flex justify-center mt-4 md:mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`text-xs md:text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
          >
            {isAutoPlaying ? 'Auto-playing' : 'Paused'} • Click to {isAutoPlaying ? 'pause' : 'resume'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
