/* 2) Realizá un programa que permita al usuario ingresar la cantidad de inscriptos a una conferencia
y la cantidad de asientos disponibles el auditorio. La computadora debe indicar si alcanzan los
asientos, en caso contrario, indicar cuántos faltan para que todos los inscriptos puedan sentarse. */

let inscriptos = parseInt(prompt("Por favor ingrese la cantidad de inscriptos a la conferencia"))

let asientos = parseInt(prompt("Por favor ingrese la cantidad de asientos disponibles"))

if (inscriptos <= asientos){
    console.log("La cantidad de asientos es suficiente")
}
else {
    console.log(`La cantidad de asientos disponibles no es suficiente. Faltarán ${inscriptos-asientos} asientos`)
}

