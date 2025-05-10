// src/components/MovieCard.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardMedia component="img" height="400" image={posterUrl} alt={movie.title} />
        <CardContent>
          <Typography variant="h6">{movie.title}</Typography>
          <Typography variant="body2">Release Year: {movie.release_date?.slice(0, 4) || 'N/A'}</Typography>
          <Typography variant="body2">Rating: {movie.vote_average || 'N/A'}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default MovieCard;
