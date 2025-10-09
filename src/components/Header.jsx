import React from 'react';
import { AppBar, Toolbar, IconButton, TextField, Badge, Avatar, Box } from '@mui/material';
import { Menu, Search, Notifications, Settings } from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function Header({ toggleSidebar }) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton onClick={toggleSidebar} sx={{ color: 'text.primary' }}>
            <Menu />
          </IconButton>
          
          <TextField
            placeholder="Type here..."
            size="small"
            sx={{
              width: 300,
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                bgcolor: 'rgba(255,255,255,0.05)',
              },
            }}
            InputProps={{
              startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <IconButton sx={{ color: 'text.primary' }}>
              <Badge badgeContent={3} color="error">
                <Notifications />
              </Badge>
            </IconButton>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <IconButton sx={{ color: 'text.primary' }}>
              <Settings />
            </IconButton>
          </motion.div>
          
          <Avatar sx={{ bgcolor: 'primary.main', cursor: 'pointer' }}>MJ</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
