/**
 * Módulo de utilidades para procesamiento de datos
 * Implementado usando bucles `for...of`
 */

/**
 * Normaliza una cadena a minúsculas iterando carácter por carácter
 */
const aMinusculas = (texto) => {
    if (typeof texto !== 'string') return ''
    let resultado = ''
    
    for (const caracter of texto) {
        const codigo = caracter.charCodeAt(0)
        // Rango ASCII para letras mayúsculas (A-Z)
        if (codigo >= 65 && codigo <= 90) {
            resultado += String.fromCharCode(codigo + 32)
        } else {
            resultado += caracter
        }
    }
    return resultado
}

/**
 * Busca un elemento en un array por una propiedad (case-insensitive)
 */
export const buscarPorPropiedad = (array, propiedad, valorBuscado) => {
    const valorBuscadoMinuscula = aMinusculas(valorBuscado)

    for (const item of array) {
        if (item && item[propiedad] !== undefined && item[propiedad] !== null) {
            const valorPropiedad = aMinusculas(String(item[propiedad]))
            if (valorPropiedad === valorBuscadoMinuscula) {
                return item // Retorna inmediatamente al encontrarlo
            }
        }
    }
    return null
}

/**
 * Filtra elementos de un array por el valor exacto de una propiedad
 */
export const filtrarPorPropiedad = (array, propiedad, valor) => {
    const resultado = []
    
    for (const item of array) {
        if (item && item[propiedad] === valor) {
            resultado[resultado.length] = item
        }
    }
    return resultado
}

/**
 * Transforma objetos extrayendo solo ciertas propiedades
 */
export const extraerPropiedades = (array, propiedades) => {
    const resultado = []
    
    for (const item of array) {
        const nuevoObjeto = {}
        
        if (item) {
            for (const prop of propiedades) {
                if (item[prop] !== undefined) {
                    nuevoObjeto[prop] = item[prop]
                }
            }
        }
        
        resultado[resultado.length] = nuevoObjeto
    }
    return resultado
}