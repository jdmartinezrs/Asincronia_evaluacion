
import promptSync from "prompt-sync";
import { obtenerUsuarios, obtenerAlbumes, obtenerFotos } from "../utils/api.js";
import { buscarPorPropiedad } from "../utils/data.js";

const prompt = promptSync();


// =====================================================
// PROCESAMIENTO Y PRESENTACIÓN DE DATOS
// =====================================================

const mostrarUsuario = (usuario) => {

    // DESESTRUCTURACIÓN:
    // Se extraen las propiedades necesarias del usuario
    const {
        id,
        name,
        username,
        email,
        phone,
        website
    } = usuario;

    console.log("\n========== DATOS DEL USUARIO ==========");
    console.log(`ID: ${id}`);
    console.log(`Nombre: ${name}`);
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Teléfono: ${phone}`);
    console.log(`Website: ${website}`);
};


// =====================================================
// PROCESAMIENTO DE ÁLBUMES Y FOTOGRAFÍAS
// =====================================================

/*
const mostrarAlbumesFotos = async (albumes) => {

    console.log("\n========== ÁLBUMES ==========");

    for (const album of albumes) {

        // DESESTRUCTURACIÓN:
        const {
            id: albumId,
            title
        } = album;

        console.log(`\nÁlbum: ${title}`);

        // SOLICITUD HTTP:
        // Se solicitan las fotografías del álbum
        const fotos = await obtenerFotos(albumId);

        console.log("Fotografías:");

        for (const foto of fotos) {

            // DESESTRUCTURACIÓN:
            const {
                id: fotoId,
                title: fotoTitle,
                url,
                thumbnailUrl
            } = foto;

            console.log(`  ID: ${fotoId}`);
            console.log(`  Título: ${fotoTitle}`);
            console.log(`  URL: ${url}`);
            console.log(`  Miniatura: ${thumbnailUrl}`);
            console.log("--------------------------------");
        }
    }
};
*/


// =====================================================
// PROCESAMIENTO DE ÁLBUMES Y FOTOGRAFÍAS
// CON LÍMITE TEMPORAL DE PRUEBA
// =====================================================

const mostrarAlbumesFotos = async (albumes) => {

    console.log("\n========== ÁLBUMES ==========");

    // GENERACIÓN DE DATOS LOCALES:
    // Se crean variables para controlar el límite de fotografías
    let contadorFotos = 0;
    const limiteFotos = 10;

    for (const album of albumes) {

        // DESESTRUCTURACIÓN:
        // Se extraen el ID y el título del álbum
        const {
            id: albumId,
            title
        } = album;

        console.log(`\nÁlbum: ${title}`);

        // SOLICITUD HTTP:
        // Se solicitan las fotografías correspondientes al álbum
        const fotos = await obtenerFotos(albumId);

        console.log("Fotografías:");

        for (const foto of fotos) {

            // CONTROL DEL LÍMITE:
            if (contadorFotos >= limiteFotos) {
                return;
            }

            // DESESTRUCTURACIÓN:
            // Se extraen las propiedades necesarias de la fotografía
            const {
                id: fotoId,
                title: fotoTitle,
                url,
                thumbnailUrl
            } = foto;

            console.log(`  ID: ${fotoId}`);
            console.log(`  Título: ${fotoTitle}`);
            console.log(`  URL: ${url}`);
            console.log(`  Miniatura: ${thumbnailUrl}`);
            console.log("--------------------------------");

            contadorFotos++;
        }
    }
};


// =====================================================
// FUNCIÓN PRINCIPAL
// =====================================================

export const listarUsuarioAlbumesFotos = async () => {

    try {

        // ENTRADA DE DATOS:
        // Se solicita al usuario el username mediante teclado
        const usernameBuscado = prompt(
            "Ingrese el nombre de usuario: "
        );


        // SOLICITUD HTTP:
        // Se solicitan los usuarios disponibles en la API
        const usuarios = await obtenerUsuarios();


        // PROCESAMIENTO DE DATOS:
        // Se busca el usuario que coincida con el username ingresado
        const usuarioEncontrado = buscarPorPropiedad(
            usuarios,
            "username",
            usernameBuscado
        );


        // VALIDACIÓN:
        // Se verifica si se encontró un usuario
        if (usuarioEncontrado === null) {

            console.log(
                "No se encontró un usuario con ese username."
            );

            return;
        }


        // PRESENTACIÓN DE DATOS:
        // Se muestran los datos del usuario encontrado
        mostrarUsuario(usuarioEncontrado);


        // DESESTRUCTURACIÓN:
        // Se extrae el ID del usuario encontrado
        const { id } = usuarioEncontrado;


        // SOLICITUD HTTP:
        // Se utiliza el ID del usuario para solicitar sus álbumes
        const albumes = await obtenerAlbumes(id);


        // PROCESAMIENTO DE DATOS:
        // Se recorren los álbumes y se solicitan sus fotografías
        await mostrarAlbumesFotos(albumes);


    } catch (error) {

        // MANEJO DE ERRORES:
        // Captura errores producidos durante la ejecución
        // de las solicitudes o del procesamiento
        console.log("Ocurrió un error:", error);
    }
};

