import promptSync from 'prompt-sync';

import { listarTareasPendientesPorUsuariosRegistradosEnLaApi,
		 listarUsuarioAlbumesFotos,
		 listarPostConComentarios,
		 listarUsuariosNombreTelefono,
		 mostrarUsuariosCompletos } from "../index.js";


const prompt = promptSync();


export const opcionesDeMenu = async () => {

	let opcion;

	do {

		console.log("Bienvenido al programa evaluación asincronía");
		console.log("Ingrese un número según la opción que desea escoger");
		console.log("1. Ejercicio 1: Tareas pendientes por usuario");
		console.log("2. Ejercicio 2: Usuario con álbumes y fotografías");
		console.log("3. Ejercicio 3: Posts con comentarios");
		console.log("4. Ejercicio 4: Usuarios simplificados");
		console.log("5. Ejercicio 5: Usuarios completos");
		console.log("6. Salir");

		opcion = Number(prompt("Ingrese una opción: "));

		switch (opcion) {

			case 1:

				console.log("Ejercicio 1: Tareas pendientes por usuario");

				await listarTareasPendientesPorUsuariosRegistradosEnLaApi();

				break;


			case 2:

				console.log("Ejercicio 2: Usuario con álbumes y fotografías");

				await listarUsuarioAlbumesFotos();

				break;


			case 3:

				console.log("Ejercicio 3: Posts con comentarios");
				await listarPostConComentarios();

				break;


			case 4:

				console.log("Ejercicio 4: Usuarios simplificados");
				await listarUsuariosNombreTelefono();
				break;


			case 5:

				console.log("Ejercicio 5: Usuarios completos");

				await mostrarUsuariosCompletos();

				break;


			case 6:

				console.log("Programa finalizado.");

				break;
		}

	} while (opcion !== 6);
};
