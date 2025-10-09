import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export default function StatsCard({ title, value, icon, trend, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
    >
      <Card
        className="card-hover"
        sx={{
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          background: '#111827',
          border: '1px solid rgba(99, 102, 241, 0.2)',
        }}
      >
        <CardContent sx={{ p: 3.5 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box sx={{ flex: 1 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#9CA3AF',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  mb: 2,
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px'
                }}
              >
                {title}
              </Typography>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 900,
                  mb: 1.5,
                  fontSize: '2.8rem',
                  lineHeight: 1,
                  color: '#F9FAFB'
                }}
              >
                {typeof value === 'number' ? (
                  <CountUp end={value} duration={2.5} separator="," />
                ) : (
                  value
                )}
              </Typography>
              <Typography
                variant="body2"
                sx={{ 
                  color: trend > 0 ? '#10B981' : '#EF4444',
                  fontWeight: 700,
                  fontSize: '0.9rem'
                }}
              >
                {trend > 0 ? '+' : ''}{trend}% from yesterday
              </Typography>
            </Box>
            
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: '18px',
                bgcolor: `${color}.main`,
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 12px 28px ${color === 'primary' ? 'rgba(99, 102, 241, 0.6)' : 
                             color === 'error' ? 'rgba(220, 38, 38, 0.6)' :
                             color === 'success' ? 'rgba(16, 185, 129, 0.6)' :
                             'rgba(245, 158, 11, 0.6)'}`,
              }}
            >
              {icon}
            </Box>
          </Box>
        </CardContent>
        
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: `linear-gradient(90deg, ${color}.dark, ${color}.light)`,
          }}
        />
      </Card>
    </motion.div>
  );
}
