import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import TopNavbar from './components/TopNavbar';
import FloatingProfile from './components/FloatingProfile';
import Dashboard from './pages/Dashboard';
import LiveMonitoring from './pages/LiveMonitoring';
import Analytics from './pages/Analytics';
import CaseManagement from './pages/CaseManagement';
import Settings from './pages/Settings';
import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#6366F1', light: '#818CF8', dark: '#4F46E5' },
    secondary: { main: '#8B5CF6', light: '#A78BFA', dark: '#7C3AED' },
    background: { default: '#1A1F2E', paper: 'rgba(30, 35, 50, 0.7)' },
    error: { main: '#DC2626', light: '#EF4444', dark: '#B91C1C' },
    warning: { main: '#F59E0B', light: '#FBBF24', dark: '#D97706' },
    success: { main: '#10B981', light: '#34D399', dark: '#059669' },
    text: { primary: '#F9FAFB', secondary: '#9CA3AF' },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h3: { fontWeight: 900, fontSize: '2.5rem' },
    h4: { fontWeight: 800, fontSize: '2rem' },
    h5: { fontWeight: 700, fontSize: '1.5rem' },
    h6: { fontWeight: 700, fontSize: '1.1rem' },
    body1: { fontSize: '0.95rem', fontWeight: 500 },
    body2: { fontSize: '0.875rem', fontWeight: 500 },
  },
  shape: { borderRadius: 20 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          backgroundColor: 'rgba(30, 35, 50, 0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          overflow: 'visible',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: { padding: '32px !important' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
          fontSize: '0.9rem',
          fontWeight: 700,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: 700,
          fontSize: '0.8rem',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            backgroundColor: 'rgba(30, 35, 50, 0.8)',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '20px',
        },
        head: {
          fontWeight: 800,
          textTransform: 'uppercase',
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          color: '#9CA3AF',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Box 
          sx={{ 
            minHeight: '100vh', 
            bgcolor: 'background.default',
            position: 'relative',
          }}
        >
          {/* Top Navigation Bar */}
          <TopNavbar />

          {/* Main Content */}
          <Box 
            sx={{ 
              pt: 10, 
              px: { xs: 2, sm: 3, md: 4, lg: 6 },
              pb: 4,
              maxWidth: 1800,
              mx: 'auto'
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/live-monitoring" element={<LiveMonitoring />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/cases" element={<CaseManagement />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Box>

          {/* Floating User Profile */}
          <FloatingProfile />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
