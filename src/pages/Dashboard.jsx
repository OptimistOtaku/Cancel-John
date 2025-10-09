import React from 'react';
import { Grid, Box } from '@mui/material';
import { Phone, Shield, TrendingUp, AttachMoney } from '@mui/icons-material';
import StatsCard from '../components/StatsCard';
import RiskMeter from '../components/RiskMeter';
import AudioUploader from '../components/AudioUploader';
import LiveTranscript from '../components/LiveTranscript';
import CallMonitor from '../components/CallMonitor';
import AlertPanel from '../components/AlertPanel';
import FraudTrendChart from '../components/FraudTrendChart';
import TopScamTypes from '../components/TopScamTypes';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const handleAudioUpload = (file) => {
    console.log('Uploaded audio file:', file);
  };

  return (
    <Box className="fade-in">
      <Grid container spacing={3}>
        {/* Stats Row */}
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            title="Calls Analyzed Today"
            value={1247}
            icon={<Phone fontSize="large" />}
            trend={5}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            title="Scams Detected"
            value={23}
            icon={<Shield fontSize="large" />}
            trend={-14}
            color="error"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            title="Detection Accuracy"
            value="97.3%"
            icon={<TrendingUp fontSize="large" />}
            trend={2}
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            title="Money Saved"
            value="₹2.4L"
            icon={<AttachMoney fontSize="large" />}
            trend={18}
            color="warning"
          />
        </Grid>

        {/* Main Content Row */}
        <Grid item xs={12} md={4}>
          <AudioUploader onUpload={handleAudioUpload} />
        </Grid>
        
        <Grid item xs={12} md={4}>
          <RiskMeter riskScore={67} />
        </Grid>
        
        <Grid item xs={12} md={4}>
          <motion.div
            className="gradient-bg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              borderRadius: 24,
              padding: 32,
              color: 'white',
              minHeight: 320,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: '0 20px 60px rgba(99, 102, 241, 0.4)',
            }}
          >
            <h2 style={{ marginBottom: 12, fontSize: '1.75rem', fontWeight: 800 }}>Welcome back!</h2>
            <p style={{ opacity: 0.95, marginBottom: 20, fontSize: '1.05rem', fontWeight: 500 }}>
              SecureBank Fraud Detection System
            </p>
            <p style={{ opacity: 0.85, fontSize: '0.95rem', lineHeight: 1.6 }}>
              System is actively monitoring all calls for suspicious activity.
            </p>
          </motion.div>
        </Grid>

        {/* Monitoring Section */}
        <Grid item xs={12} md={4}>
          <CallMonitor />
        </Grid>

        <Grid item xs={12} md={4}>
          <AlertPanel />
        </Grid>

        <Grid item xs={12} md={4}>
          <TopScamTypes />
        </Grid>

        {/* Charts Section */}
        <Grid item xs={12}>
          <FraudTrendChart />
        </Grid>

        {/* Transcript Section */}
        <Grid item xs={12}>
          <LiveTranscript />
        </Grid>
      </Grid>
    </Box>
  );
}
