import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function RiskMeter({ riskScore = 67 }) {
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
  const circumference = 2 * Math.PI * 90;
  const offset = circumference - (riskScore / 100) * circumference;

  return (
    <Card 
      sx={{ 
        height: '100%',
        minHeight: 450,
        background: 'rgba(30, 35, 50, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(99, 102, 241, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent 
        sx={{ 
          p: 4, 
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 800, 
            mb: 3, 
            fontSize: '1.2rem', 
            color: '#F9FAFB' 
          }}
        >
          Current Risk Level
        </Typography>
        
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flex: 1,
            position: 'relative',
            py: 4,
          }}
        >
          {/* Outer container with padding to prevent clipping */}
          <Box 
            sx={{ 
              position: 'relative',
              width: 280,
              height: 280,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Glow Background Effect */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 240,
                height: 240,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${color}50 0%, transparent 70%)`,
                filter: 'blur(40px)',
                zIndex: 0,
              }}
            />

            {/* SVG Circle */}
            <svg 
              width="200" 
              height="200" 
              style={{ 
                position: 'relative', 
                zIndex: 1,
              }}
            >
              {/* Background Circle */}
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="14"
              />
              
              {/* Animated Progress Circle */}
              <motion.circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke={color}
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: offset }}
                transition={{ duration: 2, ease: 'easeOut' }}
                style={{ 
                  transform: 'rotate(-90deg)',
                  transformOrigin: '50% 50%',
                }}
              />
            </svg>
            
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
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, type: 'spring' }}
              >
                <Typography 
                  sx={{ 
                    color,
                    fontWeight: 900,
                    fontSize: '3.5rem',
                    lineHeight: 1,
                    mb: 0.5,
                    textShadow: `0 0 30px ${color}`,
                  }}
                >
                  {riskScore}%
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#9CA3AF',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                  }}
                >
                  {label}
                </Typography>
              </motion.div>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
