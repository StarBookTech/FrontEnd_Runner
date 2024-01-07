import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const DrawerAppBar:React.FC<{ handleClick: any}> = ({handleClick}) => {

  return (
    <div className='appbar'>


      <div className="section-left">

        <div className="sidebar">
          <Sidebar handleClick={handleClick} />
        </div>

        <div className='btn-white'>
          <a className='label-btn'>INICIAR SESION</a>
        </div>

        <div className='btn-outline'>
          <a className='label-btn_r'>REGISTRAR</a>
        </div>
      </div>


      <div className="section-rigth">

        <div className='btn-slice'>
          <Link to='/home' key="1">
            <a className='label-btn_n'>INICIO</a>
          </Link>
        </div>

        <div className='btn-slice'>
          <a className='label-btn_n'>ENVIAR</a>
        </div>

        <div className='btn-slice'>
          <a className='label-btn_n'>PRECIOS</a>
        </div>

        <div className='btn-slice'>
          <a className='label-btn_n'>TRAKING</a>
        </div>
      </div>

    </div>
  );
}


export default DrawerAppBar