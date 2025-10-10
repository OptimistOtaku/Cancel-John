import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import gsap from 'gsap';

export default function RiskMeter({ riskScore = 67 }) {
  const circleRef = useRef(null);
  const glowRef = useRef(null);
  const [displayScore, setDisplayScore] = useState(0);

  const getColor = (score) => {
    if (score < 40) return '#10B981';
    if (score < 70) return '#F59E0B';
    return '#DC2626';
  };

  const getLabel = (score) => {
    if (score < 40) return 'SAFE';
    if (score < 70) return 'SUSPICIOUS';
    return 'HIGH RISK';
  };

  const color = getColor(riskScore);
  const label = getLabel(riskScore);
  const circumference = 2 * Math.PI * 85;
  const targetOffset = circumference - (riskScore / 100) * circumference;

  useEffect(() => {
    // Animate counter with GSAP
    const counterObj = { value: 0 };
    gsap.to(counterObj, {
      value: riskScore,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        setDisplayScore(Math.floor(counterObj.value));
      }
    });

    // Animate circle with GSAP
    if (circleRef.current) {
      gsap.fromTo(
        circleRef.current,
        { strokeDashoffset: circumference },
        {
          strokeDashoffset: targetOffset,
          duration: 2.5,
          ease: 'power2.out',
        }
      );
    }

    // Animate glow with GSAP
    if (glowRef.current) {
      gsap.fromTo(
        glowRef.current,
        { opacity: 0, scale: 0.5 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 2,
          ease: 'power3.out'
        }
      );

      // Continuous pulsing
      gsap.to(glowRef.current, {
        scale: 1.05,
        opacity: 0.9,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2,
      });
    }
  }, [riskScore, circumference, targetOffset]);

  return (
    <Card 
      sx={{ 
        height: '100%',
        minHeight: 400,
        background: 'rgba(15, 25, 45, 0.6)',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        border: '1px solid rgba(107, 127, 255, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
        borderRadius: '24px',
        overflow: 'visible !important',
      }}
    >
      <CardContent 
        sx={{ 
          p: 3, 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          overflow: 'visible !important',
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ fontWeight: 800, mb: 2, fontSize: '1.1rem', color: '#FFFFFF' }}
        >
          Current Risk Level
        </Typography>
        
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flex: 1,
            overflow: 'visible !important',
            position: 'relative',
          }}
        >
          <Box 
            sx={{ 
              position: 'relative',
              width: 220,
              height: 220,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Glow Effect */}
            <Box
              ref={glowRef}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${color}50 0%, transparent 70%)`,
                filter: 'blur(30px)',
                zIndex: 0,
              }}
            />

            {/* SVG Container */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 1,
                width: 180,
                height: 180,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <svg 
                width="180" 
                height="180" 
                viewBox="0 0 180 180"
                style={{ overflow: 'visible' }}
              >
                {/* Background Circle */}
                <circle
                  cx="90"
                  cy="90"
                  r="85"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="12"
                />
                
                {/* Animated Progress Circle */}
                <circle
                  ref={circleRef}
                  cx="90"
                  cy="90"
                  r="85"
                  fill="none"
                  stroke={color}
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  style={{ 
                    transform: 'rotate(-90deg)',
                    transformOrigin: '50% 50%',
                    filter: `drop-shadow(0 0 8px ${color})`,
                  }}
                />
              </svg>
            </Box>
            
            {/* Center Text */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                zIndex: 2,
              }}
            >
              <Typography 
                sx={{ 
                  color,
                  fontWeight: 900,
                  fontSize: '3rem',
                  lineHeight: 1,
                  mb: 0.5,
                  textShadow: `0 0 20px ${color}`,
                }}
              >
                {displayScore}%
              </Typography>
              <Typography 
                sx={{ 
                  color: '#9CA3AF',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px'
                }}
              >
                {label}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
