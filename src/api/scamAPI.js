import axios from 'axios';

// Base URL for API - change this to your backend URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - add auth token if needed
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - handle errors globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error
      console.error('API Error:', error.response.data);
      if (error.response.status === 401) {
        // Unauthorized - redirect to login
        window.location.href = '/login';
      }
    } else if (error.request) {
      // Request made but no response
      console.error('Network Error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// ==================== API FUNCTIONS ====================

/**
 * Upload audio file for scam detection
 * @param {File} audioFile - Audio file to analyze
 * @returns {Promise} Detection result with transcript, risk score, keywords
 */
export const detectScam = async (audioFile) => {
  const formData = new FormData();
  formData.append('audio', audioFile);

  try {
    const response = await apiClient.post('/detect-scam', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to detect scam');
  }
};

/**
 * Get list of currently active calls
 * @returns {Promise} Array of active call objects
 */
export const getActiveCalls = async () => {
  try {
    const response = await apiClient.get('/active-calls');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch active calls');
  }
};

/**
 * Get analytics data for specified time period
 * @param {number} days - Number of days to fetch (default: 30)
 * @returns {Promise} Analytics data with trends, charts, metrics
 */
export const getAnalytics = async (days = 30) => {
  try {
    const response = await apiClient.get('/analytics', {
      params: { days },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch analytics');
  }
};

/**
 * Get all fraud detection cases
 * @param {Object} filters - Optional filters (status, riskLevel, dateRange)
 * @returns {Promise} Array of case objects
 */
export const getCases = async (filters = {}) => {
  try {
    const response = await apiClient.get('/cases', {
      params: filters,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch cases');
  }
};

/**
 * Get single case details by ID
 * @param {string} caseId - Case ID
 * @returns {Promise} Detailed case object
 */
export const getCaseById = async (caseId) => {
  try {
    const response = await apiClient.get(`/cases/${caseId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch case details');
  }
};

/**
 * Update case status or add notes
 * @param {string} caseId - Case ID
 * @param {Object} updateData - Data to update (status, notes, assignee)
 * @returns {Promise} Updated case object
 */
export const updateCase = async (caseId, updateData) => {
  try {
    const response = await apiClient.patch(`/cases/${caseId}`, updateData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update case');
  }
};

/**
 * Update system settings
 * @param {Object} settings - Settings object (riskThreshold, autoBlock, etc.)
 * @returns {Promise} Updated settings
 */
export const updateSettings = async (settings) => {
  try {
    const response = await apiClient.post('/settings', settings);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update settings');
  }
};

/**
 * Get current system settings
 * @returns {Promise} Settings object
 */
export const getSettings = async () => {
  try {
    const response = await apiClient.get('/settings');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch settings');
  }
};

/**
 * Get real-time alerts
 * @returns {Promise} Array of alert objects
 */
export const getAlerts = async () => {
  try {
    const response = await apiClient.get('/alerts');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch alerts');
  }
};

/**
 * Dismiss or acknowledge an alert
 * @param {string} alertId - Alert ID
 * @returns {Promise} Success status
 */
export const dismissAlert = async (alertId) => {
  try {
    const response = await apiClient.delete(`/alerts/${alertId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to dismiss alert');
  }
};

/**
 * Escalate a high-risk call
 * @param {string} callId - Call ID
 * @param {Object} escalationData - Escalation details
 * @returns {Promise} Escalation confirmation
 */
export const escalateCall = async (callId, escalationData) => {
  try {
    const response = await apiClient.post(`/calls/${callId}/escalate`, escalationData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to escalate call');
  }
};

/**
 * Block a transaction in real-time
 * @param {string} transactionId - Transaction ID
 * @returns {Promise} Block confirmation
 */
export const blockTransaction = async (transactionId) => {
  try {
    const response = await apiClient.post(`/transactions/${transactionId}/block`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to block transaction');
  }
};

/**
 * Export report in specified format
 * @param {string} format - Report format (pdf, csv, json)
 * @param {Object} filters - Report filters
 * @returns {Promise} Blob data for download
 */
export const exportReport = async (format = 'pdf', filters = {}) => {
  try {
    const response = await apiClient.get('/reports/export', {
      params: { format, ...filters },
      responseType: 'blob',
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to export report');
  }
};

/**
 * Get dashboard statistics
 * @returns {Promise} Dashboard stats object
 */
export const getDashboardStats = async () => {
  try {
    const response = await apiClient.get('/dashboard/stats');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch dashboard stats');
  }
};

/**
 * Start live monitoring session
 * @param {string} callId - Call ID to monitor
 * @returns {Promise} WebSocket connection details
 */
export const startLiveMonitoring = async (callId) => {
  try {
    const response = await apiClient.post('/monitoring/start', { callId });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to start monitoring');
  }
};

/**
 * Stop live monitoring session
 * @param {string} sessionId - Monitoring session ID
 * @returns {Promise} Success status
 */
export const stopLiveMonitoring = async (sessionId) => {
  try {
    const response = await apiClient.post('/monitoring/stop', { sessionId });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to stop monitoring');
  }
};

// Default export object with all functions
const scamAPI = {
  detectScam,
  getActiveCalls,
  getAnalytics,
  getCases,
  getCaseById,
  updateCase,
  updateSettings,
  getSettings,
  getAlerts,
  dismissAlert,
  escalateCall,
  blockTransaction,
  exportReport,
  getDashboardStats,
  startLiveMonitoring,
  stopLiveMonitoring,
};

export default scamAPI;
