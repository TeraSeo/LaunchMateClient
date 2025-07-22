import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#2979FF',
        light: '#5B9AFF',
        dark: '#1E5FD9',
      },
      secondary: {
        main: '#E0E0E0',
        light: '#F5F5F5',
        dark: '#B0B0B0',
      },
      background: {
        default: '#1E1E1E',
        paper: '#121212',
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#CCCCCC',
      },
      divider: 'rgba(255, 255, 255, 0.1)',
    },
    typography: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      h1: {
        fontSize: '3.5rem',
        fontWeight: 800,
        lineHeight: 1.1,
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 700,
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: 600,
      },
      h4: {
        fontSize: '1.25rem',
        fontWeight: 600,
      },
      body1: {
        fontSize: '1.125rem',
        lineHeight: 1.6,
      },
      body2: {
        fontSize: '1rem',
        lineHeight: 1.6,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 12,
            padding: '12px 24px',
          },
          contained: {
            background: 'linear-gradient(135deg, #2979FF 0%, #5B9AFF 100%)',
            boxShadow: '0 4px 16px rgba(41, 121, 255, 0.3)',
            '&:hover': {
              background: 'linear-gradient(135deg, #1E5FD9 0%, #2979FF 100%)',
              boxShadow: '0 8px 32px rgba(41, 121, 255, 0.4)',
              transform: 'translateY(-2px)',
            },
          },
          outlined: {
            borderColor: 'rgba(255, 255, 255, 0.2)',
            '&:hover': {
              borderColor: '#2979FF',
              backgroundColor: 'rgba(41, 121, 255, 0.1)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 16,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: 'rgba(18, 18, 18, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          },
        },
      },
    },
  });