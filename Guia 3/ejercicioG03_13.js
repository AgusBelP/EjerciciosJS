/* FLUJO DE REPETICIÓN POR CONDICIÓN */
/* 13) Realizá un programa que permita al usuario ingresar números hasta que se introduzca un 0. La computadora debe mostrar el número máximo y el número mínimo.
*/

let num;
let numeros = [1,2,3]

numeros.push(4);

/* do{
    num = parseInt(prompt("Por favor introduzca un número"))
    numeros.push(num)

}while(num!= 0) */

let max = Math.max(numeros)
let min = Math.min(numeros)
console.log(max);
/* console.log(`El máximo número ingresado es ${max} y el mínimo es ${min}`); */

