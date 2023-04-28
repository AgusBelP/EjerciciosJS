/* FLUJO DE REPETICIÓN POR CONDICIÓN */
/* 17) Realizá un programa que permita al usuario ingresar la cantidad de cierto artículo y el precio unitario de dicho artículo. Por cada carga debe preguntar si se desea seguir ingresando de la forma "¿Deseás ingresar otro artículo? [S/N]". La carga de datos finaliza cuando se detecta una 'n' o 'N'. Reutilizá el algoritmo realizado en el ejercicio 37) para validar la opción ingresada. La computadora debe mostrar el monto total del ticket.
*/

let continuar;
let cant;
let precio;
let suma = 0;

do{
    cant= Number(prompt("Por favor ingrese la cantidad de items del artículo"));
    console.log(cant);
    precio = Number(prompt("Por favor ingrese el precio del artículo"));
    console.log(precio);
    suma += cant*precio;
    continuar = prompt("Deseas continuar? [S/N]") 
    console.log(continuar);
}while(continuar != "N" && continuar != "n")

console.log(`El monto total del ticket es $${suma}`);