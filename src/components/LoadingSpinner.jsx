import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export default function LoadingSpinner({ size = 40 }) {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100%',
        minHeight: '200px'
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
}