/* FLUJO DE REPETICIÓN POR CONTADOR */
/* 6) Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que permita ingresar cant números reales, correspondientes a las ventas realizadas por cierto vendedor. La computadora debe mostrar el total de las ventas.*/

let totalVentas = 0

let cant = parseInt(prompt("Por favor indique la cantidad de ventas que ingresará"))

for ( let i = 1; i <= cant; i++){
    let venta = parseInt(prompt("Por favor ingrese el monto de la venta"));
    totalVentas += venta;
}

console.log(`El total de las ventas es $${totalVentas}`);