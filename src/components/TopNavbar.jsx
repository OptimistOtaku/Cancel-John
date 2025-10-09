import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Button, 
  IconButton, 
  TextField, 
  Badge,
  Typography,
  Container
} from '@mui/material';
import { 
  Dashboard, 
  PhoneInTalk, 
  BarChart, 
  Folder, 
  Settings,
  Search,
  Notifications,
  Shield
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const menuItems = [
  { text: 'Dashboard', icon: <Dashboard />, path: '/' },
  { text: 'Live Monitoring', icon: <PhoneInTalk />, path: '/live-monitoring' },
  { text: 'Analytics', icon: <BarChart />, path: '/analytics' },
  { text: 'Cases', icon: <Folder />, path: '/cases' },
  { text: 'Settings', icon: <Settings />, path: '/settings' },
];

export default function TopNavbar() {
  const location = useLocation();

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ 
        bgcolor: 'rgba(30, 35, 50, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(99, 102, 241, 0.2)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2.5,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
              }}
            >
              <Shield sx={{ fontSize: 28, color: 'white' }} />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 900, fontSize: '1.3rem', color: '#F9FAFB' }}>
                SecureBank
              </Typography>
              <Typography variant="caption" sx={{ color: '#9CA3AF', fontSize: '0.75rem', fontWeight: 600 }}>
                Fraud Detection
              </Typography>
            </Box>
          </Box>

          {/* Navigation Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.div key={item.path} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    component={Link}
                    to={item.path}
                    startIcon={item.icon}
                    sx={{
                      px: 3,
                      py: 1,
                      borderRadius: 3,
                      color: isActive ? 'white' : '#9CA3AF',
                      fontWeight: isActive ? 700 : 600,
                      fontSize: '0.9rem',
                      background: isActive 
                        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                        : 'transparent',
                      boxShadow: isActive ? '0 4px 16px rgba(99, 102, 241, 0.4)' : 'none',
                      '&:hover': {
                        background: isActive
                          ? 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)'
                          : 'rgba(99, 102, 241, 0.1)',
                        color: 'white',
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                </motion.div>
              );
            })}
          </Box>

          {/* Right Side Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <TextField
              placeholder="Search..."
              size="small"
              sx={{
                display: { xs: 'none', lg: 'block' },
                width: 280,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  bgcolor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                },
              }}
              InputProps={{
                startAdornment: <Search sx={{ mr: 1, color: '#9CA3AF' }} />,
              }}
            />
            
            <IconButton sx={{ color: 'text.primary' }}>
              <Badge badgeContent={3} color="error">
                <Notifications />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
