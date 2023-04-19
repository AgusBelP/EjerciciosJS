/* 3) Realizá un programa que permita al usuario ingresar 3 notas pertenecientes a tres trimestres
distintos para cierto alumno. La computadora debe mostrar la nota promedio. */

nota_1 = parseInt(prompt("Por favor ingresá la nota del primer trimestre"))
nota_2 = parseInt(prompt("Por favor ingresá la nota del segundo trimestre"))
nota_3 = parseInt(prompt("Por favor ingresá la nota del tercer trimestre"))

console.log(`El promedio es ${(nota_1+nota_2+nota_3)/3}`)   