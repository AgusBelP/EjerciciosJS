/* CADENAS DE CARACTERES (strings) */
/* 10) Realizá un programa que permita al usuario ingresar una cadena. La computadora debe mostrar las dos subcadenas formadas por las posiciones pares e impares, respectivamente, de la cadena ingresada. 
Ejemplo: Ingresa "Tfernígoo", debe devolver "Tengo" "frío".
*/

let cadena = prompt("por favor ingrese una acdena de texto");
let impares =[];
let pares = []

const cadenaImpares = cadena => {
    for(i=0; i<cadena.length; i+=2){
        impares.push(cadena[i]);
    }
    return impares.join("")
}

const cadenaPares = cadena => {
    for(j=1; j<cadena.length; j+=2){
        pares.push(cadena[j]);
    }
    return pares.join("")
}

console.log(`El resultado de la cadena en las posiciones impares es: ` + cadenaImpares(cadena));
console.log(`El resultado de la cadena en las posiciones pares es: ` + cadenaPares(cadena));