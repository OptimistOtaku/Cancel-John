import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import LiveMonitoring from './pages/LiveMonitoring';
import Analytics from './pages/Analytics';
import CaseManagement from './pages/CaseManagement';
import Settings from './pages/Settings';
import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#6366F1' },
    secondary: { main: '#8B5CF6' },
    background: {
      default: '#0F172A',
      paper: '#1E293B',
    },
    error: { main: '#DC2626' },
    warning: { main: '#F59E0B' },
    success: { main: '#10B981' },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
  },
  shape: { borderRadius: 16 },
});

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <Box sx={{ flexGrow: 1, p: 3, overflow: 'auto' }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/live-monitoring" element={<LiveMonitoring />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/cases" element={<CaseManagement />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
