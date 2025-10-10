import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './CurvedLoopText.css';

export default function CurvedLoopText({ 
  text = "WITH ✦ REACT ✦ BITS ✦ BE ✦ CREATIVE ✦ ",
  radius = 150,
  fontSize = 32,
  duration = 20,
  className = ""
}) {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const chars = textRef.current.querySelectorAll('.curved-char');
    const totalChars = chars.length;
    const angleStep = 360 / totalChars;

    chars.forEach((char, index) => {
      const angle = angleStep * index - 90; // Start from top
      char.style.transform = `rotate(${angle}deg) translateY(-${radius}px)`;
    });
  }, [text, radius]);

  return (
    <div className={`curved-loop-container ${className}`}>
      <motion.div 
        ref={textRef}
        className="curved-text"
        animate={{ rotate: 360 }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {text.split('').map((char, index) => (
          <span 
            key={index} 
            className="curved-char"
            style={{ fontSize: `${fontSize}px` }}
          >
            {char}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
