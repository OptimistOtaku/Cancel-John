import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollBackground() {
  const bgRef = useRef(null);

  useEffect(() => {
    if (!bgRef.current) return;

    gsap.to(bgRef.current, {
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
      backgroundColor: 'rgb(59, 130, 246)', // Light blue
      duration: 1,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Box
      ref={bgRef}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundColor: 'rgb(10, 14, 26)', // Dark blue
        transition: 'background-color 0.3s ease',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 20% 30%, rgba(107, 127, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(124, 92, 255, 0.15) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
}
