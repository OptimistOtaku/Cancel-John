import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import TopNavbar from './components/TopNavbar';
import FloatingProfile from './components/FloatingProfile';
import ScrollBackground from './components/ScrollBackground';
import Dashboard from './pages/Dashboard';
import LiveMonitoring from './pages/LiveMonitoring';
import Analytics from './pages/Analytics';
import CaseManagement from './pages/CaseManagement';
import Settings from './pages/Settings';
import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#6B7FFF', light: '#8B9FFF', dark: '#4B5FDF' },
    secondary: { main: '#7C5CFF', light: '#9C7CFF', dark: '#5C3CDF' },
    background: { 
      default: 'transparent',
      paper: 'rgba(15, 25, 45, 0.6)' 
    },
    error: { main: '#FF4B6E' },
    warning: { main: '#FFB547' },
    success: { main: '#47FFB5' },
    text: { primary: '#FFFFFF', secondary: '#8B9CB8' },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          backgroundColor: 'rgba(15, 25, 45, 0.6)',
          backdropFilter: 'blur(30px)',
          border: '1px solid rgba(107, 127, 255, 0.15)',
          overflow: 'visible',
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
        <ScrollBackground />
        <Box sx={{ minHeight: '100vh', position: 'relative' }}>
          <TopNavbar />
          <Box sx={{ pt: 8, px: { xs: 2, sm: 3, md: 4, lg: 6 }, pb: 4, maxWidth: 1800, mx: 'auto', position: 'relative', zIndex: 1 }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/live-monitoring" element={<LiveMonitoring />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/cases" element={<CaseManagement />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Box>
          <FloatingProfile />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
