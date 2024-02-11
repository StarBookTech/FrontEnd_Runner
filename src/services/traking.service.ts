//const HOST = 'https://7dlvv6zq-4210.use2.devtunnels.ms/'
const HOST = 'http://localhost:4210/'
//const HOST = 'https://18.234.24.43:4210/'

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
      const response = await fetch(`${HOST}api/readShipment`, {
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