import React from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select'

const Sortbar = () => {
  const [sortBy, setSortBy] = React.useState('');

  return (
    <Box sx={{margin: '10px 0px'}}>
      <FormControl sx={{ width: '200px' }}>
        <InputLabel>Sort by</InputLabel>
        <Select
          value={sortBy}
          label="Sort by"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <MenuItem value={'option 1'}>Option 1</MenuItem>
          <MenuItem value={'option 2'}>Option 2</MenuItem>
          <MenuItem value={'option 3'}>Option 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Sortbar