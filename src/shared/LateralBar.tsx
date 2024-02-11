import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShareIcon from '@mui/icons-material/Share';
import Tooltip from '@mui/material/Tooltip';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Logo from '../images/LogoRunner.png'

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
<img src={Logo} className='logo_lateral'></img>
      <div className='icons-list'>
        
        <Tooltip className='icon-item' title="Facebook" placement="right">
          <a href='https://www.facebook.com/mensajeriarunner?mibextid=ZbWKwL' target="_blank">
            <FacebookIcon className='iconF' fontSize='large' />
          </a>
        </Tooltip>

        <Tooltip className='icon-item' title="Instagram" placement="right">
          <a href='https://www.instagram.com/runner_mensajeria.gt?igsh=MXNtbGZpYnRyNWd2Nw==' target="_blank">
            <InstagramIcon fontSize='large' />
          </a>
        </Tooltip>

        <Tooltip className='icon-item' title="WhatsApp" placement="right">
          <a href='#' target="_blank">
            <WhatsAppIcon fontSize='large' />
          </a>
        </Tooltip>

      </div>

      <div className='div_icon-share'>
        <Tooltip className='icon-share' title="Compartir" placement="right">
          <ShareIcon onClick={handleCopiarClick} />
        </Tooltip>

      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>Compartelo con tus amigos!</Alert>
      </Snackbar>
    </div>
  );
}