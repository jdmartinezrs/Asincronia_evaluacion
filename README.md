# Evaluación de Asincronía - JSONPlaceholder API

Proyecto de evaluación para demostrar conocimientos sobre programación asíncrona en JavaScript, manipulación de APIs REST y patrones de diseño modular.

## 📋 Descripción del Proyecto

Este proyecto consiste en realizar peticiones a la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/) para implementar diferentes casos de uso que demuestran el manejo de operaciones asíncronas, modularización de código y buenas prácticas de desarrollo.

## 🎯 Requisitos Implementados

### Ejercicio 1: Tareas Pendientes por Usuario
Listar todas las tareas pendientes por cada usuario registrado en la API.

### Ejercicio 2: Usuario con Álbumes y Fotografías
Solicitar por teclado el nombre de usuario y listar los datos del usuario que concuerden con el username, junto con todos sus álbumes y sus respectivas fotografías.

### Ejercicio 3: Posts con Comentarios
Programar una función para filtrar los posts por su nombre (solicitado por teclado) y agregar los comentarios correspondientes.

### Ejercicio 4: Usuarios Simplificados
Consultar todos los usuarios y modificar la respuesta para obtener un nuevo arreglo solo con el nombre y teléfono de cada usuario.

### Ejercicio 5: Usuarios Completos
Solicitar todos los usuarios en una única petición, agregar todos sus posts con comentarios, y todos sus álbumes con fotografías. Incluye documentación detallada línea por línea.

## 🏗️ Arquitectura del Proyecto

```
Asincronia_evaluacion/
├── app.js                          # Punto de entrada principal con menú interactivo
├── package.json                    # Dependencias del proyecto
├── src/
│   ├── index.js                    # Archivo barril que exporta todos los módulos
│   ├── ejercicios/
│   │   ├── ejercicio1TareasPendientesPorUsuario.js # Tareas pendientes por usuario
│   │   ├── ejercicio2UsuarioAlbumesFotografias.js  # Usuario con álbumes y fotos
│   │   ├── ejercicio3PostsConComentarios.js        # Posts con comentarios
│   │   ├── ejercicio4UsuariosSimplificados.js      # Usuarios simplificados
│   │   └── ejercicio5UsuariosCompletos.js          # Usuarios completos
│   ├── utils/
│   │   ├── api.js                 # Módulo centralizado de peticiones HTTP
│   │   ├── config.js              # Configuración de la API
│   │   └── data.js                # Utilidades de procesamiento de datos
│   └── menu/
│       └── menu.js                # Lógica del menú interactivo
└── README.md                      # Documentación del proyecto
```

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm (gestor de paquetes de Node.js)

### Instalación
```bash
npm install
```

### Ejecución
```bash
node app.js
```

## 📚 Características Técnicas

### Modularización
- **Patrón de Archivo Barril**: `src/index.js` centraliza todas las exportaciones
- **Separación de Responsabilidades**: Cada ejercicio en su propio módulo
- **Utilidades Reutilizables**: `api.js` y `data.js` implementan el principio DRY

### API Centralizada
El módulo `src/utils/api.js` proporciona funciones reutilizables para:
- `obtenerUsuarios()` - Obtener todos los usuarios
- `obtenerPosts()` - Obtener todos los posts
- `obtenerAlbumes(userId)` - Obtener álbumes de un usuario
- `obtenerFotos(albumId)` - Obtener fotos de un álbum
- `obtenerComentarios(postId)` - Obtener comentarios de un post
- `obtenerTareas()` - Obtener todas las tareas

### Utilidades de Datos
El módulo `src/utils/data.js` contiene funciones genéricas:
- `buscarPorPropiedad()` - Búsqueda case-insensitive en arrays
- `filtrarPorPropiedad()` - Filtrado de arrays por propiedad
- `extraerPropiedades()` - Transformación de objetos extrayendo propiedades específicas

### Buenas Prácticas Implementadas
- ✅ **DRY (Don't Repeat Yourself)**: Funciones reutilizables en utils
- ✅ **Single Responsibility Principle**: Cada módulo con una responsabilidad clara
- ✅ **Error Handling**: Manejo de errores con try-catch
- ✅ **Async/Await**: Uso moderno de operaciones asíncronas
- ✅ **Destructuring**: Extracción limpia de propiedades
- ✅ **Documentación**: Comentarios explicativos en el código

## 📖 Uso del Menú

Al ejecutar el programa, se presenta un menú interactivo:

```
Bienvenido al programa evaluación asincronía
Ingrese un número según la opción que desea escoger
1. Ejercicio 1
2. Ejercicio 2
3. Ejercicio 3
4. Ejercicio 4
5. Ejercicio 5
6. Salir
```

Selecciona el número correspondiente al ejercicio que deseas ejecutar.

## 🔧 Dependencias

- **prompt-sync**: ^4.2.0 - Para entrada de datos por teclado en Node.js

## 📝 Notas de Desarrollo

- El proyecto utiliza módulos ES6 (`"type": "module"` en package.json)
- Todas las peticiones HTTP son asíncronas usando `fetch` API
- Se implementa manejo de errores robusto en cada operación
- El código está comentado explicando cada decisión de implementación

## 🏫 Información Institucional

**Centro Industrial de Mantenimiento Integral**  
**INSTRUMENTO DE EVALUACIÓN**  
**Versión: 04**

## 📦 Repositorio

El proyecto está versionado con Git y configurado en un repositorio público:
- URL: https://github.com/jdmartinezrs/Asincronia_evaluacion
- Manejo correcto de ramas y commits

## 📄 Licencia

ISC
