import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareIcon from '@mui/icons-material/Share';
import Tooltip from '@mui/material/Tooltip';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function LateralBar() {
  const [open, setOpen] = React.useState(false);
  const textoACopiar = '¡Texto a copiar!';

  const handleCopiarClick = async () => {
    try {
      await navigator.clipboard.writeText(textoACopiar);
      handleClick()
    } catch (error) {
      console.error('Error al copiar el texto:', error);
    }
  };

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
    <div className='barra-lateral'>

      <div className='icons-list'>

        <Tooltip className='icon-item' title="Facebook" placement="right">
          <FacebookIcon className='iconF' fontSize='large' />
        </Tooltip>

        <Tooltip className='icon-item' title="Instagram" placement="right">
          <InstagramIcon className='icon-item' fontSize='large' />
        </Tooltip>

      </div>
      <div className='div_icon-share'>
        <Tooltip className='icon-share' title="Compartir" placement="right">

          <ShareIcon onClick={handleCopiarClick} />

        </Tooltip>

      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>This is a success message!</Alert>
      </Snackbar>
    </div>
  );
}