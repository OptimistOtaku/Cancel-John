import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const data = [
  { month: 'Jan', scams: 45, prevented: 42 },
  { month: 'Feb', scams: 52, prevented: 49 },
  { month: 'Mar', scams: 38, prevented: 37 },
  { month: 'Apr', scams: 61, prevented: 58 },
  { month: 'May', scams: 48, prevented: 46 },
  { month: 'Jun', scams: 55, prevented: 53 },
  { month: 'Jul', scams: 42, prevented: 41 },
  { month: 'Aug', scams: 67, prevented: 64 },
  { month: 'Sep', scams: 58, prevented: 56 },
  { month: 'Oct', scams: 71, prevented: 68 },
];

export default function FraudTrendChart() {
  return (
    <Card sx={{ bgcolor: 'background.paper', borderRadius: 4, height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Fraud Detection Trends
        </Typography>
        <Typography variant="body2" color="success.main" sx={{ mb: 2 }}>
          (+12%) more scams prevented this month
        </Typography>

        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorScams" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DC2626" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#DC2626" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPrevented" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="month" stroke="#94A3B8" />
            <YAxis stroke="#94A3B8" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E293B',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8,
              }}
            />
            <Area
              type="monotone"
              dataKey="scams"
              stroke="#DC2626"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorScams)"
            />
            <Area
              type="monotone"
              dataKey="prevented"
              stroke="#10B981"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorPrevented)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
