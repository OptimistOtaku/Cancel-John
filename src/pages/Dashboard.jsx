import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Phone, Shield, TrendingUp, AttachMoney } from '@mui/icons-material';
import StatsCard from '../components/StatsCard';
import RiskMeter from '../components/RiskMeter';
import AudioUploader from '../components/AudioUploader';
import LiveTranscript from '../components/LiveTranscript';
import CallMonitor from '../components/CallMonitor';
import AlertPanel from '../components/AlertPanel';
import FraudTrendChart from '../components/FraudTrendChart';
import TopScamTypes from '../components/TopScamTypes';
import RevealSection from '../components/RevealSection';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const handleAudioUpload = (file) => {
    console.log('Uploaded audio file:', file);
  };

  return (
    <Box sx={{ maxWidth: 1600, mx: 'auto' }}>
      {/* Welcome Banner - Full Width */}
      <RevealSection delay={0.1}>
        <Box sx={{ mb: 5 }}>
          <motion.div
            className="gradient-bg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              borderRadius: 24,
              padding: '48px 40px',
              color: 'white',
              boxShadow: '0 20px 60px rgba(99, 102, 241, 0.5)',
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, fontSize: '2.5rem' }}>
              Welcome back!
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.95, mb: 1.5, fontWeight: 600, fontSize: '1.2rem' }}>
              SecureBank Fraud Detection System
            </Typography>
            <Typography sx={{ opacity: 0.85, fontSize: '1rem', lineHeight: 1.6 }}>
              System is actively monitoring all calls for suspicious activity.
            </Typography>
          </motion.div>
        </Box>
      </RevealSection>

      <Grid container spacing={4}>
        {/* Stats Row - Max 3 Cards */}
        <Grid item xs={12} sm={6} md={4}>
          <RevealSection delay={0.15}>
            <StatsCard
              title="Calls Analyzed Today"
              value={1247}
              icon={<Phone fontSize="large" />}
              trend={5}
              color="primary"
            />
          </RevealSection>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <RevealSection delay={0.2}>
            <StatsCard
              title="Scams Detected"
              value={23}
              icon={<Shield fontSize="large" />}
              trend={-14}
              color="error"
            />
          </RevealSection>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <RevealSection delay={0.25}>
            <StatsCard
              title="Detection Accuracy"
              value="97.3%"
              icon={<TrendingUp fontSize="large" />}
              trend={2}
              color="success"
            />
          </RevealSection>
        </Grid>
      </Grid>

      {/* Spacer */}
      <Box sx={{ my: 5 }} />

      {/* Main Action Cards */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <RevealSection delay={0.3}>
            <AudioUploader onUpload={handleAudioUpload} />
          </RevealSection>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <RevealSection delay={0.35}>
            <RiskMeter riskScore={67} />
          </RevealSection>
        </Grid>
      </Grid>

      {/* Spacer */}
      <Box sx={{ my: 5 }} />

      {/* Monitoring Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <RevealSection delay={0.4}>
            <CallMonitor />
          </RevealSection>
        </Grid>

        <Grid item xs={12} lg={6}>
          <RevealSection delay={0.45}>
            <AlertPanel />
          </RevealSection>
        </Grid>
      </Grid>

      {/* Spacer */}
      <Box sx={{ my: 5 }} />

      {/* Analytics Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <RevealSection delay={0.5}>
            <FraudTrendChart />
          </RevealSection>
        </Grid>

        <Grid item xs={12} lg={4}>
          <RevealSection delay={0.55}>
            <TopScamTypes />
          </RevealSection>
        </Grid>
      </Grid>

      {/* Spacer */}
      <Box sx={{ my: 5 }} />

      {/* Live Transcript - Full Width */}
      <RevealSection delay={0.6}>
        <LiveTranscript />
      </RevealSection>

      {/* Bottom Spacer */}
      <Box sx={{ mb: 4 }} />
    </Box>
  );
}
