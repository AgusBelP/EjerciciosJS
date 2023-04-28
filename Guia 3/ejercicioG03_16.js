/* FLUJO DE REPETICIÓN POR CONDICIÓN */
/* 16) Realizá un programa que permita al usuario ingresar números enteros. Por cada carga debe preguntar si se desea seguir ingresando, de la forma "¿Deseás ingresar otro número? [S/N]". La carga de datos finaliza cuando se detecta una 'n' o 'N'. Reutilizá el algoritmo realizado en el ejercicio 37) para validar la opción ingresada. La computadora debe mostrar el porcentaje de números pares ingresados.
*/

let continuar;
let num;
let i=0;
let j=0;
let suma = 0;

do{
    num=Number(prompt("Por favor ingrese un número"));
    console.log(num);
    i++
    const resultado = num % 2 === 0 ? j++ : j = j;
    continuar = prompt("Deseas continuar? [S/N]") 
    console.log(continuar);
}while(continuar != "N" && continuar != "n")

console.log(`El ${(j / i)*100}% de los números ingresados son pares`);