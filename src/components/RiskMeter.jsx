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
    if (score < 40) return 'Safe';
    if (score < 70) return 'Suspicious';
    return 'High Risk';
  };

  const color = getColor(riskScore);
  const label = getLabel(riskScore);
  const circumference = 2 * Math.PI * 90;
  const offset = circumference - (riskScore / 100) * circumference;

  return (
    <Card className="glass-card" sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
          Current Risk Level
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 2 }}>
          <Box sx={{ position: 'relative' }}>
            <svg width="220" height="220">
              {/* Background Circle */}
              <circle
                cx="110"
                cy="110"
                r="90"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="16"
              />
              
              {/* Animated Progress Circle */}
              <motion.circle
                cx="110"
                cy="110"
                r="90"
                fill="none"
                stroke={color}
                strokeWidth="16"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: offset }}
                transition={{ duration: 2, ease: 'easeOut' }}
                style={{ 
                  transform: 'rotate(-90deg)',
                  transformOrigin: '50% 50%',
                  filter: `drop-shadow(0 0 12px ${color})`
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
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
              >
                <Typography 
                  variant="h2" 
                  sx={{ 
                    color,
                    fontWeight: 900,
                    fontSize: '3.5rem',
                    lineHeight: 1,
                    mb: 0.5,
                    textShadow: `0 0 20px ${color}`
                  }}
                >
                  {riskScore}%
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'text.secondary',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
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
