import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Home from './pages/home/Home.tsx';

const router = createBrowserRouter([
 /* {
    path: '/',
    element: <Login />
  },*/
  {
    path: '/',
    element: <App />,
    children: [
       {
        path: '/home',
        element: <Home />
      },
     /* {
        path: '/Clients',
        element: <Clients />
      },
      {
        path: '/Appointment',
        element: <Appointment />
      },
      {
        path: '/Profile',
        element: <SettingsProfile />
      }*/
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
