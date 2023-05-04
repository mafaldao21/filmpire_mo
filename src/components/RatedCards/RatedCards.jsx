/* eslint-disable import/no-cycle */
import { Box, Typography } from '@mui/material';
import React from 'react';

import { Movie } from '../index.js';

const RatedCards = ({ title, data }) => (
  <Box>
    <Typography variant="h5" gutterBottom>
      {title}
    </Typography>
    <Box display="flex" flexWrap="wrap">
      {data?.results?.map((movie, i) => (
        <Movie key={movie.id} movie={movie} i={i} />
      ))}
    </Box>
  </Box>
);

export default RatedCards;
