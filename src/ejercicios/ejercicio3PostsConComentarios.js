
import promptSync from "prompt-sync";
import { obtenerPosts, obtenerComentarios } from "../utils/api.js";
import { buscarPorPropiedad } from "../utils/data.js";

const prompt = promptSync();


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
        const postEncontrado = buscarPorPropiedad(
            posts,
            "title",
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

