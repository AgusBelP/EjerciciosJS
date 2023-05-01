/* CADENAS DE CARACTERES (strings) */
/* 14) Realizá un programa que permita al usuario ingresar una cadena que represente una frase/oración. La computadora debe mostrar un listado de todos los pares de palabras consecutivas en los cuales la primera palabra termina con la inicial de la segunda.
Ejemplo: "Estoy ya en condiciones para aprobar vectores".
-> "Estoy ya"  "para aprobar"
*/

frase = prompt("Por favor ingrese una frase");

const palabrasConsecutivas = frase => {
    let fraseDividida = frase.split(" ");
    for(let i=0; i<fraseDividida.length-1; i++){
            if(fraseDividida[i].charAt(fraseDividida[i].length-1) === fraseDividida[i+1].charAt(0)){
                console.log(fraseDividida[i] + " " +fraseDividida[i+1]);
            }
        };
}

palabrasConsecutivas(frase)