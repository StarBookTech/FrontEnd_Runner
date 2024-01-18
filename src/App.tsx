
import * as React from 'react';
import './App.css'
import DrawerAppBar from './shared/DrawerAppBar'
import { Outlet } from "react-router-dom"
import Footer from './shared/Footer';
import LateralBar from './shared/LateralBar';

import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <>
      <div className='container-app'>

        <div className='shared_container'>
          <LateralBar />
          <div className='shared_container-bar'>
              <DrawerAppBar handleClick={handleClick} />
          </div>
        </div>

        <Outlet />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>Compartelo con tus amigos!</Alert>
        </Snackbar>
        <Footer />
      </div>
    </>
  )
}

export default App
