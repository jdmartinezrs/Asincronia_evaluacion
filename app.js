import {listarTareasPendientesPorUsuariosRegistradosEnLaApi} from "././src/index.js"
import promptSync from 'prompt-sync';

const prompt = promptSync();

//Se crea funcion escogerOfertas asincrona para que espere las respuestas enviadas desde ejericios
const escogerOfertas = async (opcion) => {

    switch (Number(opcion)) {
        
   //Ejecutar el ejercicio 1 y esperar la resolución de su promesa antes de continuar
        case 1:
            console.log("Ejercicio 1");
            await listarTareasPendientesPorUsuariosRegistradosEnLaApi()
            break;

        case 2:
            console.log("Ejercicio 2");
            break;

        case 3:
            console.log("Ejercicio 3");
            break;

        case 4:
            console.log("Ejercicio 4");
            break;

        case 5:
            console.log("Ejercicio 5");
            break;

        case 6:
            console.log("Saliendo...");
            break;

        default:
            console.log("Opción no válida");
    }
};

//y acá en opcionesDeMenu se debe esperar aescogerOfertas
const opcionesDeMenu = async () => {

    let opcion;

    do {

        console.log("\nBienvenido al programa evaluación asincronía");
        console.log("Ingrese un número según la opción que desea escoger");
        console.log("1. Ejercicio 1");
        console.log("2. Ejercicio 2");
        console.log("3. Ejercicio 3");
        console.log("4. Ejercicio 4");
        console.log("5. Ejercicio 5");
        console.log("6. Salir");

        opcion = parseInt(
            prompt("Ingrese el número del ejercicio que desea probar: ")
        );

        await escogerOfertas(opcion);

    } while (opcion !== 6);
};


opcionesDeMenu();