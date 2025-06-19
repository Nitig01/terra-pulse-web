
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ParallaxSection from '../components/ParallaxSection';
import StatsSection from '../components/StatsSection';
import ExploreSection from '../components/ExploreSection';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import ThemeProvider from '../components/ThemeProvider';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative overflow-x-hidden">
        <AnimatePresence>
          {isLoading && <Loader />}
        </AnimatePresence>
        
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <Hero />
            <ParallaxSection />
            <StatsSection />
            <ExploreSection />
            <Footer />
          </motion.div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Index;
