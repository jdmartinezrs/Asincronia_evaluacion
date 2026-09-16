# Bitácora de Desarrollo - Proyecto Evaluación Asincronía

## 📅 Fecha de Inicio
Proyecto iniciado como parte de la evaluación de programación asíncrona en el Centro Industrial de Mantenimiento Integral.

## 🎯 Objetivo del Proyecto
Desarrollar una aplicación en Node.js que realice peticiones a la API pública JSONPlaceholder para demostrar conocimientos sobre:
- Programación asíncrona con JavaScript
- Manipulación de APIs REST
- Modularización de código
- Buenas prácticas de desarrollo

---

## 📝 Historial de Desarrollo

### Fase 1: Configuración Inicial

#### Commit Inicial
- **Descripción**: Configuración básica del proyecto
- **Acciones realizadas**:
  - Inicialización del proyecto Node.js
  - Configuración de `package.json` con tipo de módulo ES6
  - Instalación de dependencia `prompt-sync` para entrada de datos por teclado

#### Implementación del Menú
- **Commit**: "feat: Se implmenta correctamente la lógica del menú"
- **Descripción**: Desarrollo del sistema de menú interactivo
- **Archivos creados/modificados**:
  - `app.js`: Punto de entrada principal
  - `src/menu/menu.js`: Lógica del menú
- **Características**:
  - Menú interactivo con 6 opciones (5 ejercicios + salir)
  - Manejo de selección por número
  - Loop hasta que el usuario seleccione salir
  - Integración con funciones asíncronas

---

### Fase 2: Refactorización y Optimización

#### Centralización de URL de API
- **Commit**: "Refactor: se implementa una variable para la url y evitar su repeticion en cada fetch"
- **Descripción**: Implementación del principio DRY para la URL de la API
- **Archivos creados**:
  - `src/utils/config.js`: Archivo de configuración
- **Mejoras**:
  - Variable `api_url` centralizada
  - Facilita cambios de entorno (desarrollo/producción)
  - Evita repetición de código

#### Módulo de Utilidades de API
- **Descripción**: Creación del módulo centralizado para peticiones HTTP
- **Archivos creados**:
  - `src/utils/api.js`: Funciones reutilizables para peticiones
- **Funciones implementadas**:
  - `fetchAPI()`: Función genérica para peticiones HTTP
  - `obtenerUsuarios()`: Obtener todos los usuarios
  - `obtenerPosts()`: Obtener todos los posts
  - `obtenerAlbumes(userId)`: Obtener álbumes filtrados
  - `obtenerFotos(albumId)`: Obtener fotos filtradas
  - `obtenerComentarios(postId)`: Obtener comentarios filtrados
  - `obtenerTareas()`: Obtener todas las tareas
- **Beneficios**:
  - Código reutilizable
  - Manejo centralizado de errores
  - Construcción automática de URLs con parámetros

#### Módulo de Utilidades de Datos
- **Descripción**: Creación de funciones genéricas para procesamiento de datos
- **Archivos creados**:
  - `src/utils/data.js`: Utilidades de manipulación de arrays
- **Funciones implementadas**:
  - `buscarPorPropiedad()`: Búsqueda case-insensitive
  - `filtrarPorPropiedad()`: Filtrado por propiedad
  - `extraerPropiedades()`: Extracción de propiedades específicas
- **Beneficios**:
  - Código DRY
  - Funciones genéricas reutilizables
  - Reducción de duplicación de lógica

---

### Fase 3: Implementación de Ejercicios

#### Ejercicio 1: Tareas Pendientes por Usuario
- **Commit**: "feat: listar tareas pendientes por usuarios registrados"
- **Descripción**: Listar todas las tareas pendientes por cada usuario
- **Archivos creados**:
  - `src/ejercicios/ejercicio1TareasPendientesPorUsuario.js`
- **Lógica implementada**:
  - Obtención de usuarios y tareas desde la API
  - Filtrado de tareas por usuario y estado (completed: false)
  - Presentación estructurada por usuario
- **Refactorización posterior**:
  - **Commit**: "refactor: separar lógica de tareas pendientes en funciones"
  - Separación de lógica en funciones más pequeñas
  - Función `mostrarTaresPendientes()` para presentación
  - Mejora de legibilidad y mantenibilidad

