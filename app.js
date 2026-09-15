
import promptSync from 'prompt-sync';

import { listarTareasPendientesPorUsuariosRegistradosEnLaApi,
         listarUsuarioAlbumesFotos,
         listarPostConComentarios } from "././src/index.js";


const prompt = promptSync();


const opcionesDeMenu = async () => {

    let opcion;

    do {

        console.log("Bienvenido al programa evaluación asincronía");
        console.log("Ingrese un número según la opción que desea escoger");
        console.log("1. Ejercicio 1");
        console.log("2. Ejercicio 2");
        console.log("3. Ejercicio 3");
        console.log("4. Ejercicio 4");
        console.log("5. Ejercicio 5");
        console.log("6. Salir");

        opcion = Number(prompt("Ingrese una opción: "));

        switch (opcion) {

            case 1:

                console.log("Ejercicio 1");

                await listarTareasPendientesPorUsuariosRegistradosEnLaApi();

                break;


            case 2:

                console.log("Ejercicio 2");

                await listarUsuarioAlbumesFotos();

                break;


            case 3:

                console.log("Ejercicio 3");
                await listarPostConComentarios();

                break;


            case 4:

                console.log("Ejercicio 4");

                break;


            case 5:

                console.log("Ejercicio 5");

                break;


            case 6:

                console.log("Programa finalizado.");

                break;
        }

    } while (opcion !== 6);
};


opcionesDeMenu();

