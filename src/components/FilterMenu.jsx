import React, { useState } from 'react';
import { Menu, MenuItem, TextField, Stack, Button, Select, FormControl, InputLabel } from '@mui/material';
import { FILTER_OPTIONS } from '../constants/filterOptions';

export default function FilterMenu({ anchorEl, onClose, filters, setters }) {
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      PaperProps={{ sx: { maxHeight: '80vh', width: 350 } }}
    >
      <MenuItem>
        <Stack spacing={2} sx={{ p: 1, width: '100%' }}>
          <TextField
            label="Surname"
            size="small"
            value={filters.surname}
            onChange={(e) => setters.setSurname(e.target.value)}
          />
          <TextField
            label="Forename"
            size="small"
            value={filters.forename}
            onChange={(e) => setters.setForename(e.target.value)}
          />
          <TextField
            label="Age (+/- 5 years)"
            type="number"
            size="small"
            value={filters.age}
            onChange={(e) => setters.setAge(e.target.value)}
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
                  value={filters.sex}
                  label="Sex"
                  onChange={(e) => setters.setSex(e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  {FILTER_OPTIONS.sex.map(option => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Occupation"
                size="small"
                value={filters.occupation}
                onChange={(e) => setters.setOccupation(e.target.value)}
              />
              <FormControl size="small" fullWidth>
                <InputLabel>County/Country of Origin</InputLabel>
                <Select
                  value={filters.countyOrigin}
                  label="County/Country of Origin"
                  onChange={(e) => setters.setCountyOrigin(e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  {FILTER_OPTIONS.countyOrigin.map(option => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl size="small" fullWidth>
                <InputLabel>Religion</InputLabel>
                <Select
                  value={filters.religion}
                  label="Religion"
                  onChange={(e) => setters.setReligion(e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  {FILTER_OPTIONS.religion.map(option => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl size="small" fullWidth>
                <InputLabel>Literacy</InputLabel>
                <Select
                  value={filters.literacy}
                  label="Literacy"
                  onChange={(e) => setters.setLiteracy(e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  {FILTER_OPTIONS.literacy.map(option => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl size="small" fullWidth>
                <InputLabel>Marital Status</InputLabel>
                <Select
                  value={filters.maritalStatus}
                  label="Marital Status"
                  onChange={(e) => setters.setMaritalStatus(e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  {FILTER_OPTIONS.maritalStatus.map(option => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl size="small" fullWidth>
                <InputLabel>Relationship to Head</InputLabel>
                <Select
                  value={filters.relationship}
                  label="Relationship to Head"
                  onChange={(e) => setters.setRelationship(e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  {FILTER_OPTIONS.relationship.map(option => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
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
                  value={filters.specifiedIllnesses}
                  label="Specified Illnesses"
                  onChange={(e) => setters.setSpecifiedIllnesses(e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  {FILTER_OPTIONS.specifiedIllnesses.map(option => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Number of Years Married"
                type="number"
                size="small"
                value={filters.yearsMarried}
                onChange={(e) => setters.setYearsMarried(e.target.value)}
              />
              <TextField
                label="Number of Children Born"
                type="number"
                size="small"
                value={filters.childrenBorn}
                onChange={(e) => setters.setChildrenBorn(e.target.value)}
              />
              <TextField
                label="Number of Children Living"
                type="number"
                size="small"
                value={filters.childrenLiving}
                onChange={(e) => setters.setChildrenLiving(e.target.value)}
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
  );
}