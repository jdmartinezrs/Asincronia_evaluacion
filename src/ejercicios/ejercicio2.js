
import promptSync from "prompt-sync";
import { api_url } from "../utils/config.js";

const prompt = promptSync();


// Obtener usuarios
const obtenerUsuarios = async () => {
    const respuesta = await fetch(`${api_url}/users`);
    return await respuesta.json();
};


// Obtener álbumes de un usuario
const obtenerAlbumes = async (userId) => {
    const respuesta = await fetch(`${api_url}/albums?userId=${userId}`);
    return await respuesta.json();
};


// Obtener fotografías de un álbum
const obtenerFotos = async (albumId) => {
    const respuesta = await fetch(`${api_url}/photos?albumId=${albumId}`);
    return await respuesta.json();
};


// Buscar usuario por username
const buscarUsuario = (usuarios, usernameBuscado) => {

    for (const usuario of usuarios) {

        const { username } = usuario;

        if (username.toLowerCase() === usernameBuscado.toLowerCase()) {
            return usuario;
        }
    }

    return null;
};


// Mostrar los datos del usuario
const mostrarUsuario = (usuario) => {

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


// Mostrar álbumes y fotografías
const mostrarAlbumesFotos = async (albumes) => {

    console.log("\n========== ÁLBUMES ==========");

    for (const album of albumes) {

        const {
            id: albumId,
            title
        } = album;

        console.log(`\nÁlbum: ${title}`);

        const fotos = await obtenerFotos(albumId);

        console.log("Fotografías:");

        for (const foto of fotos) {

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


// Función principal
export const listarUsuarioAlbumesFotos = async () => {

    try {

        const usernameBuscado = prompt(
            "Ingrese el nombre de usuario: "
        );

        const usuarios = await obtenerUsuarios();

        const usuarioEncontrado = buscarUsuario(
            usuarios,
            usernameBuscado
        );

        if (usuarioEncontrado === null) {
            console.log(
                "No se encontró un usuario con ese username."
            );
            return;
        }

        mostrarUsuario(usuarioEncontrado);

        const { id } = usuarioEncontrado;

        const albumes = await obtenerAlbumes(id);

        await mostrarAlbumesFotos(albumes);

    } catch (error) {

        console.log("Ocurrió un error:", error);
    }
};