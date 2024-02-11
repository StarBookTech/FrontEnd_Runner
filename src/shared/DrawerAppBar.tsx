import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

import React, { useState, useEffect } from 'react';

const DrawerAppBar:React.FC<{ handleClick: any}> = ({handleClick}) => {

  const [scrolling, setScrolling] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const clickOptionMenu = (buttonId:any) => {
    setSelectedButton(buttonId);
  };

  const pathActual = window.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpia el listener del evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`appbar ${scrolling ? 'scroll' : ''}`}>

      <div className="section-left">

        <div className="sidebar">
          <Sidebar handleClick={handleClick} />
        </div>

        <Link to='/singin' key="5" id="home" className={`btn-white label-btn`} > INICIAR SESION </Link>
        <Link to='/singup' key="6" id="home" className={`btn-outline label-btn_r`} > REGISTRARSE</Link>
      </div>

      <div className="section-rigth">

          <Link to='/home' key="1" id="home" className={`btn-slice label-btn_n ${selectedButton === 'home' || pathActual ==='/home'? 'option-active' : ''}`} onClick={() => clickOptionMenu('home')}> INICIO </Link>
          <Link to='/shipments' key="2" className={`btn-slice label-btn_n ${selectedButton === 'shipments' || pathActual ==='/shipments' ? 'option-active' : ''}`} onClick={() => clickOptionMenu('shipments')}> ENVIAR </Link>
          <Link to='/prices' key="3" className={`btn-slice label-btn_n ${selectedButton === 'prices' || pathActual ==='/prices' ? 'option-active' : ''}`} onClick={() => clickOptionMenu('prices')}> PRECIOS </Link>
          <Link to='/traking' key="4" className={`btn-slice label-btn_n ${selectedButton === 'traking' || pathActual ==='/traking' ? 'option-active' : ''}`} onClick={() => clickOptionMenu('traking')}> TRAKING </Link>

      </div>
    </div>
  );
}


export default DrawerAppBar