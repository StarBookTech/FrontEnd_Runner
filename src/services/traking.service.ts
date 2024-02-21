import { HOST, searchTraking } from '../constants/constants'

export const readAllClients = async () =>{
   try{
    const url = `${HOST}`
    const response = await fetch(url)
    return await response.json()
   }catch(error){
    console.log(error)
return error
   }
}

export const readShipment = async (datos: any) => {
    try {
      const response = await fetch(`${HOST}${searchTraking}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });
      if (!response.ok) {
        throw new Error(`Error al enviar datos: ${response.status}`);
      }
      return await response.json();
    } catch (error: any) {
      console.log(error)
     return {status:500}
    }
  }

  export const deleteClient = async (datos: any) => {
    try {
      const response = await fetch(`${HOST}api/deleteClient`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });
      if (!response.ok) {
        throw new Error(`Error al enviar datos: ${response.status}`);
      }
      return await response.json();
    } catch (error: any) {
     return {status:500}
    }
  }