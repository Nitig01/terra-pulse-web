
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('00');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 3;
        const clampedProgress = Math.min(newProgress, 100);
        setLoadingText(Math.floor(clampedProgress).toString().padStart(2, '0'));
        return clampedProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative w-80 h-4 bg-gray-800 rounded-full overflow-hidden">
        {/* Loading bar */}
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
        
        {/* Glowing effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
          animate={{ x: [-100, 400] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Digital clock style loading number */}
      <div className="absolute bottom-8 left-8">
        <div className="font-mono text-4xl text-green-400 bg-black p-4 rounded border border-green-400/30">
          <span className="block text-xs text-green-400/70 mb-1">LOADING</span>
          <span className="text-green-400 font-bold tracking-wider">{loadingText}</span>
        </div>
      </div>

      {/* Earth exploration text */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          EXPLORING
        </h1>
        <h2 className="text-3xl md:text-5xl font-light text-blue-400">
          EARTH
        </h2>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
