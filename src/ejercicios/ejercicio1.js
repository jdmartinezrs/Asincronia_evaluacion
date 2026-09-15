/*
1. Listar todas las tareas pendientes por cada usuario registrado en la API
*/
import { api_url } from "../utils/config.js"

export const listarTareasPendientesPorUsuariosRegistradosEnLaApi = async () => {
    try {
        //Fetch para obtener usuarios
        const respuestaUsers = await fetch(`${api_url}/users`)
        const dataUsers = await respuestaUsers.json()


        //Fetch para obtener  Tareas
        const respuestaTodos = await fetch(`${api_url}/todos`)
        const dataTodos = await respuestaTodos.json()

        //Recorrer usuarios 
        for (const dataUser of dataUsers) {
            console.log("*".repeat(30));
            console.log("*".repeat(30));
            console.log(`Usuario: ${dataUser.name}`)
            console.log("Tareas pendientes: ")

            for (const dataTodo of dataTodos) {
                //Verificar tarea pertenezca al usuario y esté pendiente 
                if (dataTodo.userId === dataUser.id && dataTodo.completed === false) {
                    console.log(`-${dataTodo.title}`)

                }
            }
        }
    } catch (error) {
        console.log("Ocurrió un error", error)
    }
}

