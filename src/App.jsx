
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import { useTheme } from '@mui/styles';

import Home from './pages/home/Home'
import Airdrops from './pages/airdrops/Airdrops'

import 'react-big-calendar/lib/css/react-big-calendar.css';


const theme = createTheme(
{
      palette: {
      mode: 'light',
      common: {
        black: '#000',
        white: '#fff',
      },
      background: {
        paper: 'rgba(45, 60, 74, 1)',
        default: 'rgba(5, 22, 34, 1)'
      },
      primary: {
        light: 'rgba(93, 210, 201, 1)',
        main: 'rgba(27, 160, 152, 1)',
        dark: 'rgba(0, 113, 106, 1)', 
        contrastText: '#fff'
      },
      secondary: {
        light :'rgba(255, 235, 195, 1)',
        main: 'rgba(222, 185, 146, 1)',
        dark: 'rgba(171, 137, 100, 1)',
        contrastText: '#fff'
      },
      error: {
        light: '#e57373',
        main: '#f44336',
        dark: '#d32f2f',
        contrastText: '#fff'
      },
      text: {
        primary: 'rgba(27, 160, 152, 1)',
        secondary: 'rgba(222, 185, 146, 1)',
        disabled: 'rgba(0, 0, 0, 0.38)',
        hint: 'rgba(0, 0, 0, 0.38)'
      }
    }
  }
)



const App = () =>  {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
           <Route path="/airdrops" element={<Airdrops />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    )
}

export default App;
