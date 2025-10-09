import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const sampleTranscript = [
  { speaker: 'Customer', text: 'Hello, I received a call about my account.', time: '00:12', keywords: [] },
  { speaker: 'Agent', text: 'Please provide your OTP to verify your identity.', time: '00:25', keywords: ['OTP'] },
  { speaker: 'Customer', text: 'My OTP is 123456.', time: '00:35', keywords: ['OTP', '123456'] },
];

export default function LiveTranscript({ transcript = sampleTranscript }) {
  return (
    <Card sx={{ bgcolor: 'background.paper', borderRadius: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Live Transcript</Typography>
        
        <Box sx={{ maxHeight: 400, overflowY: 'auto', mt: 2 }}>
          {transcript.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Box
                sx={{
                  mb: 2,
                  p: 2,
                  borderRadius: 2,
                  bgcolor: entry.speaker === 'Agent' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                  borderLeft: entry.keywords.length > 0 ? '3px solid #DC2626' : 'none',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" fontWeight="bold" color="primary.main">
                    {entry.speaker}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {entry.time}
                  </Typography>
                </Box>
                
                <Typography variant="body2">
                  {entry.text.split(' ').map((word, i) => (
                    <span
                      key={i}
                      style={{
                        color: entry.keywords.includes(word) ? '#DC2626' : 'inherit',
                        fontWeight: entry.keywords.includes(word) ? 'bold' : 'normal',
                        background: entry.keywords.includes(word) ? 'rgba(220, 38, 38, 0.1)' : 'transparent',
                        padding: entry.keywords.includes(word) ? '2px 4px' : '0',
                        borderRadius: '4px',
                      }}
                    >
                      {word}{' '}
                    </span>
                  ))}
                </Typography>
                
                {entry.keywords.length > 0 && (
                  <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {entry.keywords.map((keyword, i) => (
                      <Chip
                        key={i}
                        label={keyword}
                        size="small"
                        color="error"
                        sx={{ fontSize: '0.7rem' }}
                      />
                    ))}
                  </Box>
                )}
              </Box>
            </motion.div>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
