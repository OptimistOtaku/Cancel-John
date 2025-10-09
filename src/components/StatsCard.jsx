import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export default function StatsCard({ title, value, icon, trend, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className="glass-card card-hover"
        sx={{
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'text.secondary',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  mb: 1.5,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                {title}
              </Typography>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 800,
                  mb: 1,
                  fontSize: '2.5rem',
                  lineHeight: 1,
                  color: 'text.primary'
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
                  color: trend > 0 ? 'success.main' : 'error.main',
                  fontWeight: 700,
                  fontSize: '0.875rem'
                }}
              >
                {trend > 0 ? '+' : ''}{trend}% from yesterday
              </Typography>
            </Box>
            
            <Box
              className="stats-card-icon"
              sx={{
                bgcolor: `${color}.main`,
                color: 'white',
                borderRadius: 3,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 8px 24px ${color}.main`,
              }}
            >
              {icon}
            </Box>
          </Box>
        </CardContent>
        
        {/* Bottom Gradient Bar */}
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
