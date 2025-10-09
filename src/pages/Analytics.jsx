import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import FraudTrendChart from '../components/FraudTrendChart';
import TopScamTypes from '../components/TopScamTypes';
import StatsCard from '../components/StatsCard';
import { TrendingUp, Block, CheckCircle, Speed } from '@mui/icons-material';

export default function Analytics() {
  return (
    <Box className="fade-in">
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
        Analytics Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* KPI Cards */}
        <Grid item xs={12} md={3}>
          <StatsCard
            title="Total Calls Analyzed"
            value={34289}
            icon={<TrendingUp />}
            trend={23}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatsCard
            title="Scams Blocked"
            value={456}
            icon={<Block />}
            trend={12}
            color="error"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatsCard
            title="Success Rate"
            value="96.8%"
            icon={<CheckCircle />}
            trend={3}
            color="success"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatsCard
            title="Avg Response Time"
            value="1.2s"
            icon={<Speed />}
            trend={-5}
            color="warning"
          />
        </Grid>

        {/* Charts */}
        <Grid item xs={12} md={8}>
          <FraudTrendChart />
        </Grid>

        <Grid item xs={12} md={4}>
          <TopScamTypes />
        </Grid>
      </Grid>
    </Box>
  );
}
