import React from 'react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Home from './pages/home/Home.tsx';
import Traking from './pages/traking/Traking.tsx';
import Sends from './pages/sends/Sends.tsx';
import Prices from './pages/prices/Prices.tsx';
import SignIn from './pages/auth/SingIn.tsx';
import SignUp from './pages/auth/SingUp.tsx';
import NotFound from './shared/NotFound.tsx';
import ServicesForm from './pages/sends/ServicesForm.tsx';



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
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/traking/:id?',
        element: <Traking />
      },
    {
        path: '/shipments',
        element: <ServicesForm />
      },
      {
        path: '/prices',
        element: <Prices />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound/>
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />

  </StrictMode>
)
