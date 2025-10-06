import React from 'react';
import { Typography, Box } from '@mui/material';
import TableauReact from '../components/TableauReact';

export default function Dashboard() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Irish speakers in longford
      </Typography>
      <TableauReact />
    </Box>
  );
}