import React from 'react';
import { Typography, Box } from '@mui/material';

export default function Dashboard() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>
      <Typography variant="body1">
        Dashboard content will be displayed here.
      </Typography>
    </Box>
  );
}