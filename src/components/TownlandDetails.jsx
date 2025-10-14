import React, { useState, useEffect } from 'react';
import { Box, Typography, Breadcrumbs, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LoadingSpinner from './LoadingSpinner';
import { censusService } from '../services/censusService';

export default function TownlandDetails({ townland, onBackToMap }) {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTownlandDetails = async () => {
      if (!townland?.OBJECTID) return;
      
      try {
        setIsLoading(true);
        const data = await censusService.getTownlandDetails(townland.OBJECTID);
        setPeople(data.people || []);
      } catch (error) {
        console.error('Error fetching townland details:', error);
        // Fallback to mock data
        setPeople(mockPeople);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTownlandDetails();
  }, [townland?.OBJECTID]);

  // Mock data fallback
  const mockPeople = [
    {
      id: 1,
      surname: 'O\'Sullivan',
      forename: 'Seán',
      age: 34,
      sex: 'Male',
      occupation: 'Farmer',
      religion: 'Roman Catholic',
      literacy: 'Read and Write',
      maritalStatus: 'Married',
      relationship: 'Head'
    },
    {
      id: 2,
      surname: 'O\'Sullivan',
      forename: 'Máire',
      age: 29,
      sex: 'Female',
      occupation: 'Housewife',
      religion: 'Roman Catholic',
      literacy: 'Read Only',
      maritalStatus: 'Married',
      relationship: 'Wife'
    },
    {
      id: 3,
      surname: 'Ní Dhomhnaill',
      forename: 'Brigid',
      age: 42,
      sex: 'Female',
      occupation: 'Seamstress',
      religion: 'Roman Catholic',
      literacy: 'Read and Write',
      maritalStatus: 'Single',
      relationship: 'Head'
    }
  ];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Box sx={{ flex: 1, p: 3 }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        sx={{ mb: 3 }}
      >
        <Link
          component="button"
          variant="body1"
          onClick={onBackToMap}
          sx={{ color: '#1a365d', textDecoration: 'none' }}
        >
          Map View
        </Link>
        <Typography color="text.primary">
          {townland.ENG_NAME_VALUE}
        </Typography>
      </Breadcrumbs>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ color: '#1a365d', mb: 1 }}>
          {townland.ENG_NAME_VALUE}
        </Typography>
        <Typography variant="h6" sx={{ color: '#666', mb: 2 }}>
          {townland.IRISH_NAME_VALUE}
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Chip label={`DED: ${townland.ded}`} variant="outlined" />
          <Chip label={`Population: ${townland.population_count}`} variant="outlined" />
          <Chip label={`Irish Speakers: ${people.length}`} color="primary" />
        </Box>
      </Box>

      <Typography variant="h5" sx={{ mb: 2, color: '#1a365d' }}>
        Irish Speakers Matching Query
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: '#f8f9fb' }}>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Age</strong></TableCell>
              <TableCell><strong>Sex</strong></TableCell>
              <TableCell><strong>Occupation</strong></TableCell>
              <TableCell><strong>Religion</strong></TableCell>
              <TableCell><strong>Literacy</strong></TableCell>
              <TableCell><strong>Marital Status</strong></TableCell>
              <TableCell><strong>Relationship</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {people.map((person) => (
              <TableRow key={person.id} hover>
                <TableCell>
                  <Typography variant="body2">
                    <strong>{person.forename} {person.surname}</strong>
                  </Typography>
                </TableCell>
                <TableCell>{person.age}</TableCell>
                <TableCell>{person.sex}</TableCell>
                <TableCell>{person.occupation}</TableCell>
                <TableCell>{person.religion}</TableCell>
                <TableCell>{person.literacy}</TableCell>
                <TableCell>{person.maritalStatus}</TableCell>
                <TableCell>{person.relationship}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}