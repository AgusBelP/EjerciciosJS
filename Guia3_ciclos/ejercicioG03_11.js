/* FLUJO DE REPETICIÓN POR CONDICIÓN */
/* 11) Realizá un programa que permita validar una nota de examen de la misma manera que el ejercicio anterior, pero con las siguientes nuevas directivas:
- La nota 0 se reserva para los ausentes
- Las notas 1 y 3 no se suelen poner nunca

En resumen, las notas válidas deberán ser el 2 y el rango comprendido entre el 4 y el 10.

*/

let nota = parseInt(prompt("Por favor ingrese la nota"))

while (nota === 0 || nota === 1 || nota === 3) {
    console.log("Error, la nota ingresada es inválida");
    nota = parseInt(prompt("Por favor ingrese una nota válida"))
}

console.log(`La nota ingresada es ${nota}`);