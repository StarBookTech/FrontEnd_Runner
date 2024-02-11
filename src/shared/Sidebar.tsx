import * as React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareIcon from '@mui/icons-material/Share';
import Tooltip from '@mui/material/Tooltip';

import logo from '../images/LogoRunner.png'


type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Sidebar: React.FC<{ handleClick: any }> = ({ handleClick }) => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const pathActual = window.location.pathname;

    const textoACopiar = '¡Texto a copiar!';
    const [selectedButton, setSelectedButton] = useState(null);

    const clickOptionMenu = (buttonId:any) => {
      setSelectedButton(buttonId);
    };
    const handleCopiarClick = async () => {
        try {
            await navigator.clipboard.writeText(textoACopiar);
            handleClick()
        } catch (error) {
            console.error('Error al copiar el texto:', error);
        }
    };

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            color='white'
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className='classBox'
        >


            <div className='content-sidebar'>
                <img src={logo} width='150' height='150' className='item-center'></img>


                <div className='btn-sidebar'>
                    <Link className={`btn-slice label-btn_n ${selectedButton === 'home' || pathActual ==='/home'? 'option-active' : ''}`} to='/home' key="1"  onClick={() => clickOptionMenu('home')} > INICIO </Link>
                </div>

                <div className='btn-sidebar'>
                    <Link className={`btn-slice label-btn_n ${selectedButton === 'shipments' || pathActual ==='/shipments' ? 'option-active' : ''}`} onClick={() => clickOptionMenu('shipments')} to='/shipments' key="2" > ENVIAR </Link>
                </div>

                <div className='btn-sidebar'>
                    <Link className={`btn-slice label-btn_n ${selectedButton === 'prices' || pathActual ==='/prices' ? 'option-active' : ''}`} onClick={() => clickOptionMenu('prices')} to='/prices' key="3" >PRECIOS </Link>
                </div>

                <div className='btn-sidebar'>
                    <Link className={`btn-slice label-btn_n ${selectedButton === 'traking' || pathActual ==='/traking' ? 'option-active' : ''}`} onClick={() => clickOptionMenu('traking')} to='/traking' key="4" > TRAKING </Link>
                </div>

                <div className='btn-sidebar'>
                <Link to='/singin' key="5" id="home" className={`btn-white_sidebar label-btn`} > INICIAR SESION </Link>
                </div>

                <div className='btn-sidebar'>
                <Link to='/singup' key="6" id="home" className={`btn-outline_sidebar label-btn_r`} > REGISTRARSE</Link>
                </div>

            </div>

            <div className='content-items_sidebar'>
                <hr className='divider-sideber' />
                <div className='icons-list'>

                    <Tooltip className='icon-item' title="Facebook" placement="right">
                        <a href='https://www.facebook.com/mensajeriarunner?mibextid=ZbWKwL' target="_blank">
                            <FacebookIcon className='iconF' fontSize='large' />
                        </a>
                    </Tooltip>

                    <Tooltip className='iconI' title="Instagram" placement="right">
                        <a href='https://www.instagram.com/runner_mensajeria.gt?igsh=MXNtbGZpYnRyNWd2Nw==' target="_blank">
                            <InstagramIcon fontSize='large' />
                        </a>
                    </Tooltip>

                </div>

                <div className='div_icon-share'>
                    <Tooltip className='icon-share' title="Compartir" placement="right">

                        <ShareIcon onClick={handleCopiarClick} />

                    </Tooltip>

                </div>
            </div>




        </Box>
    );

    return (
        <div>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <MenuIcon fontSize='large' onClick={toggleDrawer(anchor, true)} className='icon-menu' />

                    <Drawer
                        className='drawer-sidebar'
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}


export default Sidebar