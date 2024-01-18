import React from 'react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Home from './pages/home/Home.tsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Traking from './pages/traking/Traking.tsx';
import Sends from './pages/sends/Sends.tsx';
import Prices from './pages/prices/Prices.tsx';
import SignIn from './pages/auth/SingIn.tsx';
import SignUp from './pages/auth/SingUp.tsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2b5aa2',
      light: '#2b5aa2',
      dark: '#213765',
      contrastText: '#FFFFFF',
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/singup',
    element: <SignUp />
  },
  {
    path: '/singin',
    element: <SignIn />
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/traking',
        element: <Traking />
      },
      {
        path: '/shipments',
        element: <Sends />
      },
      {
        path: '/prices',
        element: <Prices />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>

  </StrictMode>
)
