/*
1. Listar todas las tareas pendientes por cada usuario registrado en la API
*/

import { obtenerUsuarios, obtenerTareas } from "../utils/api.js"

//Función para mostrar las tareas pendientes de un usuario.
//Recibe las tareas para recorrerlas y el usuario para identificar cuáles le pertenecen.
const mostrarTaresPendientes = async (tareas, usuario) => {
    //Destructurar los datos necesarios del usuario
    const { id, name } = usuario

    console.log("*".repeat(30))
    console.log(`Usuario: ${name}`)
    console.log("Tareas pendientes:")

    //Recorrer las tareas para identificar las pendientes del usuario
    for (const { userId, title, completed } of tareas) {

        if (userId === id && completed === false) {
            console.log(`-${title}`)

        }
    }
}

//Función asíncrona que obtiene los usuarios y sus tareas desde la API,
//recorre cada usuario y muestra sus tareas pendientes.
//Se exporta para poder ejecutarla desde otros archivos, como el menú.
export const listarTareasPendientesPorUsuariosRegistradosEnLaApi = async () => {
    try {
         //Esperar la resolución de la promesa con los datos de los usuarios
        const usuarios = await obtenerUsuarios()
        //Obtener datos de tareas
        const tareas = await obtenerTareas()
          //Recorrer cada usuario y mostrar sus tareas pendientes
        for (const usuario of usuarios) {
            mostrarTaresPendientes(tareas, usuario)
        }
//Capturar y mostrar cualquier error producido durante la ejecución de las operaciones asíncronas
    } catch (error) {
        console.log("Ocurrió un error", error)
    }
}

