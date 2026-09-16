# Pruebas con JSONPlaceholder

Este documento contiene datos reales obtenidos de `https://jsonplaceholder.typicode.com/` para probar cada ejercicio del proyecto.

## 1. Datos disponibles en la API

| Recurso | Endpoint | Registros |
| --- | --- | ---: |
| Usuarios | `/users` | 10 |
| Tareas | `/todos` | 200 |
| Posts | `/posts` | 100 |
| Comentarios | `/comments` | 500 |
| Albumes | `/albums` | 100 |
| Fotografias | `/photos` | 5000 |

La API relaciona los datos mediante estos campos:

- `todos.userId` relaciona una tarea con un usuario.
- `posts.userId` relaciona un post con un usuario.
- `comments.postId` relaciona un comentario con un post.
- `albums.userId` relaciona un album con un usuario.
- `photos.albumId` relaciona una fotografia con un album.

## 2. Usuario de prueba recomendado

Para los ejercicios 2 y 5 se puede usar el primer usuario de la API:

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org"
}
```

Entrada para el ejercicio 2:

```text
Bret
```

La busqueda ignora mayusculas y minusculas, por lo que tambien funciona `bret` o `BRET`.

## 3. Ejercicio 1: tareas pendientes por usuario

### Como ejecutarlo

1. Ejecutar `node app.js`.
2. Seleccionar la opcion `1`.
3. Esperar la consulta de usuarios y tareas.

No requiere datos adicionales por teclado.

### Salida exitosa resumida

Para el usuario `Leanne Graham` la API devuelve 20 tareas, de las cuales 9 tienen `completed: false`. Algunas tareas pendientes son:

```text
******************************
Usuario: Leanne Graham
Tareas pendientes:
-delectus aut autem
-quis ut nam facilis et officia qui
-fugiat veniam minus
...
```

La funcion muestra un bloque para cada uno de los 10 usuarios y solo imprime las tareas cuyo `userId` coincide y cuyo campo `completed` es `false`.

### Datos que se validan

```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

Una tarea como `{"userId": 1, "completed": true}` no debe aparecer en la salida.

## 4. Ejercicio 2: usuario con albumes y fotografias

### Entrada exitosa

Seleccionar la opcion `2` e ingresar:

```text
Bret
```

### Salida esperada

```text
========== DATOS DEL USUARIO ==========
ID: 1
Nombre: Leanne Graham
Username: Bret
Email: Sincere@april.biz
Telefono: 1-770-736-8031 x56442
Website: hildegard.org

========== ALBUMES ==========

Album: quidem molestiae enim
Fotografias:
  ID: 1
  Titulo: accusamus beatae ad facilis cum similique qui sunt
  URL: https://via.placeholder.com/600/92c952
  Miniatura: https://via.placeholder.com/150/92c952
```

El usuario 1 tiene 10 albumes. Cada album tiene 50 fotografias en la API, pero el programa limita la impresion total a 10 fotografias para evitar una salida excesivamente larga.

### Entrada sin coincidencias

Ingresar:

```text
usuario-inexistente
```

Salida esperada:

```text
No se encontro un usuario con ese username.
```

## 5. Ejercicio 3: posts con comentarios

### Entrada exitosa

Seleccionar la opcion `3` e ingresar exactamente este titulo:

```text
sunt aut facere repellat provident occaecati excepturi optio reprehenderit
```

La busqueda tampoco distingue entre mayusculas y minusculas.

### Salida esperada resumida

```text
========== POST ==========
ID: 1
Usuario ID: 1
Titulo: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
Contenido: quia et suscipit...

========== COMENTARIOS ==========

ID: 1
Nombre: id labore ex et quam laborum
Email: Eliseo@gardner.biz
Comentario: laudantium enim quasi est quidem magnam voluptate ipsam eos...
```

El post con `id: 1` tiene 5 comentarios. La API relaciona cada comentario mediante `postId: 1`.

