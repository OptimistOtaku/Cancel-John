import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Switch,
  FormControlLabel,
  Button,
  Slider,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Save, Refresh } from '@mui/icons-material';

export default function Settings() {
  const [riskThreshold, setRiskThreshold] = useState(70);
  const [autoBlock, setAutoBlock] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);

  return (
    <Box className="fade-in">
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
        Settings
      </Typography>

      <Grid container spacing={3}>
        {/* Model Configuration */}
        <Grid item xs={12} md={6}>
          <Card sx={{ bgcolor: 'background.paper', borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Detection Model Settings
              </Typography>
              <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.1)' }} />

              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" gutterBottom>
                  Risk Threshold: {riskThreshold}%
                </Typography>
                <Slider
                  value={riskThreshold}
                  onChange={(e, val) => setRiskThreshold(val)}
                  min={0}
                  max={100}
                  sx={{ color: 'primary.main' }}
                />
                <Typography variant="caption" color="text.secondary">
                  Calls with risk score above this will trigger alerts
                </Typography>
              </Box>

              <FormControlLabel
                control={<Switch checked={autoBlock} onChange={(e) => setAutoBlock(e.target.checked)} />}
                label="Auto-block high-risk calls"
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="API Endpoint"
                defaultValue="http://localhost:8000"
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Model Version"
                defaultValue="DistilBERT-v2.1"
                disabled
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Notification Settings */}
        <Grid item xs={12} md={6}>
          <Card sx={{ bgcolor: 'background.paper', borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Notification Settings
              </Typography>
              <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.1)' }} />

              <FormControlLabel
                control={<Switch checked={emailAlerts} onChange={(e) => setEmailAlerts(e.target.checked)} />}
                label="Email alerts for high-risk detections"
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Alert Email"
                type="email"
                defaultValue="admin@securebank.com"
                sx={{ mb: 2 }}
              />

              <FormControlLabel
                control={<Switch defaultChecked />}
                label="SMS notifications"
                sx={{ mb: 2 }}
              />

              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Dashboard notifications"
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Action Buttons */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<Save />}
              sx={{ borderRadius: 3, px: 4 }}
            >
              Save Changes
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Refresh />}
              sx={{ borderRadius: 3, px: 4 }}
            >
              Reset to Default
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
