import React, { useState } from 'react';
import { Grid, Box, Typography, Card, CardContent, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import RiskMeter from '../components/RiskMeter';
import LiveTranscript from '../components/LiveTranscript';
import CallMonitor from '../components/CallMonitor';
import { PlayArrow, Pause, Stop, VolumeUp } from '@mui/icons-material';

export default function LiveMonitoring() {
  const [monitoring, setMonitoring] = useState(true);

  return (
    <Box className="fade-in">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" fontWeight="bold">
          Live Call Monitoring
        </Typography>
        <Chip
          label={monitoring ? 'LIVE' : 'PAUSED'}
          color={monitoring ? 'success' : 'warning'}
          className={monitoring ? 'pulse' : ''}
        />
      </Box>

      <Grid container spacing={3}>
        {/* Controls */}
        <Grid item xs={12}>
          <Card sx={{ bgcolor: 'background.paper', borderRadius: 4 }}>
            <CardContent>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Button
                  variant="contained"
                  startIcon={monitoring ? <Pause /> : <PlayArrow />}
                  onClick={() => setMonitoring(!monitoring)}
                  sx={{ borderRadius: 3 }}
                >
                  {monitoring ? 'Pause' : 'Resume'} Monitoring
                </Button>
                <Button variant="outlined" startIcon={<Stop />} sx={{ borderRadius: 3 }}>
                  Stop
                </Button>
                <Button variant="outlined" startIcon={<VolumeUp />} sx={{ borderRadius: 3 }}>
                  Audio Controls
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Active Calls */}
        <Grid item xs={12} md={4}>
          <CallMonitor />
        </Grid>

        {/* Risk Meter */}
        <Grid item xs={12} md={4}>
          <RiskMeter riskScore={72} />
        </Grid>

        {/* Call Info */}
        <Grid item xs={12} md={4}>
          <Card sx={{ bgcolor: 'background.paper', borderRadius: 4, height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Current Call Details
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Customer ID
                </Typography>
                <Typography variant="body1" fontWeight="bold" sx={{ mb: 2 }}>
                  CUST-7845
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Phone Number
                </Typography>
                <Typography variant="body1" fontWeight="bold" sx={{ mb: 2 }}>
                  +91 98765 43210
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Duration
                </Typography>
                <Typography variant="body1" fontWeight="bold" sx={{ mb: 2 }}>
                  4:32
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Detected Keywords
                </Typography>
                <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mt: 1 }}>
                  <Chip label="OTP" size="small" color="error" />
                  <Chip label="urgent" size="small" color="warning" />
                  <Chip label="verify" size="small" color="warning" />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Live Transcript */}
        <Grid item xs={12}>
          <LiveTranscript />
        </Grid>
      </Grid>
    </Box>
  );
}
