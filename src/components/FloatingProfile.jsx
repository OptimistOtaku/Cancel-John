import React, { useState } from 'react';
import { Box, Avatar, Tooltip, Zoom, Paper, Typography, IconButton } from '@mui/material';
import { Logout, Person, Settings } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingProfile() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 9999,
      }}
    >
      {/* Floating Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Paper
              sx={{
                position: 'absolute',
                bottom: 80,
                right: 0,
                width: 220,
                p: 2,
                bgcolor: 'rgba(30, 35, 50, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                borderRadius: 3,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              }}
            >
              <Box sx={{ mb: 2, pb: 2, borderBottom: '1px solid rgba(99, 102, 241, 0.2)' }}>
                <Typography variant="body1" sx={{ fontWeight: 700, color: '#F9FAFB' }}>
                  Mark Johnson
                </Typography>
                <Typography variant="caption" sx={{ color: '#9CA3AF' }}>
                  mark@securebank.com
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    p: 1.5,
                    borderRadius: 2,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    '&:hover': {
                      bgcolor: 'rgba(99, 102, 241, 0.1)',
                    },
                  }}
                >
                  <Person sx={{ fontSize: 20, color: '#9CA3AF' }} />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Profile
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    p: 1.5,
                    borderRadius: 2,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    '&:hover': {
                      bgcolor: 'rgba(99, 102, 241, 0.1)',
                    },
                  }}
                >
                  <Settings sx={{ fontSize: 20, color: '#9CA3AF' }} />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Settings
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    p: 1.5,
                    borderRadius: 2,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    color: 'error.main',
                    '&:hover': {
                      bgcolor: 'rgba(220, 38, 38, 0.1)',
                    },
                  }}
                >
                  <Logout sx={{ fontSize: 20 }} />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Logout
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Avatar Button */}
      <Tooltip title="Profile Menu" TransitionComponent={Zoom} placement="left">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Avatar
            onClick={() => setMenuOpen(!menuOpen)}
            sx={{
              width: 64,
              height: 64,
              cursor: 'pointer',
              bgcolor: 'primary.main',
              fontSize: '1.5rem',
              fontWeight: 900,
              boxShadow: '0 8px 32px rgba(99, 102, 241, 0.5)',
              border: '3px solid rgba(99, 102, 241, 0.3)',
              transition: 'all 0.3s',
              '&:hover': {
                boxShadow: '0 12px 40px rgba(99, 102, 241, 0.6)',
                transform: 'translateY(-4px)',
              },
            }}
          >
            MJ
          </Avatar>
        </motion.div>
      </Tooltip>
    </Box>
  );
}
