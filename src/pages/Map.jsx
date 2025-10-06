import React, { useState } from 'react';
import { Typography, Box, IconButton, Menu, MenuItem, TextField, Stack } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import TableauReact from '../components/TableauReact';

export default function Map() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4">
          Irish speakers in longford
        </Typography>
        <IconButton onClick={handleFilterClick}>
          <FilterListIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>
            <Stack spacing={2} sx={{ p: 1, minWidth: 200 }}>
              <TextField
                label="Min Age"
                type="number"
                size="small"
                value={minAge}
                onChange={(e) => setMinAge(e.target.value)}
              />
              <TextField
                label="Max Age"
                type="number"
                size="small"
                value={maxAge}
                onChange={(e) => setMaxAge(e.target.value)}
              />
            </Stack>
          </MenuItem>
        </Menu>
      </Box>
      <Box sx={{ flex: 1 }}>
        <TableauReact />
      </Box>
    </Box>
  );
}