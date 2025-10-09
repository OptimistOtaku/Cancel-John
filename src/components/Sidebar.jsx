import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography, Divider
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  PhoneInTalk,
  BarChart,
  Folder,
  Settings as SettingsIcon,
  Shield
} from '@mui/icons-material';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Live Monitoring', icon: <PhoneInTalk />, path: '/live-monitoring' },
  { text: 'Analytics', icon: <BarChart />, path: '/analytics' },
  { text: 'Case Management', icon: <Folder />, path: '/cases' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();

  return (
    <Drawer
      variant="persistent"
      open={open}
      sx={{
        width: 280,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 280,
          bgcolor: 'background.paper',
          borderRight: '1px solid rgba(255,255,255,0.1)',
        },
      }}
    >
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Shield sx={{ fontSize: 40, color: 'primary.main' }} />
        <Box>
          <Typography variant="h6" fontWeight="bold">SecureBank</Typography>
          <Typography variant="caption" color="text.secondary">
            Fraud Detection
          </Typography>
        </Box>
      </Box>
      
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 2 }} />
      
      <List sx={{ px: 2 }}>
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ListItem
                component={Link}
                to={item.path}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  bgcolor: isActive ? 'primary.main' : 'transparent',
                  color: isActive ? 'white' : 'text.primary',
                  transition: 'all 0.3s',
                  '&:hover': {
                    bgcolor: isActive ? 'primary.dark' : 'rgba(99, 102, 241, 0.1)',
                    transform: 'translateX(5px)',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </motion.div>
          );
        })}
      </List>
    </Drawer>
  );
}
