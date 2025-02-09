"use client"

import { createTheme } from "@mui/material";

export const theme = createTheme ({
  palette: {
    primary: {
      main: '#88a6e3',
    },
    secondary: {
      main: '#193e88',
    },
    background: {
      paper: '#0a0e14',
    },
    text: {
      primary: '#fff',
      secondary: '#000',
    },
    info: {
      main: '#306de4',
    },
  },
  typography: {
    fontFamily: 'Kanit',
    h1: {
      fontSize: 64,
      fontWeight: 500,
      letterSpacing: '0em',
    },
    h2: {
      fontWeight: 500,
      fontSize: 48,
      letterSpacing: '0em',
    },
    h3: {
      fontSize: 36,
      fontWeight: 500,
    },
    h4: {
      fontSize: 24,
      fontWeight: 500,
      letterSpacing: '0em',
    },
    body1: {
      fontSize: 16,
      letterSpacing: '0em',
    },
    body2: {
      fontSize: 16,
      fontWeight: 100,
      letterSpacing: '0em',
    },
    subtitle1: {
      fontSize: 12,
      letterSpacing: '0em',
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 100,
      letterSpacing: '0em',
    },
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: '#fff',
            backgroundColor: '#193e88',
            borderRadius: '10px',
            padding: '5px 20px 5px 20px',
          },
        },
        {
            props: { variant: 'outlined' },
            style: {
              color: '#fff',
              borderRadius: '10px',
              padding: '05px 20px 5px 20px'
            },
        }
      ],


      styleOverrides: {
        contained: {
            color: '#fff',
        },
        outlined: {
            color: '#000'
        },
        sizeSmall: {
          fontSize: '0.55rem',
          padding: '2px 4px', 
          minWidth: '100%',  
        },
      }
    },
  },
});

