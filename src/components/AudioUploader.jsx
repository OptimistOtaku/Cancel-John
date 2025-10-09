import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, LinearProgress } from '@mui/material';
import { CloudUpload, Mic, Stop } from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function AudioUploader({ onUpload }) {
  const [recording, setRecording] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploading(true);
      // Simulate upload
      setTimeout(() => {
        setUploading(false);
        onUpload?.(file);
      }, 2000);
    }
  };

  return (
    <Card sx={{ bgcolor: 'background.paper', borderRadius: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Upload or Record Audio</Typography>
        
        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ flex: 1 }}>
            <Button
              variant="contained"
              component="label"
              fullWidth
              startIcon={<CloudUpload />}
              sx={{ py: 2, borderRadius: 3 }}
            >
              Upload Audio File
              <input type="file" hidden accept="audio/*" onChange={handleFileUpload} />
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ flex: 1 }}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={recording ? <Stop /> : <Mic />}
              onClick={() => setRecording(!recording)}
              sx={{ py: 2, borderRadius: 3 }}
              color={recording ? 'error' : 'primary'}
            >
              {recording ? 'Stop Recording' : 'Start Recording'}
            </Button>
          </motion.div>
        </Box>
        
        {uploading && (
          <Box sx={{ mt: 3 }}>
            <LinearProgress />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Processing audio...
            </Typography>
          </Box>
        )}
        
        {recording && (
          <Box className="pulse" sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body2" color="error">
              🔴 Recording in progress...
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
