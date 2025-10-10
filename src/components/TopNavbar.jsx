import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Button,
  IconButton, 
  Badge,
} from '@mui/material';
import { 
  Home,
  PhoneInTalk, 
  Assignment,
  BarChart, 
  Settings,
  Notifications,
  AccountCircle
} from '@mui/icons-material';

const menuItems = [
  { text: 'HOME', icon: <Home />, path: '/' },
  { text: 'LIVE CALLS', icon: <PhoneInTalk />, path: '/live-monitoring' },
  { text: 'CALL LOGS', icon: <Assignment />, path: '/cases' },
  { text: 'SETTINGS', icon: <Settings />, path: '/settings' },
  { text: 'ANALYTICS', icon: <BarChart />, path: '/analytics' },
];

export default function TopNavbar() {
  const location = useLocation();

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ 
        bgcolor: 'rgba(10, 14, 26, 0.8)',
        backdropFilter: 'blur(20px) saturate(150%)',
        WebkitBackdropFilter: 'blur(20px) saturate(150%)',
        borderBottom: '1px solid rgba(107, 127, 255, 0.1)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 0.5, minHeight: 56 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                startIcon={item.icon}
                sx={{
                  px: 2,
                  py: 1,
                  color: isActive ? '#FFFFFF' : '#8B9CB8',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  letterSpacing: '0.5px',
                  borderBottom: isActive ? '2px solid #6B7FFF' : '2px solid transparent',
                  borderRadius: 0,
                  transition: 'all 0.2s',
                  '&:hover': {
                    color: '#FFFFFF',
                    bgcolor: 'rgba(107, 127, 255, 0.1)',
                  },
                }}
              >
                {item.text}
              </Button>
            );
          })}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton sx={{ color: '#FFFFFF' }}>
            <Badge badgeContent={3} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: '#FFFFFF' }}>
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
