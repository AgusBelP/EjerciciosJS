/* FLUJO DE REPETICIÓN POR CONTADOR */
/* 7) Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que permita ingresar cant números reales, correspondientes a las estaturas de un equipo de jugadores de baloncesto (en metros). La computadora debe mostrar la estatura promedio.*/

let alturaTotal = 0;
let promedio = 0;

let cant = parseInt(prompt("Por favor indique la cantidad de alturas que ingresará"))

for ( let i = 0; i < cant; i++){
    let altura = parseFloat(prompt("Por favor ingrese la altura"));
    alturaTotal += altura;
}

promedio = alturaTotal / cant;

console.log(`El promedio de las alturas es ${promedio}m`);