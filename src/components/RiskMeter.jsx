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
  const circumference = 2 * Math.PI * 100;
  const offset = circumference - (riskScore / 100) * circumference;

  return (
    <Card sx={{ height: '100%', background: '#111827', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
      <CardContent sx={{ p: 3.5 }}>
        <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, fontSize: '1.1rem', color: '#F9FAFB' }}>
          Current Risk Level
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3 }}>
          <Box sx={{ position: 'relative' }}>
            <svg width="240" height="240">
              <circle
                cx="120"
                cy="120"
                r="100"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="20"
              />
              
              <motion.circle
                cx="120"
                cy="120"
                r="100"
                fill="none"
                stroke={color}
                strokeWidth="20"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: offset }}
                transition={{ duration: 2, ease: 'easeOut' }}
                style={{ 
                  transform: 'rotate(-90deg)',
                  transformOrigin: '50% 50%',
                  filter: `drop-shadow(0 0 20px ${color})`
                }}
              />
            </svg>
            
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
                transition={{ delay: 0.5, duration: 0.6, type: 'spring' }}
              >
                <Typography 
                  sx={{ 
                    color,
                    fontWeight: 900,
                    fontSize: '4rem',
                    lineHeight: 1,
                    mb: 1,
                    textShadow: `0 0 30px ${color}`
                  }}
                >
                  {riskScore}%
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#9CA3AF',
                    fontWeight: 800,
                    fontSize: '1rem',
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
