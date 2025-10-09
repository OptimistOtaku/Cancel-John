import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Button,
} from '@mui/material';
import { Visibility, Download, MoreVert } from '@mui/icons-material';
import { motion } from 'framer-motion';

const cases = [
  {
    id: 'CASE-001',
    customer: 'Rajesh Kumar',
    date: '2025-10-08',
    risk: 'High',
    status: 'Investigating',
    amount: '₹45,000',
  },
  {
    id: 'CASE-002',
    customer: 'Priya Sharma',
    date: '2025-10-07',
    risk: 'Medium',
    status: 'Resolved',
    amount: '₹12,500',
  },
  {
    id: 'CASE-003',
    customer: 'Amit Patel',
    date: '2025-10-07',
    risk: 'Critical',
    status: 'Escalated',
    amount: '₹1,23,000',
  },
  {
    id: 'CASE-004',
    customer: 'Sneha Reddy',
    date: '2025-10-06',
    risk: 'Low',
    status: 'Closed',
    amount: '₹5,000',
  },
];

export default function CaseManagement() {
  const getRiskColor = (risk) => {
    if (risk === 'Critical' || risk === 'High') return 'error';
    if (risk === 'Medium') return 'warning';
    return 'success';
  };

  const getStatusColor = (status) => {
    if (status === 'Escalated') return 'error';
    if (status === 'Investigating') return 'warning';
    if (status === 'Resolved' || status === 'Closed') return 'success';
    return 'default';
  };

  return (
    <Box className="fade-in">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" fontWeight="bold">
          Case Management
        </Typography>
        <Button variant="contained" sx={{ borderRadius: 3 }}>
          Export Report
        </Button>
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          bgcolor: 'background.paper',
          borderRadius: 4,
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Case ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Risk Level</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cases.map((caseItem, index) => (
              <motion.tr
                key={caseItem.id}
                component={TableRow}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                sx={{
                  '&:hover': {
                    bgcolor: 'rgba(99, 102, 241, 0.05)',
                  },
                }}
              >
                <TableCell>
                  <Typography variant="body2" fontWeight="bold">
                    {caseItem.id}
                  </Typography>
                </TableCell>
                <TableCell>{caseItem.customer}</TableCell>
                <TableCell>{caseItem.date}</TableCell>
                <TableCell>
                  <Chip label={caseItem.risk} size="small" color={getRiskColor(caseItem.risk)} />
                </TableCell>
                <TableCell>
                  <Chip label={caseItem.status} size="small" color={getStatusColor(caseItem.status)} />
                </TableCell>
                <TableCell>
                  <Typography variant="body2" fontWeight="bold">
                    {caseItem.amount}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <IconButton size="small" color="primary">
                    <Visibility fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="primary">
                    <Download fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <MoreVert fontSize="small" />
                  </IconButton>
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
