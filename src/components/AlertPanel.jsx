import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Button, IconButton } from '@mui/material';
import { Warning, CheckCircle, Cancel, MoreVert } from '@mui/icons-material';
import { motion } from 'framer-motion';

const sampleAlerts = [
  {
    id: 1,
    customerId: 'CUST-4521',
    riskScore: 92,
    keywords: ['OTP', 'urgent', 'verify account'],
    time: '2 mins ago',
    status: 'critical',
  },
  {
    id: 2,
    customerId: 'CUST-7832',
    riskScore: 78,
    keywords: ['refund', 'bank details'],
    time: '15 mins ago',
    status: 'warning',
  },
  {
    id: 3,
    customerId: 'CUST-1092',
    riskScore: 65,
    keywords: ['prize', 'click link'],
    time: '28 mins ago',
    status: 'warning',
  },
];

export default function AlertPanel({ alerts = sampleAlerts }) {
  const getStatusColor = (status) => {
    if (status === 'critical') return 'error';
    if (status === 'warning') return 'warning';
    return 'success';
  };

  return (
    <Card sx={{ bgcolor: 'background.paper', borderRadius: 4, height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Priority Alerts</Typography>
          <Chip label={`${alerts.length} Active`} color="error" size="small" className="pulse" />
        </Box>

        <Box sx={{ maxHeight: 400, overflowY: 'auto' }}>
          {alerts.map((alert, index) => (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Box
                sx={{
                  p: 2,
                  mb: 2,
                  borderRadius: 2,
                  bgcolor: 'rgba(220, 38, 38, 0.1)',
                  border: '1px solid rgba(220, 38, 38, 0.3)',
                  position: 'relative',
                  '&:hover': {
                    bgcolor: 'rgba(220, 38, 38, 0.15)',
                    transform: 'translateX(5px)',
                    transition: 'all 0.3s',
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Warning color="error" fontSize="small" />
                    <Typography variant="body2" fontWeight="bold">
                      {alert.customerId}
                    </Typography>
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    {alert.time}
                  </Typography>
                </Box>

                <Typography variant="h6" color="error" sx={{ mb: 1 }}>
                  Risk Score: {alert.riskScore}%
                </Typography>

                <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 2 }}>
                  {alert.keywords.map((keyword, i) => (
                    <Chip key={i} label={keyword} size="small" color="error" variant="outlined" />
                  ))}
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button size="small" variant="contained" color="error" fullWidth>
                    Block
                  </Button>
                  <Button size="small" variant="outlined" color="primary" fullWidth>
                    Investigate
                  </Button>
                  <Button size="small" variant="text" color="inherit">
                    Dismiss
                  </Button>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
