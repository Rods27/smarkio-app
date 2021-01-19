import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#e0e0e0',
      light: '#ffffff',
      dark: '#aeaeae',
      contrastText: '#000000',
    },
    secondary: {
      main: '#546e7a',
      light: '#819ca9',
      dark: '#29434e',
      contrastText: '#ffffff'
    }
  },
  typography: {
    fontSize: 14,
  },
});
