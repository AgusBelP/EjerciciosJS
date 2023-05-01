/* FLUJO DE REPETICIÓN POR CONTADOR */
/* 3) Realizá un programa que permita al usuario ingresar un número entero n entre 1 y 10. La computadora debe mostrar la tabla de multiplicar de n.
*/

let n = parseInt(prompt("Por favor ingrese un número del 1 al 10"));

console.log(`La tabla de multiplicar de ${n} es:`);
for (let i = 1; i<=10 ; i++){
    console.log(n*i);
}