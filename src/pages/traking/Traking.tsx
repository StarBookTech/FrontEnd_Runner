import React, { useEffect, useState } from "react";
import icono from "../../assets/icono.png"
import check from "../../assets/check.png"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MopedOutlinedIcon from '@mui/icons-material/MopedOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import { useParams } from 'react-router-dom';
import { readShipment } from "../../services/traking.service";
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  guia_traking: yup.string().required('Username is required')
});

type FormValues = {
  guia_traking: string;
};

function Traking() {
  const { id } = useParams<{ id: string }>();

  const [stateTraking, setStateTraking] = useState(0);
  let guiaNum = ''


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  // Función para aumentar el contador
  const aumentarContador = async () => {

    const obj = { s_guideNumber: guiaNum }
    const state = await readShipment(obj)
    if (state.status == 200) {
      setStateTraking(state.data[0].fk_state);
    }
  };

  const searchTraking = () => {
    if (id != undefined) {
      guiaNum = id
      aumentarContador()
      const intervalo = setInterval(aumentarContador, 5000);
      return () => {
        clearInterval(intervalo);
      };
    }
  }

  const subSearchTraking = ()=>{
    
    aumentarContador()
    const intervalo = setInterval(aumentarContador, 5000);
    return () => {
      clearInterval(intervalo);
    };
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {

    guiaNum = data.guia_traking
    subSearchTraking()
  };

  useEffect(() => {
    searchTraking()
  }, []);

  const theme = createTheme({
    palette: {
      secondary: {
        main: '#ffffff',
        light: '#ffffff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffffff',
      },
    },
  });


  const detail = (

    <div className="detail_traking">

        <label className="text_detail"><span className="span_detail">Número de guía:</span> ffasdsa</label>
        <label className="text_detail"><span className="span_detail">Estado:</span> sadasd</label>
        <label className="text_detail"><span className="span_detail">Remitente:</span> sads</label>
        <label className="text_detail"><span className="span_detail">Destinatario:</span> dfdsa</label>
        <label className="text_detail"><span className="span_detail">Acuse de recibido:</span> sads</label>

      </div>
  )


  const trakingg = (
    <div className="section-traking states-traking">

      <div className="item-traking " >
        <img src={icono} width={125} height={125} className="icom-traking"></img>
        <label className="label-item_traking">PENDIENTE</label>
        <div className="check-traking check-active_traking">
          <img src={check} className="icon-check_traking "></img>
        </div>
      </div>

      <div className="traking-slice"></div>

      <div className="item-traking">
        <img src={icono} width={125} height={125} className="icom-traking"></img>
        <label className="label-item_traking">RECOLECTADO</label>
        <div
          className={`check-traking ${stateTraking >= 2 ? 'check-active_traking' : ''}`}
        >
          {stateTraking >= 2 && (
            <img src={check} className="icon-check_traking"></img>
          )}
        </div>
      </div>

      <div className="traking-slice"></div>

      <div className="item-traking">
        <img src={icono} width={125} height={125} className="icom-traking"></img>
        <label className="label-item_traking">ALMACENADO</label>
        <div
          className={`check-traking ${stateTraking >= 3 ? 'check-active_traking' : ''}`}
        >
          {stateTraking >= 3 && (
            <img src={check} className="icon-check_traking"></img>
          )}
        </div>
      </div>

      <div className="traking-slice"></div>
      <div className="item-traking">
        <img src={icono} width={125} height={125} className="icom-traking"></img>
        <label className="label-item_traking">RUTA ENTREGA</label>
        <div
          className={`check-traking ${stateTraking >= 4 ? 'check-active_traking' : ''}`}
        >
          {stateTraking >= 4 && (
            <img src={check} className="icon-check_traking"></img>
          )}
        </div>
      </div>

      <div className="traking-slice"></div>
      <div className="item-traking">
        <img src={icono} width={125} height={125} className="icom-traking"></img>
        <label className="label-item_traking">ENTREGADO</label>
        <div
          className={`check-traking ${stateTraking >= 5 ? 'check-active_traking' : ''}`}
        >
          {stateTraking >= 5 && (
            <img src={check} className="icon-check_traking"></img>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className=" constainer_traking">

      <div className="section-traking_guia">
        <ThemeProvider theme={theme}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="box-input_traking" color="secondary" >

            <MopedOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} color="secondary" className="text-input" fontSize="medium" />
            <div>
              <TextField id="input-with-sx" label="Buscar guia" variant="standard" {...register('guia_traking')} />
            </div>

            <Button variant="contained" onClick={handleSubmit(onSubmit)}><SendIcon />
            </Button>
            <label>{guiaNum}</label>
          </Box>
        </ThemeProvider>
      </div>

      {stateTraking == 0 ? <>
      <h1 className="title_traking">
        Verifica el seguimiento de tu envío aquí
      </h1>
      </> : trakingg}
      {stateTraking == 0 ? <></> : detail}

    </div>
  );
}


export default Traking