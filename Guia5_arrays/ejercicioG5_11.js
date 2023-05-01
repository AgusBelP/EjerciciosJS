/* CADENAS DE CARACTERES (strings) */
/* 11) Realizá un programa que permita al usuario ingresar una cadena. La computadora debe mostrar las cantidades de cada vocal (cuántas 'A', cuántas 'E', ...).
*/

let vocalA = 0;
let vocalE = 0;
let vocalI = 0;
let vocalO = 0;
let vocalU = 0;

cadena = prompt("Por favor ingrese una cadena de texto");

const aparecenVocales = cadena =>{
    for(i=0; i<cadena.length; i++){
        switch(cadena[i]){
            case "A":
            case "a":
                vocalA ++;
                break;
            case "E":
            case "e":
                vocalE ++;
                break;
            case "I":
            case "i":
                vocalI ++;
                break;
            case "O":
            case "o":
                vocalO ++;
                break;
            case "U":
            case "u":
                vocalU ++;
                break;
        }
    }
}

aparecenVocales(cadena);

console.log(`La vocal A aparece ` + vocalA + ` vez/veces`);
console.log(`La vocal E aparece ` + vocalE + ` vez/veces`);
console.log(`La vocal I aparece ` + vocalI + ` vez/veces`);
console.log(`La vocal O aparece ` + vocalO + ` vez/veces`);
console.log(`La vocal U aparece ` + vocalU + ` vez/veces`);