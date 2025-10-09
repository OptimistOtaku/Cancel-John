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

// Create Dark Theme for Dashboard
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366F1',
      light: '#818CF8',
      dark: '#4F46E5',
    },
    secondary: {
      main: '#8B5CF6',
      light: '#A78BFA',
      dark: '#7C3AED',
    },
    background: {
      default: '#0F172A',
      paper: '#1E293B',
    },
    error: {
      main: '#DC2626',
      light: '#EF4444',
      dark: '#B91C1C',
    },
    warning: {
      main: '#F59E0B',
      light: '#FBBF24',
      dark: '#D97706',
    },
    success: {
      main: '#10B981',
      light: '#34D399',
      dark: '#059669',
    },
    info: {
      main: '#3B82F6',
      light: '#60A5FA',
      dark: '#2563EB',
    },
    text: {
      primary: '#F1F5F9',
      secondary: '#94A3B8',
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 800,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    body1: {
      fontSize: '0.875rem',
    },
    body2: {
      fontSize: '0.8125rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
          fontSize: '0.875rem',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
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
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backgroundImage: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        },
        head: {
          fontWeight: 700,
          textTransform: 'uppercase',
          fontSize: '0.75rem',
          letterSpacing: '0.05em',
          color: '#94A3B8',
        },
      },
    },
  },
});

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            display: 'flex',
            minHeight: '100vh',
            bgcolor: 'background.default',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Animated Background Gradient */}
          <Box
            sx={{
              position: 'fixed',
              top: -200,
              right: -200,
              width: 600,
              height: 600,
              background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
              animation: 'pulse 8s ease-in-out infinite',
            }}
          />
          <Box
            sx={{
              position: 'fixed',
              bottom: -200,
              left: -200,
              width: 600,
              height: 600,
              background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0) 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
              animation: 'pulse 10s ease-in-out infinite',
            }}
          />

          {/* Sidebar */}
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

          {/* Main Content Area */}
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              zIndex: 1,
              transition: 'margin-left 0.3s ease',
              marginLeft: sidebarOpen ? 0 : '-280px',
            }}
          >
            {/* Header */}
            <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

            {/* Page Content */}
            <Box
              sx={{
                flexGrow: 1,
                p: { xs: 2, sm: 3, md: 4 },
                overflow: 'auto',
                maxHeight: 'calc(100vh - 80px)',
              }}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
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
