import { createMuiTheme } from '@material-ui/core/styles';

export const colors = {
  green: '#55FCB9',
  purple: '#4b3786',
  lightPurple: '#634f9d',
  red: '#ff9494',
  white: '#fff',
};

const theme = createTheme({
  palette: {
    // type: 'dark',
    contrastThreshold: 3,
    tonalOffset: 0.2,
    secondary: {
      main: colors.green,
      contrastText: colors.purple,
    },
    primary: {
      light: colors.lightPurple,
      main: colors.purple,
      // dark: will be calculated from palette.secondary.main,
      contrastText: colors.white,
    },
    error: {
      main: colors.red,
    },
  },
});

export default theme;
