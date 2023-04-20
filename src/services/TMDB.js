/* eslint-disable import/no-extraneous-dependencies */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmbdApiKey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  endpoints: (builder) => ({
    //* Get Genres
    getGenres: builder.query({
      query: () => `/genre/movie/list?api_key=${tmbdApiKey}`,
    }),
    //* Get Movies by [Type]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page }) => {
        // Get by category
        if (
          genreIdOrCategoryName
          && typeof genreIdOrCategoryName === 'string'
        ) {
          return `/movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmbdApiKey}`;
        }
        // Get by genre
        if (
          genreIdOrCategoryName
          && typeof genreIdOrCategoryName === 'number'
        ) {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmbdApiKey}`;
        }

        return `movie/popular?page=${page}&api_key=${tmbdApiKey}`;
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
