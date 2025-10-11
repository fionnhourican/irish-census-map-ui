import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import D3MapVisualization from '../components/D3MapVisualization';
import TownlandDetailsPanel from '../components/TownlandDetailsPanel';
import TownlandDetails from '../components/TownlandDetails';
import FilterMenu from '../components/FilterMenu';
import { useFilters } from '../hooks/useFilters';

export default function Map() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTownland, setSelectedTownland] = useState(null);
  const [viewMode, setViewMode] = useState('map');
  const mapContainerRef = useRef(null);
  const { filters, setters } = useFilters();

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTownlandClick = useCallback((townland) => {
    setSelectedTownland(townland);
    console.log('Clicked townland:', townland.ENG_NAME_VALUE, 'ID:', townland.OBJECTID);
  }, []);

  const handleMoreInfo = useCallback((townland) => {
    setViewMode('townland');
  }, []);

  const handleBackToMap = useCallback(() => {
    setViewMode('map');
    setSelectedTownland(null);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mapContainerRef.current && !mapContainerRef.current.contains(event.target) && selectedTownland) {
        setSelectedTownland(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedTownland]);

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4">
          Irish speakers in longford
        </Typography>
        <IconButton onClick={handleFilterClick}>
          <FilterListIcon />
        </IconButton>
        <FilterMenu 
          anchorEl={anchorEl}
          onClose={handleClose}
          filters={filters}
          setters={setters}
        />
      </Box>
      {viewMode === 'map' ? (
        <Box sx={{ flex: 1, display: 'flex', gap: 2 }} ref={mapContainerRef}>
          <D3MapVisualization 
            onTownlandClick={handleTownlandClick} 
            selectedTownlandId={selectedTownland?.OBJECTID}
          />
          <TownlandDetailsPanel 
            townland={selectedTownland}
            onClose={() => setSelectedTownland(null)}
            onMoreInfo={handleMoreInfo}
          />
        </Box>
      ) : (
        <TownlandDetails 
          townland={selectedTownland}
          onBackToMap={handleBackToMap}
        />
      )}
    </Box>
  );
}