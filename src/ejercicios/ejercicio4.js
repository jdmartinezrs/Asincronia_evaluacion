/**
 * 4. Consultar todos los usuarios y modificar la respuesta, el resultado de esta consulta
debe ser un nuevo arreglo solo con el nombre y teléfono de cada usuario.
 */

import { obtenerUsuarios } from "../utils/api.js";
import { extraerPropiedades } from "../utils/data.js";


// =====================================================
// FUNCIÓN PRINCIPAL
// =====================================================

export const listarUsuariosNombreTelefono = async () => {

    // SOLICITUD HTTP:
    // Se consulta una sola vez la información de todos los usuarios
    const usuarios = await obtenerUsuarios();

    // PROCESAMIENTO DE DATOS:
    // Se crea un nuevo arreglo con la estructura solicitada usando función genérica
    const usuariosModificados = extraerPropiedades(usuarios, ["name", "phone"]);

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