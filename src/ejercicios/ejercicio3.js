
import promptSync from "prompt-sync";
import { api_url } from "../utils/config.js";

const prompt = promptSync();


// =====================================================
// SOLICITUD HTTP
// Solicita los posts a la API
// =====================================================

const obtenerPosts = async () => {

    // SOLICITUD HTTP:
    // Se realiza una petición GET al recurso posts
    const respuesta = await fetch(`${api_url}/posts`);

    // CONVERSIÓN DE LA RESPUESTA:
    // Se convierte el cuerpo de la respuesta a formato JSON
    return await respuesta.json();
};


// =====================================================
// SOLICITUD HTTP CON PARÁMETROS
// Solicita los comentarios de un post
// =====================================================

const obtenerComentarios = async (postId) => {

    // ENVÍO DE PARÁMETRO:
    // Se envía el ID del post mediante el parámetro postId
    const respuesta = await fetch(
        `${api_url}/comments?postId=${postId}`
    );

    // CONVERSIÓN DE LA RESPUESTA:
    // Se convierte la respuesta recibida a formato JSON
    return await respuesta.json();
};


// =====================================================
// PROCESAMIENTO DE DATOS
// Busca un post por su título
// =====================================================

const buscarPost = (posts, nombreBuscado) => {

    for (const post of posts) {

        // DESESTRUCTURACIÓN:
        // Se extrae el título del objeto post
        const { title } = post;

        if (title.toLowerCase() === nombreBuscado.toLowerCase()) {
            return post;
        }
    }

    return null;
};


// =====================================================
// PRESENTACIÓN DE DATOS
// Muestra la información del post
// =====================================================

const mostrarPost = (post) => {

    // DESESTRUCTURACIÓN:
    // Se extraen las propiedades necesarias del post
    const {
        id,
        userId,
        title,
        body
    } = post;

    console.log("\n========== POST ==========");
    console.log(`ID: ${id}`);
    console.log(`Usuario ID: ${userId}`);
    console.log(`Título: ${title}`);
    console.log(`Contenido: ${body}`);
};


// =====================================================
// PRESENTACIÓN DE DATOS
// Muestra los comentarios del post
// =====================================================

const mostrarComentarios = (comentarios) => {

    console.log("\n========== COMENTARIOS ==========");

    for (const comentario of comentarios) {

        // DESESTRUCTURACIÓN:
        // Se extraen las propiedades necesarias del comentario
        const {
            id,
            name,
            email,
            body
        } = comentario;

        console.log(`\nID: ${id}`);
        console.log(`Nombre: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Comentario: ${body}`);
        console.log("--------------------------------");
    }
};


// =====================================================
// FUNCIÓN PRINCIPAL
// =====================================================

export const listarPostConComentarios = async () => {

    try {

        // ENTRADA DE DATOS:
        // Se solicita por teclado el nombre/título del post
        const nombreBuscado = prompt(
            "Ingrese el nombre del post: "
        );


        // SOLICITUD HTTP:
        // Se solicitan todos los posts disponibles
        const posts = await obtenerPosts();


        // PROCESAMIENTO DE DATOS:
        // Se busca el post que coincida con el nombre ingresado
        const postEncontrado = buscarPost(
            posts,
            nombreBuscado
        );


        // VALIDACIÓN:
        // Se verifica si se encontró el post
        if (postEncontrado === null) {

            console.log(
                "No se encontró un post con ese nombre."
            );

            return;
        }


        // PRESENTACIÓN DE DATOS:
        // Se muestran los datos del post encontrado
        mostrarPost(postEncontrado);


        // DESESTRUCTURACIÓN:
        // Se obtiene el ID del post encontrado
        const { id } = postEncontrado;


        // SOLICITUD HTTP:
        // Se solicitan los comentarios relacionados con el post
        const comentarios = await obtenerComentarios(id);


        // PRESENTACIÓN DE DATOS:
        // Se muestran los comentarios recibidos
        mostrarComentarios(comentarios);


    } catch (error) {

        // MANEJO DE ERRORES:
        // Captura errores producidos durante las solicitudes
        // o durante el procesamiento de los datos
        console.log("Ocurrió un error:", error);
    }
};

