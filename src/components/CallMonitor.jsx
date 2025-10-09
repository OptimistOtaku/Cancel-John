import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Avatar, IconButton } from '@mui/material';
import { PlayArrow, Phone } from '@mui/icons-material';
import { motion } from 'framer-motion';

const activeCalls = [
  { id: 1, customer: 'Rajesh Kumar', phone: '+91 98765 43210', risk: 'high', duration: '3:45' },
  { id: 2, customer: 'Priya Sharma', phone: '+91 98234 56789', risk: 'medium', duration: '1:22' },
  { id: 3, customer: 'Amit Patel', phone: '+91 97654 32109', risk: 'low', duration: '5:12' },
  { id: 4, customer: 'Sneha Reddy', phone: '+91 96543 21098', risk: 'medium', duration: '2:33' },
];

export default function CallMonitor({ calls = activeCalls }) {
  const getRiskColor = (risk) => {
    if (risk === 'high') return 'error';
    if (risk === 'medium') return 'warning';
    return 'success';
  };

  return (
    <Card sx={{ bgcolor: 'background.paper', borderRadius: 4, height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Active Calls</Typography>
          <Chip label={`${calls.length} Live`} color="success" size="small" className="pulse" />
        </Box>

        <Box sx={{ maxHeight: 400, overflowY: 'auto' }}>
          {calls.map((call, index) => (
            <motion.div
              key={call.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Box
                sx={{
                  p: 2,
                  mb: 1.5,
                  borderRadius: 2,
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'rgba(99, 102, 241, 0.1)',
                    transform: 'translateX(5px)',
                    transition: 'all 0.3s',
                  },
                }}
              >
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <Phone fontSize="small" />
                </Avatar>

                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight="bold">
                    {call.customer}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {call.phone}
                  </Typography>
                </Box>

                <Box sx={{ textAlign: 'right' }}>
                  <Chip
                    label={call.risk.toUpperCase()}
                    size="small"
                    color={getRiskColor(call.risk)}
                    sx={{ mb: 0.5 }}
                  />
                  <Typography variant="caption" display="block" color="text.secondary">
                    {call.duration}
                  </Typography>
                </Box>

                <IconButton size="small" color="primary">
                  <PlayArrow />
                </IconButton>
              </Box>
            </motion.div>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
