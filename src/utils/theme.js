import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffe1d1',
      light: '#ffffff',
      dark: '#cbafa0',
      contrastText: '#7f4a40',
    },
    secondary: {
      main: '#ff9d8d',
      light: '#ffcfbd',
      dark: '#c96d60',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#7f4a40',
      secondary: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      '"Josefin Sans"',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
