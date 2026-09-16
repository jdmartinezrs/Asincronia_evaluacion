/**
 * Módulo centralizado para peticiones a la API
 * Implementa el principio DRY evitando repetición de código de fetch
 */

import { api_url } from "./config.js"

/**
 * Función genérica para hacer peticiones HTTP a la API
 * @param {string} endpoint - Ruta del recurso (ej: '/users', '/posts')
 * @param {Object} params - Parámetros de consulta opcionales (ej: { userId: 1 })
 * @returns {Promise<Array|Object>} - Respuesta convertida a JSON o array vacío en caso de error
 */
const fetchAPI = async (endpoint, params = {}) => {
    let queryString = ''
    let primerParametro = true

    for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
            const separador = primerParametro ? '?' : '&'
            // Concatenación directa de cadenas sin template literals
            queryString = queryString + separador + key + '=' + params[key]
            primerParametro = false
        }
    }

    const urlCompleta = api_url + endpoint + queryString

    try {
        const respuesta = await fetch(urlCompleta)
        return await respuesta.json()
    } catch (error) {
        console.error('Error en ' + endpoint + ':', error)
        return []
    }
}
// =====================================================
// FUNCIONES ESPECÍFICAS PARA CADA RECURSO DE LA API
// Reutilizables en todos los ejercicios
// =====================================================

/**
 * Obtiene todos los usuarios de la API
 */
export const obtenerUsuarios = () => fetchAPI('/users')

/**
 * Obtiene todos los posts de la API
 */
export const obtenerPosts = () => fetchAPI('/posts')

/**
 * Obtiene todos los álbumes de la API
 * @param {number} userId - ID del usuario para filtrar sus álbumes
 */
export const obtenerAlbumes = (userId) => fetchAPI('/albums', { userId })

/**
 * Obtiene todas las fotos de la API
 * @param {number} albumId - ID del álbum para filtrar sus fotos
 */
export const obtenerFotos = (albumId) => fetchAPI('/photos', { albumId })

/**
 * Obtiene todos los comentarios de la API
 * @param {number} postId - ID del post para filtrar sus comentarios
 */
export const obtenerComentarios = (postId) => fetchAPI('/comments', { postId })

/**
 * Obtiene todas las tareas (todos) de la API
 */
export const obtenerTareas = () => fetchAPI('/todos')