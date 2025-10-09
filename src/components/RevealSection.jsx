import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function RevealSection({ children, delay = 0 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.15 
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
        duration: 0.8, 
        delay, 
        ease: [0.4, 0, 0.2, 1] 
      }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}
