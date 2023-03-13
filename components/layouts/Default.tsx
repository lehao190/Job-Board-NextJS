import React, { ReactNode } from 'react'
import Navbar from '../Navbar/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';

type Props = {
  children: ReactNode
}

// Global Palette
const theme = createTheme({
  palette: {
    primary: {
      main: red[600],
    },
    secondary: {
      light: '#e3f2fd',
      main: '#90caf9',
      dark: '#42a5f5',
      contrastText: 'white',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default function Default({ children }: Props) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar/>
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}