// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Grid, Typography, CircularProgress } from '@mui/material';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';

const API_KEY = '7d4d5137844c1e2eb1bed1b1b05138fb'; // Replace with your TMDb API Key

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = async (query) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: API_KEY,
            query,
          },
        }
      );
      setMovies(res.data.results);
    } catch (err) {
      console.error('Error fetching movies:', err);
    }
    setLoading(false);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Movie Explorer
      </Typography>
      <SearchBar onSearch={searchMovies} />
      {loading ? (
        <CircularProgress sx={{ display: 'block', margin: '2rem auto' }} />
      ) : (
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default App;
