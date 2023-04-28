/* FLUJO DE REPETICIÓN COMBINADA Y ANIDAMIENTO */
/* 18) Realizá un programa que permita al usuario ingresar 12 valores, de a uno por vez, que representan los sueldos mensuales que percibió un empleado durante un año. Si durante la carga de los sueldos mensuales se detecta un valor negativo, esto indica que aún no se ha cobrado el mes en curso, por lo tanto, deben dejar de ingresarse datos. La computadora debe mostrar el sueldo anual percibido (total o parcial). */

let sueldoAnual = 0;
let sueldo;
let i=1;

sueldo = Number(prompt(`Por favor ingrese el sueldo mensual percibido para el mes ${i}`))

while(sueldo >0 && i<13){
    i ++
    sueldoAnual += sueldo
    sueldo = Number(prompt(`Por favor ingrese el sueldo mensual percibido para el mes ${i}`))
}

console.log(`El sueldo anual percibido es ${sueldoAnual}`);