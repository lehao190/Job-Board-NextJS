import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import UserMenu from './UserMenu';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: red[600],
    },
  },
});

export default function Navbar() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar
        position="sticky"
        color="primary"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            App name
          </Typography>

          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5, textDecoration: 'unset', textTransform: 'capitalize' }}
            >
              Search Jobs
            </Link>

            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5, textDecoration: 'unset', textTransform: 'capitalize' }}
            >
              Post Jobs
            </Link>
          </nav>

          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5, textDecoration: 'unset', textTransform: 'capitalize' }}>
            Login/Register
          </Button>

          <UserMenu />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}