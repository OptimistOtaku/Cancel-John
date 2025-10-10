import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function RevealSection({ children, delay = 0 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1,  // Trigger when 10% visible
    rootMargin: '0px',  // No early trigger - wait for actual visibility
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ 
        duration: 0.6,  // Balanced: Not too fast, not too slow
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],  // Smooth easing
      }}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },  // More visible movement
        visible: { opacity: 1, y: 0, scale: 1 }
      }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}
