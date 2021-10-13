import { createTheme } from '@mui/material/styles';

export enum WrapperTheme {
  light = 'light',
  dark = 'dark',
}

const baseTheme = createTheme({
  typography: {
    fontFamily: 'sans-serif',
    fontSize: 14,
  },
});

const darkTheme = createTheme({
  ...baseTheme,
  components: {
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: '#6200EE',
        },
        select: {
          color: 'white',
        },
      },
    },
  },
  palette: {
    mode: WrapperTheme.dark,
    primary: {
      main: '#6200EE',
    },
    secondary: {
      main: '#03DAC6',
    },
  },
});

const lightTheme = createTheme({
  ...baseTheme,
  components: {
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: '#0276FD',
        },
      },
    },
  },
  palette: {
    mode: WrapperTheme.light,
    primary: {
      main: '#0276FD',
    },
    secondary: {
      main: '#26a27b',
    },
  },
});

export { darkTheme, lightTheme };
