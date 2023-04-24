/* FLUJO DE REPETICIÓN POR CONDICIÓN */
/* 10) Realizá un programa que permita validar una nota de examen. Se espera que la nota que el usuario ingrese sea un número comprendido Entre 0 y 10. La misma debe ser tantas veces ingresada como sean necesarias hasta que quede comprendida dentro del rango descripto.*/

let nota = parseInt(prompt("Por favor ingrese la nota"))

while (nota < 0 || nota >10) {
    console.log("Error, la nota ingresada está fuera del rango posible");
    nota = parseInt(prompt("Por favor ingrese una nota válida"))
    
}

console.log(`La nota ingresada es ${nota}`);