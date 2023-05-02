// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '10% 0',
    textDecoration: 'none !important',
  },
  image: {
    width: '70%',
    alignSelf: 'center',
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none !important',
  },
  genreImage: {
    filter: theme.palette.mode === 'light' ? 'dark' : 'invert(1)',
  },
}));
