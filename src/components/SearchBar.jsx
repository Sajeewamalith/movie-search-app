// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      onSearch(query);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
      <TextField
        variant="outlined"
        label="Search Movies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
