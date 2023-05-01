/* FLUJO DE REPETICIÓN POR CONDICIÓN */
/* 15) Realizá un programa que permita al usuario ingresar números mientras el promedio entre todos los ingresados sea menor a 20. La computadora debe indicar la cantidad de valores leídos.
*/

let num;
let i =0;
let suma = 0;
let promedio = 0;


do{
    num = Number(prompt("Por favor ingrese un número"));
    suma += num;
    i++;
    promedio = suma / i;
    console.log(`El promedio actual es ${promedio}`);
}while(promedio < 20)

console.log(`Se ingresaron ${i} números`);


