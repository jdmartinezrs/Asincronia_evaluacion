/*
1. Listar todas las tareas pendientes por cada usuario registrado en la API
*/
import {api_url} from "../utils/config.js"

export const listarTareasPendientesPorUsuariosRegistradosEnLaApi = async()=>{
    try{
const response = await fetch(`${api_url}/users`)
const data = await response.json()
console.log(data)     

    }catch(error){
        console.log("Ocurrió un error", error)
    }
}

