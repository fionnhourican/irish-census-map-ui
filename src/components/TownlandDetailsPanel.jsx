import React from 'react';
import { Typography, Box, IconButton, Paper, Table, TableBody, TableRow, TableCell, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function TownlandDetailsPanel({ townland, onClose, onMoreInfo }) {
  if (!townland) return null;

  return (
    <Paper sx={{ width: 300, p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography variant="h6">
          {townland.ENG_NAME_VALUE}
        </Typography>
        <IconButton size="small" onClick={onClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell><strong>Irish Name:</strong></TableCell>
            <TableCell>{townland.IRISH_NAME_VALUE}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>DED:</strong></TableCell>
            <TableCell>{townland.ded}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Population:</strong></TableCell>
            <TableCell>{townland.population_count}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button 
        variant="contained" 
        fullWidth 
        sx={{ mt: 2 }}
        onClick={() => onMoreInfo(townland)}
      >
        More Info
      </Button>
    </Paper>
  );
}