/**
 * Módulo de utilidades para procesamiento de datos
 * Implementa el principio DRY con funciones genéricas reutilizables
 */

/**
 * Función genérica para buscar un elemento en un array por una propiedad
 * @param {Array} array - Array donde buscar
 * @param {string} propiedad - Nombre de la propiedad a comparar
 * @param {string} valorBuscado - Valor a buscar (comparación case-insensitive)
 * @returns {Object|null} - Elemento encontrado o null si no existe
 */
export const buscarPorPropiedad = (array, propiedad, valorBuscado) => {
    return array.find(item => 
        item[propiedad]?.toLowerCase() === valorBuscado.toLowerCase()
    ) || null
}

/**
 * Función genérica para filtrar elementos de un array por una propiedad
 * @param {Array} array - Array a filtrar
 * @param {string} propiedad - Nombre de la propiedad para filtrar
 * @param {*} valor - Valor que debe tener la propiedad
 * @returns {Array} - Array filtrado
 */
export const filtrarPorPropiedad = (array, propiedad, valor) => {
    return array.filter(item => item[propiedad] === valor)
}

/**
 * Función genérica para transformar objetos extrayendo solo ciertas propiedades
 * @param {Array} array - Array de objetos a transformar
 * @param {Array} propiedades - Array de nombres de propiedades a mantener
 * @returns {Array} - Array de objetos con solo las propiedades especificadas
 */
export const extraerPropiedades = (array, propiedades) => {
    return array.map(item => {
        const nuevoObjeto = {}
        propiedades.forEach(prop => {
            if (item[prop] !== undefined) {
                nuevoObjeto[prop] = item[prop]
            }
        })
        return nuevoObjeto
    })
}