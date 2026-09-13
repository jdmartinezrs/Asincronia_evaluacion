import promptSync from 'prompt-sync';

const prompt = promptSync();

const escogerOfertas = (opcion) => {

    switch (opcion) {

        case 1:
            console.log("Ejercicio 1");
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


const opcionesDeMenu = () => {

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

        escogerOfertas(opcion);

    } while (opcion !== 6);
};


opcionesDeMenu();