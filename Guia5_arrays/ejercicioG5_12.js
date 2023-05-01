/* CADENAS DE CARACTERES (strings) */
/* 12) Realizá un programa que permita al usuario ingresar una cadena que represente una frase/oración. La computadora debe mostrar la cantidad total de palabras.
*/

frase = prompt("Por favor ingrese una frase");

let cantPalabras = 0;

const contadorPalabras = frase => {
    for(let i=0 ; i<frase.length ; i++){
        if(frase[i] === " "){
            cantPalabras ++
        }
    }
    return cantPalabras+1;
}

console.log("La cantidad de palabras en la frase ingresada es " + contadorPalabras(frase));
