/* CADENAS DE CARACTERES (strings) */
/* 13) Realizá un programa que permita al usuario ingresar una cadena que represente una frase/oración. La computadora debe mostrar la longitud promedio de caracteres que tienen las palabras.
*/

frase = prompt("Por favor ingrese una frase");

let longPromedio = 0;
let longitud = 0;

const promedioPalabras = frase => {
    let fraseDividida = frase.split(" ");
    fraseDividida.forEach(element => {
        longitud += element.length;
    });
    return (longPromedio = longitud / fraseDividida.length).toFixed(2);
}

console.log(`La frase introducida es ` + frase);
console.log(`La longitud promedio de las palabras introducidas en la frase es ` + promedioPalabras(frase));
