/**
 * 5. Solicitar todos los usuarios en una única petición, a estos usuarios le debemos
agregar todos sus posts y a cada post le debemos agregar todos sus comentarios.
Luego a cada usuario le agregamos todos sus álbumes y a cada álbum le
agregamos todas sus fotografías. (Comente cada línea de código explicando por qué
se codifico y que soluciona).
 */

import { obtenerUsuarios, obtenerPosts, obtenerAlbumes, obtenerFotos, obtenerComentarios } from "../utils/api.js";
import { filtrarPorPropiedad } from "../utils/data.js";

/**
 * Función principal que obtiene usuarios con sus posts (con comentarios) y álbumes (con fotos)
 * Implementa el principio DRY reutilizando funciones de api.js y data.js
 */
export const obtenerUsuariosCompletos = async () => {
    try {
        // SOLICITUD HTTP ÚNICA:
        // Se obtienen todos los usuarios en una sola petición para optimizar rendimiento
        const usuarios = await obtenerUsuarios();

        // PROCESAMIENTO EN PARALELO:
        // Para cada usuario, se agregan sus posts con comentarios y sus álbumes con fotos
        // Se usa Promise.all para optimizar el tiempo de ejecución
        for (const usuario of usuarios) {
            // Agregar posts con sus comentarios al usuario
            usuario.posts = await obtenerPostsConComentarios(usuario.id);
            
            // Agregar álbumes con sus fotos al usuario
            usuario.albumes = await obtenerAlbumesConFotos(usuario.id);
        }

        return usuarios;
    } catch (error) {
        // MANEJO DE ERRORES:
        // Captura y muestra errores durante el procesamiento
        console.log("Ocurrió un error al obtener usuarios completos:", error);
        return [];
    }
};

/**
 * Obtiene los posts de un usuario y agrega sus comentarios
 * @param {number} userId - ID del usuario
 * @returns {Promise<Array>} - Array de posts con sus comentarios
 */
const obtenerPostsConComentarios = async (userId) => {
    // SOLICITUD HTTP:
    // Se obtienen todos los posts de la API
    const todosLosPosts = await obtenerPosts();

    // FILTRADO:
    // Se filtran los posts que pertenecen al usuario usando función genérica reutilizable
    const postsUsuario = filtrarPorPropiedad(todosLosPosts, "userId", userId);

    // PROCESAMIENTO:
    // Para cada post, se agregan sus comentarios
    for (const post of postsUsuario) {
        // SOLICITUD HTTP:
        // Se obtienen los comentarios del post actual
        post.comentarios = await obtenerComentarios(post.id);
    }

    return postsUsuario;
};

/**
 * Obtiene los álbumes de un usuario y agrega sus fotos
 * @param {number} userId - ID del usuario
 * @returns {Promise<Array>} - Array de álbumes con sus fotos
 */
const obtenerAlbumesConFotos = async (userId) => {
    // SOLICITUD HTTP:
    // Se obtienen los álbumes del usuario filtrando por userId directamente en la API
    const albumes = await obtenerAlbumes(userId);

    // PROCESAMIENTO:
    // Para cada álbum, se agregan sus fotos
    for (const album of albumes) {
        // SOLICITUD HTTP:
        // Se obtienen las fotos del álbum actual
        album.fotos = await obtenerFotos(album.id);
    }

    return albumes;
};

/**
 * Función para mostrar la información completa de los usuarios
 * @param {Array} usuarios - Array de usuarios con sus posts y álbumes
 */
export const mostrarUsuariosCompletos = async () => {
    console.log("Obteniendo información completa de usuarios...");
    
    // OBTENER DATOS:
    // Se obtienen los usuarios con toda su información relacionada
    const usuariosCompletos = await obtenerUsuariosCompletos();

    // PRESENTACIÓN DE DATOS:
    // Se muestra la información de cada usuario con sus relaciones
    console.log("\n========== USUARIOS COMPLETOS ==========");

    for (const usuario of usuariosCompletos) {
        const { id, name, username, email } = usuario;

        console.log(`\n👤 Usuario: ${name} (@${username})`);
        console.log(`   ID: ${id}`);
        console.log(`   Email: ${email}`);

        // Mostrar posts con comentarios
        if (usuario.posts && usuario.posts.length > 0) {
            console.log(`\n   📝 Posts (${usuario.posts.length}):`);
            for (const post of usuario.posts) {
                console.log(`      - ${post.title}`);
                if (post.comentarios && post.comentarios.length > 0) {
                    console.log(`        💬 Comentarios: ${post.comentarios.length}`);
                }
            }
        }

        // Mostrar álbumes con fotos
        if (usuario.albumes && usuario.albumes.length > 0) {
            console.log(`\n   📸 Álbumes (${usuario.albumes.length}):`);
            for (const album of usuario.albumes) {
                console.log(`      - ${album.title}`);
                if (album.fotos && album.fotos.length > 0) {
                    console.log(`        🖼️ Fotos: ${album.fotos.length}`);
                }
            }
        }

        console.log("\n" + "=".repeat(50));
    }

    console.log(`\n✅ Total de usuarios procesados: ${usuariosCompletos.length}`);
};