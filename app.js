const prompt = require("prompt-sync")({ sigint: true });


function crearArray(cantidad){
    const n = cantidad;

    let arrayCreado = [];
    
    for(let i = 0; i < n; i++){
        let dato = parseInt(prompt("Ingresar un numero "));
        arrayCreado.push(dato);
    }
    return arrayCreado;
}

function sumarNumeros(numerosParaSumar){
    let numeros = numerosParaSumar;
    let j = 0;
    for(let i=0; i<= numeros.length;i++){
        if (j < numeros.length-1){
            j += 1;
            nuevoArray = numeros[i] + numeros[j];
            console.log("La suma de " + numeros[i] + " + " + numeros[j] + " es igual a " + nuevoArray); 
        }
    };
}

let cantidadnumeros = prompt("Ingresar cantidad de Numeros que desea ingresar ");

let numerosParaSumar = crearArray(cantidadnumeros);

console.log("Se han ingresado los siguientes números : " + numerosParaSumar);

let Final = sumarNumeros(numerosParaSumar);


