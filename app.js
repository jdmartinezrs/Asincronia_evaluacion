import {  } from './src/index.js'

import promptSync from 'prompt-sync';

const prompt = promptSync();

let opcion =  parseInt(prompt("Ingrese el número del ejercicio que desea probar"))

const opcionesDeMenu = ()=>{
    do{
        
    console.log("Bienvenido al programa evaluación asincronía")
    console.log("Ingrese un número según la opción que desea escoger")
    console.log("1. Ejercicio 1");
    console.log("2. Ejercicio 2");
    console.log("3. Ejercicio 3");
    console.log("4. Ejercicio 4");
    console.log("6. Salir");

    }while(opcion != 6);

}

const escogerOfertas =(opcion )=>{
    switch(opcion){
        case 1 :
            console.log("Ejercicio1")
            break;
        case 2 :
            console.log("Ejercicio2")
            break;
        case 3 :
            console.log("Ejercicio3")
            break;
        case 4 :
            console.log("Ejercicio4")
            break;
            case 5 :
            console.log("Ejercicio5")
            break;
              case 6 :
            console.log("Saliendo")
            break;
            default:
            console.log("Saliendo")
    }
}