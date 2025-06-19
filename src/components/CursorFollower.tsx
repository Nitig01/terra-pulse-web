
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {/* Main cursor follower */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference opacity-30"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
          scale: isMoving ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-sm" />
      </motion.div>

      {/* Secondary follower with delay */}
      <motion.div
        className="fixed pointer-events-none z-40 mix-blend-screen opacity-20"
        animate={{
          x: mousePosition.x - 15,
          y: mousePosition.y - 15,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 0.1,
        }}
      >
        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md" />
      </motion.div>

      {/* Floating animated elements */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs that respond to cursor */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl opacity-10"
            style={{
              background: `radial-gradient(circle, ${
                ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'][i]
              }40, transparent)`,
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
            }}
            animate={{
              x: mousePosition.x * (0.02 + i * 0.01) - 100,
              y: mousePosition.y * (0.015 + i * 0.008) - 100,
              rotate: [0, 360],
            }}
            transition={{
              x: { type: "spring", stiffness: 50, damping: 20 },
              y: { type: "spring", stiffness: 50, damping: 20 },
              rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default CursorFollower;
