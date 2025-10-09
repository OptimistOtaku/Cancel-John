import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'OTP Requests', value: 45, color: '#DC2626' },
  { name: 'Fake Refunds', value: 25, color: '#F59E0B' },
  { name: 'Remote Access', value: 20, color: '#6366F1' },
  { name: 'Prize Scams', value: 10, color: '#8B5CF6' },
];

export default function TopScamTypes() {
  return (
    <Card sx={{ bgcolor: 'background.paper', borderRadius: 4, height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Top Scam Categories
        </Typography>

        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E293B',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8,
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        <Box sx={{ mt: 3 }}>
          {data.map((item) => (
            <Box key={item.name} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography variant="body2">{item.name}</Typography>
                <Typography variant="body2" fontWeight="bold">
                  {item.value}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={item.value}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  bgcolor: 'rgba(255,255,255,0.1)',
                  '& .MuiLinearProgress-bar': {
                    bgcolor: item.color,
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