#### Ejercicio 2: Usuario con Álbumes y Fotografías
- **Commit**: "feat: listar usuario con sus álbumes y fotografías"
- **Descripción**: Buscar usuario por username y mostrar sus álbumes con fotos
- **Archivos creados**:
  - `src/ejercicios/ejercicio2UsuarioAlbumesFotografias.js`
- **Lógica implementada**:
  - Solicitud de username por teclado
  - Búsqueda de usuario por propiedad
  - Obtención de álbumes del usuario
  - Obtención de fotos por álbum
  - Presentación jerárquica de datos
- **Optimizaciones**:
  - Implementación de límite de fotos (10) para pruebas
  - Manejo de casos donde no se encuentra el usuario
  - Uso de funciones reutilizables de utils

#### Ejercicio 3: Posts con Comentarios
- **Commit**: "feat: filtrar posts y consultar sus comentarios"
- **Descripción**: Filtrar posts por nombre y agregar comentarios
- **Archivos creados**:
  - `src/ejercicios/ejercicio3PostsConComentarios.js`
- **Lógica implementada**:
  - Solicitud de nombre de post por teclado
  - Búsqueda de post por título
  - Obtención de comentarios del post
  - Presentación de post con sus comentarios
- **Características**:
  - Búsqueda case-insensitive
  - Validación de existencia del post
  - Manejo de errores en peticiones

#### Ejercicio 4: Usuarios Simplificados
- **Commit**: "feat: Consultar todos los usuarios y modificar la respuesta"
- **Descripción**: Extraer solo nombre y teléfono de usuarios
- **Archivos creados**:
  - `src/ejercicios/ejercicio4UsuariosSimplificados.js`
- **Lógica implementada**:
  - Obtención de todos los usuarios
  - Transformación del array extrayendo propiedades específicas
  - Uso de función genérica `extraerPropiedades()`
- **Beneficios**:
  - Demostración de transformación de datos
  - Reutilización de utilidades genéricas
  - Código limpio y conciso

#### Ejercicio 5: Usuarios Completos
- **Commit**: "feat: iniciando ejercicio 5"
- **Descripción**: Obtener usuarios con todas sus relaciones (posts, comentarios, álbumes, fotos)
- **Archivos creados**:
  - `src/ejercicios/ejercicio5UsuariosCompletos.js`
- **Lógica implementada**:
  - Petición única de usuarios
  - Agregación de posts con comentarios por usuario
  - Agregación de álbumes con fotos por usuario
  - Documentación línea por línea del código
- **Características**:
  - Uso de funciones auxiliares para modularidad
  - `obtenerPostsConComentarios()`: Procesa posts de un usuario
  - `obtenerAlbumesConFotos()`: Procesa álbumes de un usuario
  - Presentación completa con contadores de relaciones

---

### Fase 4: Organización Final

#### Archivo Barril
- **Descripción**: Creación del archivo index.js como exportador central
- **Archivos creados**:
  - `src/index.js`
- **Propósito**:
  - Centralizar todas las exportaciones
  - Simplificar imports en app.js
  - Seguir patrón de archivo barril
- **Exportaciones**:
  - Todos los ejercicios
  - Funciones del menú

---

## 🏗️ Arquitectura Final

### Estructura de Directorios
```
Asincronia_evaluacion/
├── app.js                    # Punto de entrada
├── package.json              # Configuración del proyecto
├── src/
│   ├── index.js             # Archivo barril
│   ├── ejercicios/          # Casos de uso
│   │   ├── ejercicio1TareasPendientesPorUsuario.js
│   │   ├── ejercicio2UsuarioAlbumesFotografias.js
│   │   ├── ejercicio3PostsConComentarios.js
│   │   ├── ejercicio4UsuariosSimplificados.js
│   │   └── ejercicio5UsuariosCompletos.js
│   ├── utils/               # Utilidades reutilizables
│   │   ├── api.js          # Peticiones HTTP
│   │   ├── config.js       # Configuración
│   │   └── data.js         # Procesamiento de datos
│   └── menu/               # Lógica de interfaz
│       └── menu.js
├── README.md               # Documentación
└── bitacora.md            # Este archivo
```

### Patrones de Diseño Implementados

1. **Archivo Barril (Barrel Pattern)**
   - `src/index.js` centraliza exportaciones
   - Simplifica imports en el punto de entrada

2. **Single Responsibility Principle**
   - Cada módulo tiene una responsabilidad única
   - Separación clara entre lógica de negocio y utilidades

