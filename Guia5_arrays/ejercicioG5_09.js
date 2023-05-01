/* ARRAYS DE ENTEROS O CARACTERES */
/* 9) Realizá un programa que permita al usuario ingresar 2 vectores de caracteres, no necesariamente de la misma longitud, que representan dos conjuntos sin valores repetidos. La computadora debe mostrar: 
A) la unión: "B""L""A""N""C""O" + "S""A""L""M""O""N" = "B""L""A""N""C""O""S""M"
B) la intersección: "B""L""A""N""C""O" + "S""A""L""M""Ó""N" = "L""A""N""O" 
C) la diferencia: "B""L""A""N""C""O" + "S""A""L""M""Ó""N" = "B""C"
D) la diferencia simétrica: "B""L""A""N""C""O" + "S""A""L""M""Ó""N" = "B""C""S""M"
*/

let array1 = [];
let array2 = [];
let continuar1,continuar2;

do{
    let elemento1 = prompt("Por favor introduzca un elemento al primer vector");
    array1.push(elemento1);
    continuar1 = prompt("Deseas continuar? [S/N]") 
}while(continuar1 != "N" && continuar1 != "n")

do{
    let elemento2 = prompt("Por favor introduzca un elemento al segundo vector");
    array2.push(elemento2);
    continuar2 = prompt("Deseas continuar? [S/N]") 
}while(continuar2 != "N" && continuar2 != "n")


/* A) unión */

/* let arrayUnion = [];

const union = (array1,array2) => {
    for(let i=0; i<array2.length;i++){
        if(!array1.includes(array2[i])){
            arrayUnion.push(array2[i])
        }
    }
} 

union(array1,array2);

let resultado = array1.concat(arrayUnion);

console.log(`El resultado de la unión es ` + resultado);
 */

/* B) intersección */

/* let arrayIntersec = [];

const intersec = (array1,array2) =>{
    for(let j=0; j<array2.length;j++){
        if(array1.includes(array2[j])){
            arrayIntersec.push(array2[j])
        }}
    for(let k=0; k<array1.length;k++){
        if((array2.includes(array1[k])) && (!arrayIntersec.includes(array1[k]))){
            arrayIntersec.push(array1[k])
        }
        }
};

intersec(array1,array2);

console.log(`El resultado de la intersección es ` + arrayIntersec); */

/* C) diferencia */

/* let arrayDif = [];

const diferencia = (array1, array2) =>{
      for(let j=0; j<array1.length;j++){
        if(!array2.includes(array1[j])){
            arrayDif.push(array1[j])
        }}
    
}

diferencia(array1,array2);

console.log(`El resultado de la diferencia es ` + arrayDif);   */



/* D) diferencia simétrica */

/* let arrayDifSim = [];

const diferencia = (array1, array2) =>{
      for(let j=0; j<array1.length;j++){
        if(!array2.includes(array1[j])){
            arrayDifSim.push(array1[j])
        }}
    for(let k=0; k<array2.length;k++){
        if((!array1.includes(array2[k])) && (!arrayDifSim.includes(array2[k]))){
            arrayDifSim.push(array2[k])
        }
        }
}

diferencia(array1,array2);

console.log(`El resultado de la diferencia simétrica es ` + arrayDifSim);  */