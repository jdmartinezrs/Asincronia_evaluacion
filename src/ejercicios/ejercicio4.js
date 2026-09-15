/**
 * 4. Consultar todos los usuarios y modificar la respuesta, el resultado de esta consulta
debe ser un nuevo arreglo solo con el nombre y teléfono de cada usuario.
 */

import { api_url } from "../utils/config.js";

// =====================================================
// SOLICITUD HTTP
// Consulta todos los usuarios de la API
// =====================================================

const obtenerUsuarios = async () => {

    try {

        // SOLICITUD HTTP:
        // Se realiza una petición GET al recurso users
        const respuesta = await fetch(`${api_url}/users`);

        // CONVERSIÓN DE LA RESPUESTA:
        // Se convierte el cuerpo de la respuesta a formato JSON
        return await respuesta.json();

    } catch (error) {

        // MANEJO DE ERRORES:
        // Captura errores producidos durante la solicitud
        console.log("Ocurrió un error al consultar los usuarios:", error);

        return [];
    }
};


// =====================================================
// PROCESAMIENTO DE DATOS
// Modifica la estructura de los usuarios
// =====================================================

const modificarUsuarios = (usuarios) => {

    // NUEVO ARREGLO:
    // Se crea un arreglo vacío para almacenar únicamente
    // el nombre y teléfono de cada usuario
    const usuariosModificados = [];

    for (const usuario of usuarios) {

        // DESESTRUCTURACIÓN:
        // Se extraen solamente las propiedades necesarias
        const {
            name,
            phone
        } = usuario;

        // Se agrega un nuevo objeto al arreglo
        usuariosModificados.push({
            name,
            phone
        });
    }

    return usuariosModificados;
};


// =====================================================
// FUNCIÓN PRINCIPAL
// =====================================================

export const listarUsuariosNombreTelefono = async () => {

    // SOLICITUD HTTP:
    // Se consulta una sola vez la información de todos los usuarios
    const usuarios = await obtenerUsuarios();

    // PROCESAMIENTO DE DATOS:
    // Se crea un nuevo arreglo con la estructura solicitada
    const usuariosModificados = modificarUsuarios(usuarios);

    // PRESENTACIÓN DE DATOS:
    // Se muestra el nuevo arreglo en consola
    console.log("\n========== USUARIOS ==========");

    for (const usuario of usuariosModificados) {

        const {
            name,
            phone
        } = usuario;

        console.log(`Nombre: ${name}`);
        console.log(`Teléfono: ${phone}`);
        console.log("--------------------------------");
    }
};