3. **DRY (Don't Repeat Yourself)**
   - Funciones genéricas en `api.js` y `data.js`
   - Reutilización de código en todos los ejercicios

4. **Separation of Concerns**
   - Utilidades separadas de lógica de negocio
   - Configuración separada de código

---

## 📊 Estadísticas del Proyecto

### Líneas de Código (Aproximadas)
- `app.js`: ~87 líneas
- `src/index.js`: 6 líneas
- `src/utils/api.js`: 68 líneas
- `src/utils/config.js`: 2 líneas
- `src/utils/data.js`: 46 líneas
- `src/ejercicios/ejercicio1TareasPendientesPorUsuario.js`: 45 líneas
- `src/ejercicios/ejercicio2UsuarioAlbumesFotografias.js`: 210 líneas
- `src/ejercicios/ejercicio3PostsConComentarios.js`: 131 líneas
- `src/ejercicios/ejercicio4UsuariosSimplificados.js`: 39 líneas
- `src/ejercicios/ejercicio5UsuariosCompletos.js`: 136 líneas

### Total de Archivos JavaScript: 10
### Total de Módulos: 5 ejercicios + 3 utilidades + 1 menú + 1 barril

---

## 🎓 Aprendizajes y Mejoras

### Conceptos Aplicados
1. **Programación Asíncrona**
   - Uso de `async/await`
   - Manejo de promesas
   - Operaciones secuenciales vs paralelas

2. **APIs REST**
   - Peticiones HTTP con `fetch`
   - Manejo de respuestas JSON
   - Construcción de URLs con parámetros

3. **Modularización en JavaScript**
   - Módulos ES6 (`import/export`)
   - Archivo barril
   - Separación de responsabilidades

4. **Buenas Prácticas**
   - Principio DRY
   - Manejo de errores
   - Documentación de código
   - Nombres descriptivos

### Desafíos Encontrados y Soluciones

1. **Repetición de Código en Peticiones HTTP**
   - **Problema**: Código de fetch repetido en cada ejercicio
   - **Solución**: Creación de `fetchAPI()` genérica en `api.js`

2. **Búsqueda Case-Insensitive**
   - **Problema**: Búsqueda sensible a mayúsculas/minúsculas
   - **Solución**: Implementación de `toLowerCase()` en `buscarPorPropiedad()`

3. **Transformación de Datos**
   - **Problema**: Necesidad de extraer propiedades específicas
   - **Solución**: Función genérica `extraerPropiedades()`

4. **Límite de Fotografías en Ejercicio 2**
   - **Problema**: Demasiadas fotografías causaban saturación en consola
   - **Solución**: Implementación de contador con límite de 10 fotos

---

## 🔮 Posibles Mejoras Futuras

1. **Optimizaciones de Rendimiento**
   - Implementar `Promise.all()` para peticiones paralelas
   - Caché de respuestas de API
   - Paginación de resultados

2. **Mejoras de UX**
   - Interfaz más amigable con colores
   - Validación de entrada de datos
   - Manejo de cancelación de operaciones

3. **Testing**
   - Implementación de pruebas unitarias
   - Mock de API para testing
   - Pruebas de integración

4. **Documentación**
   - JSDoc para documentación de funciones
   - Diagramas de flujo
   - Guía de contribución

5. **Funcionalidades Adicionales**
   - Exportación de resultados a JSON/CSV
   - Búsqueda avanzada con múltiples filtros
   - Estadísticas y métricas de datos

---

## 📝 Conclusiones

El proyecto ha demostrado la aplicación efectiva de conceptos de programación asíncrona en JavaScript, modularización de código y buenas prácticas de desarrollo. La arquitectura implementada facilita el mantenimiento y la escalabilidad del código, mientras que la separación de responsabilidades y el uso de utilidades reutilizables han reducido significativamente la duplicación de código.

El uso de patrones de diseño como el archivo barril y la implementación del principio DRY han resultado en un código limpio, mantenible y fácil de entender. La documentación línea por línea en el ejercicio 5 demuestra un entendimiento profundo de cada decisión de implementación.

---

## 🏫 Información del Curso

**Institución**: Centro Industrial de Mantenimiento Integral  
**Instrumento**: INSTRUMENTO DE EVALUACIÓN  
**Versión**: 04  
**Repositorio**: https://github.com/jdmartinezrs/Asincronia_evaluacion

---

*Última actualización: 2026-09-15*