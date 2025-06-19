
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

interface CountUpAnimationProps {
  end: number;
  duration?: number;
  startDelay?: number;
}

const CountUpAnimation = ({ end, duration = 2000, startDelay = 0 }: CountUpAnimationProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeOutProgress * end));

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      }
    };

    const timeout = setTimeout(() => {
      updateCount();
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [end, duration, startDelay, hasStarted]);

  return (
    <motion.span
      className={`text-2xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} block`}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onViewportEnter={() => setHasStarted(true)}
    >
      {count.toLocaleString()}
    </motion.span>
  );
};

export default CountUpAnimation;
