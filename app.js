
import promptSync from 'prompt-sync';

import { listarTareasPendientesPorUsuariosRegistradosEnLaApi } from "./ejercicio1.js";
import { listarUsuarioAlbumesFotos } from "./ejercicio2.js";

const prompt = promptSync();


const opcionesDeMenu = async () => {

    let opcion;

    do {

        console.log("\n======================================");
        console.log("Bienvenido al programa evaluación asincronía");
        console.log("======================================");
        console.log("Ingrese un número según la opción que desea escoger");
        console.log("1. Ejercicio 1");
        console.log("2. Ejercicio 2");
        console.log("3. Ejercicio 3");
        console.log("0. Salir");

        opcion = Number(prompt("Seleccione una opción: "));

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

                break;


            case 0:

                console.log("Programa finalizado.");

                break;


            default:

                console.log("Opción no válida.");

                break;
        }

    } while (opcion !== 0);
};


opcionesDeMenu();
