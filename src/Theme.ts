import { createTheme, Theme as MuiTheme } from '@mui/material/styles';
import '@emotion/react';

declare module '@emotion/react' {
  interface Theme extends MuiTheme {
    spacing: (firstFactor: number, secondFactor?: number) => string;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    backgroundColors: {
      comment: string;
      news: string;
    };
    backgroundGradient: {
      header: string;
    };
    backgroundShadows: {
      header: string;
      comment: string;
    };
  }

  interface PaletteOptions {
    backgroundColors: {
      comment: string;
      news: string;
    };
    backgroundGradient: {
      header: string;
    };
    backgroundShadows: {
      header: string;
      comment: string;
    };
  }
}
export const theme = createTheme({
  spacing: (factor: number) => `${factor * 8}px`,
  palette: {
    primary: {
      main: '#fdfefe',
      dark: '#000000',
    },
    background: {
      default: '#e9f3f6',
    },
    text: {
      // primary: '',
      secondary: '#9c9c9c',
    },
    info: {
      main: '#28c3fb',
      dark: '#516eaa',
      light: '#0044cc'
    },
    action: {
      hover: '#0044cc',
    },
    backgroundColors: {
      comment: '#d9e5fe',
      news: '#fdfefe',
    },
    backgroundGradient: {
      header: 'linear-gradient(to right, #0044cc, #0066ff)',
    },
    backgroundShadows: {
      header: '1px 1px 20px 1px rgba(0, 0, 0, 0.6)',
      comment: '1px 3px 6px 0px #74939c4d, 0px 0px 1px 0px #74939c80',
    },
  },
});
