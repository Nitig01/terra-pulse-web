
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const AnimatedBackground = () => {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Geometric shapes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`geo-${i}`}
          className={`absolute ${isDark ? 'border-white/10' : 'border-black/10'} border rounded-full`}
          style={{
            width: Math.random() * 300 + 50,
            height: Math.random() * 300 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Flowing lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.path
            key={`line-${i}`}
            d={`M ${Math.random() * 100} ${Math.random() * 100} Q ${Math.random() * 200} ${Math.random() * 200} ${Math.random() * 300} ${Math.random() * 300}`}
            fill="none"
            stroke={isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.2)'}
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </svg>

      {/* Glowing particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            opacity: 0,
          }}
          animate={{
            y: -50,
            opacity: [0, 1, 0],
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
