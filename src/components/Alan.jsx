import { useContext, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  selectGenreOrCategory,
  searchMovie,
} from '../features/currentGenreOrCategory';
import { ColorModeContext } from '../utils/ToggleColorMode';
import { fetchToken } from '../utils';

const useAlan = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { setMode } = useContext(ColorModeContext);

  useEffect(() => {
    alanBtn({
      key: 'f59fb9ab4d224eed6d188a7534029d9a2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
        if (command === 'chooseGenre') {
          const foundGenre = genres.find(
            (g) => g.name.toLowerCase() === genreOrCategory.toLowerCase(),
          );
          if (foundGenre) {
            history.push('/');
            dispatch(selectGenreOrCategory(foundGenre.id));
          } else {
            // if top rated, upcoming or popular
            const parsedGenre = genreOrCategory.startsWith('top')
              ? 'top_rated'
              : genreOrCategory;
            history.push('/');
            dispatch(selectGenreOrCategory(parsedGenre));
          }
        } else if (command === 'changeMode') {
          if (mode === 'light') {
            setMode('light');
          } else {
            setMode('dark');
          }
        } else if (command === 'login') {
          fetchToken();
        } else if (command === 'logout') {
          localStorage.clear();
          window.location.href = '/';
        } else if (command === 'search') {
          dispatch(searchMovie(query));
        }
      },
    });
  }, []);
};

export default useAlan;