### Entrada sin coincidencias

Ingresar:

```text
post-inexistente
```

Salida esperada:

```text
No se encontro un post con ese nombre.
```

## 6. Ejercicio 4: usuarios simplificados

### Como ejecutarlo

1. Seleccionar la opcion `4`.
2. No ingresar datos adicionales.

El ejercicio consulta los 10 usuarios y conserva unicamente `name` y `phone`.

### Salida exitosa resumida

```text
========== USUARIOS ==========
Nombre: Leanne Graham
Telefono: 1-770-736-8031 x56442
--------------------------------
Nombre: Ervin Howell
Telefono: 010-692-6593 x09125
--------------------------------
Nombre: Clementine Bauch
Telefono: 1-463-123-4447
--------------------------------
```

No deben aparecer en el arreglo transformado propiedades como `id`, `email`, `address`, `website` o `company`.

## 7. Ejercicio 5: usuarios completos

### Como ejecutarlo

1. Seleccionar la opcion `5`.
2. No ingresar datos adicionales.

### Relaciones esperadas

La API contiene estas relaciones para cada usuario:

- 10 usuarios.
- 10 posts por usuario.
- 5 comentarios por post.
- 10 albumes por usuario.
- 50 fotografias por album.

Por tanto, para cada usuario completo se esperan 10 posts con sus comentarios y 10 albumes con sus fotografias. En total se procesan 100 posts, 500 comentarios, 100 albumes y 5000 fotografias.

### Salida exitosa resumida

```text
Obteniendo informacion completa de usuarios...

========== USUARIOS COMPLETOS ==========

Usuario: Leanne Graham (@Bret)
   ID: 1
   Email: Sincere@april.biz

   Posts (10):
      - sunt aut facere repellat provident occaecati excepturi optio reprehenderit
        Comentarios: 5

   Albumes (10):
      - quidem molestiae enim
        Fotos: 50

==================================================

✅ Total de usuarios procesados: 10
```

Este ejercicio retorna un arreglo de usuarios enriquecidos. Cada usuario recibe las propiedades `posts` y `albumes`; cada post recibe `comentarios` y cada album recibe `fotos`.

## 8. Pruebas de error y datos invalidos

| Prueba | Entrada o condicion | Resultado esperado |
| --- | --- | --- |
| Usuario inexistente | `usuario-inexistente` en el ejercicio 2 | Se muestra el mensaje de usuario no encontrado y no se solicitan albumes. |
| Post inexistente | `post-inexistente` en el ejercicio 3 | Se muestra el mensaje de post no encontrado y no se solicitan comentarios. |
| Mayusculas diferentes | `bret` o `BRET` | La busqueda encuentra al usuario porque se normaliza el texto a minusculas. |
| Campo de relacion sin resultados | Un `userId`, `postId` o `albumId` que no tenga registros | La API devuelve un arreglo vacio; no se agregan elementos relacionados. |
| API no disponible | Desconectar la red o usar una URL no accesible | `fetchAPI` captura el error y devuelve `[]`; los ejercicios que tienen `try/catch` muestran su mensaje de error o una salida vacia. |

## 9. Comprobaciones directas con `curl`

Estas consultas permiten verificar los datos sin pasar por el menu:

```bash
curl https://jsonplaceholder.typicode.com/users/1
curl 'https://jsonplaceholder.typicode.com/todos?userId=1'
curl https://jsonplaceholder.typicode.com/posts/1
curl 'https://jsonplaceholder.typicode.com/comments?postId=1'
curl 'https://jsonplaceholder.typicode.com/albums?userId=1'
curl 'https://jsonplaceholder.typicode.com/photos?albumId=1'
```

Los resultados pueden cambiar si el servicio remoto se modifica, pero los ejemplos anteriores corresponden a las respuestas obtenidas de JSONPlaceholder durante la elaboracion de este documento.
