/* DESARROLLO DE PROGRAMAS MODULARIZADOS*/
/* 11) Realizá un programa que permita al usuario ingresar el valor unitario de cierto artículo y la cantidad de artículos vendidos por un vendedor, del cual se sabe que gana un sueldo fijo de $14000 más el 16% del monto total vendido. Con tales datos, la computadora debe calcular el monto a cobrar por el vendedor y mostrarlo.*/

let sueldoFijo = 14000;
let sueldoVariable = 0;
let cant;

cant = Number(prompt("Por favor ingrese la cantidad de ventas a ingresar"));

for(let i= 0; i<cant; i++){
    let cantArticulos = Number(prompt("Por favor ingrese la cantidad de artículos vendidos "));
    let valorUnitario = Number(prompt("Por favor ingrese el valor unitario del artículo vendido"));
    sueldoVariable += (cantArticulos*valorUnitario); 
}

console.log(`El monto a cobrar por el vendedor es $${sueldoFijo+0.16*sueldoVariable}`);





