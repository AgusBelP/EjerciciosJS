/* FLUJO DE REPETICIÓN POR CONTADOR */
/* 8) Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que permita ingresar cant números enteros. La computadora debe mostrar cuál fue el mayor número y en qué posición apareció.*/

let cant = parseInt(prompt("Por favor ingrese cuántos números ingresará"))
let mayor = 0
let posicion = 1

for (let i = 1; i<= cant; i++){
    num = parseInt(prompt(`Por favor ingrese el ${i}° número`))
    if (num>mayor){
        mayor = num
        posicion = i
    }
}

console.log(`El mayor número ingresado fue el ${mayor} en la posición ${posicion}`);


