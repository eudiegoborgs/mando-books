import { createTheme } from '@material-ui/core/styles'

export const colors = {
  yellow: '#fbc02d',
  errorRed: '#b71c1c',
  lightRed: '#ff8a80',
  red: '#f44336',
  white: '#fff',
};

const theme = createTheme({
  palette: {
    // type: 'dark',
    contrastThreshold: 3,
    tonalOffset: 0.2,
    secondary: {
      main: colors.yellow,
      contrastText: colors.red,
    },
    primary: {
      light: colors.lightRed,
      main: colors.red,
      contrastText: colors.white,
    },
    error: {
      main: colors.errorRed,
    },
  },
})

export default theme
