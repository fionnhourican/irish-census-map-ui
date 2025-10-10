import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Typography, Box, IconButton, Menu, MenuItem, TextField, Stack, Button, Select, FormControl, InputLabel } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import D3MapVisualization from '../components/D3MapVisualization';
import TownlandDetailsPanel from '../components/TownlandDetailsPanel';
import TownlandDetails from '../components/TownlandDetails';

export default function Map() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTownland, setSelectedTownland] = useState(null);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [viewMode, setViewMode] = useState('map');
  const mapContainerRef = useRef(null);
  
  // Basic filters
  const [surname, setSurname] = useState('');
  const [forename, setForename] = useState('');
  const [age, setAge] = useState('');
  
  // Advanced filters
  const [sex, setSex] = useState('');
  const [occupation, setOccupation] = useState('');
  const [countyOrigin, setCountyOrigin] = useState('');
  const [religion, setReligion] = useState('');
  const [literacy, setLiteracy] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [relationship, setRelationship] = useState('');
  const [specifiedIllnesses, setSpecifiedIllnesses] = useState('');
  const [yearsMarried, setYearsMarried] = useState('');
  const [childrenBorn, setChildrenBorn] = useState('');
  const [childrenLiving, setChildrenLiving] = useState('');

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
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{ sx: { maxHeight: '80vh', width: 350 } }}
        >
          <MenuItem>
            <Stack spacing={2} sx={{ p: 1, width: '100%' }}>
              <TextField
                label="Surname"
                size="small"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
              <TextField
                label="Forename"
                size="small"
                value={forename}
                onChange={(e) => setForename(e.target.value)}
              />
              <TextField
                label="Age (+/- 5 years)"
                type="number"
                size="small"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <TextField
                label="County"
                size="small"
                value="Longford"
                disabled
              />
              
              {showMoreFilters && (
                <>
                  <FormControl size="small" fullWidth>
                    <InputLabel>Sex</InputLabel>
                    <Select
                      value={sex}
                      label="Sex"
                      onChange={(e) => setSex(e.target.value)}
                    >
                      <MenuItem value="">All</MenuItem>
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="Occupation"
                    size="small"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                  />

                  <FormControl size="small" fullWidth>
                    <InputLabel>County/Country of Origin</InputLabel>
                    <Select
                      value={countyOrigin}
                      label="County/Country of Origin"
                      onChange={(e) => setCountyOrigin(e.target.value)}
                    >
                      <MenuItem value="">All</MenuItem>
                      <MenuItem value="Longford">Longford</MenuItem>
                      <MenuItem value="Dublin">Dublin</MenuItem>
                      <MenuItem value="Cork">Cork</MenuItem>
                      <MenuItem value="Galway">Galway</MenuItem>
                      <MenuItem value="Mayo">Mayo</MenuItem>
                      <MenuItem value="England">England</MenuItem>
                      <MenuItem value="Scotland">Scotland</MenuItem>
                      <MenuItem value="America">America</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl size="small" fullWidth>
                    <InputLabel>Religion</InputLabel>
                    <Select
                      value={religion}
                      label="Religion"
                      onChange={(e) => setReligion(e.target.value)}
                    >
                      <MenuItem value="">All</MenuItem>
                      <MenuItem value="Roman Catholic">Roman Catholic</MenuItem>
                      <MenuItem value="Church of Ireland">Church of Ireland</MenuItem>
                      <MenuItem value="Presbyterian">Presbyterian</MenuItem>
                      <MenuItem value="Methodist">Methodist</MenuItem>
                      <MenuItem value="Baptist">Baptist</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl size="small" fullWidth>
                    <InputLabel>Literacy</InputLabel>
                    <Select
                      value={literacy}
                      label="Literacy"
                      onChange={(e) => setLiteracy(e.target.value)}
                    >
                      <MenuItem value="">All</MenuItem>
                      <MenuItem value="Read and Write">Read and Write</MenuItem>
                      <MenuItem value="Read Only">Read Only</MenuItem>
                      <MenuItem value="Cannot Read">Cannot Read</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl size="small" fullWidth>
                    <InputLabel>Marital Status</InputLabel>
                    <Select
                      value={maritalStatus}
                      label="Marital Status"
                      onChange={(e) => setMaritalStatus(e.target.value)}
                    >
                      <MenuItem value="">All</MenuItem>
                      <MenuItem value="Single">Single</MenuItem>
                      <MenuItem value="Married">Married</MenuItem>
                      <MenuItem value="Widowed">Widowed</MenuItem>
                      <MenuItem value="Divorced">Divorced</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl size="small" fullWidth>
                    <InputLabel>Relationship to Head</InputLabel>
                    <Select
                      value={relationship}
                      label="Relationship to Head"
                      onChange={(e) => setRelationship(e.target.value)}
                    >
                      <MenuItem value="">All</MenuItem>
                      <MenuItem value="Head">Head</MenuItem>
                      <MenuItem value="Wife">Wife</MenuItem>
                      <MenuItem value="Son">Son</MenuItem>
                      <MenuItem value="Daughter">Daughter</MenuItem>
                      <MenuItem value="Father">Father</MenuItem>
                      <MenuItem value="Mother">Mother</MenuItem>
                      <MenuItem value="Brother">Brother</MenuItem>
                      <MenuItem value="Sister">Sister</MenuItem>
                      <MenuItem value="Servant">Servant</MenuItem>
                      <MenuItem value="Boarder">Boarder</MenuItem>
                      <MenuItem value="Visitor">Visitor</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="Language Proficiency"
                    size="small"
                    value="Irish and English"
                    disabled
                  />
                  <FormControl size="small" fullWidth>
                    <InputLabel>Specified Illnesses</InputLabel>
                    <Select
                      value={specifiedIllnesses}
                      label="Specified Illnesses"
                      onChange={(e) => setSpecifiedIllnesses(e.target.value)}
                    >
                      <MenuItem value="">All</MenuItem>
                      <MenuItem value="None">None</MenuItem>
                      <MenuItem value="Blind">Blind</MenuItem>
                      <MenuItem value="Deaf and Dumb">Deaf and Dumb</MenuItem>
                      <MenuItem value="Imbecile">Imbecile</MenuItem>
                      <MenuItem value="Lunatic">Lunatic</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="Number of Years Married"
                    type="number"
                    size="small"
                    value={yearsMarried}
                    onChange={(e) => setYearsMarried(e.target.value)}
                  />
                  <TextField
                    label="Number of Children Born"
                    type="number"
                    size="small"
                    value={childrenBorn}
                    onChange={(e) => setChildrenBorn(e.target.value)}
                  />
                  <TextField
                    label="Number of Children Living"
                    type="number"
                    size="small"
                    value={childrenLiving}
                    onChange={(e) => setChildrenLiving(e.target.value)}
                  />

                </>
              )}
              
              <Button
                variant="text"
                size="small"
                onClick={() => setShowMoreFilters(!showMoreFilters)}
              >
                {showMoreFilters ? 'Show Less Filters' : 'Show More Filters'}
              </Button>
            </Stack>
          </MenuItem>
        </Menu>
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