/* FLUJO DE REPETICIÓN POR CONDICIÓN */
/* 14) Realizá un programa que permita al usuario ingresar personas (para cada una, nombre y edad).La carga termina cuando en el nombre de la persona se ingresa un asterisco ('*'). La computadora debe indicar cómo se llama la persona más joven.
*/

let nombre;
let edad;
let masJovenNombre;
let masJovenEdad;
let i = 0;

nombre=prompt("Por favor ingrese el nombre de la persona");

while(nombre!= "*"){
    edad=Number(prompt("Por favor ingrese la edad de la persona"));
    if (i === 0){
        masJovenNombre = nombre;
        masJovenEdad = edad;
    }else {
        if(edad < masJovenEdad && nombre != "*"){
            masJovenNombre = nombre;
            masJovenEdad = edad;
        }else{
            masJovenNombre = masJovenNombre;
            masJovenEdad = masJovenEdad;
        } 
    }
    i++
    nombre=prompt("Por favor ingrese el nombre de la persona");
}

/* Este ejemplo tambipén funciona pero tengo que ingresar la edad para el nombre "*"

do{
    nombre=prompt("Por favor ingrese el nombre de la persona");
    edad=Number(prompt("Por favor ingrese la edad de la persona"));
    if (i === 0){
        masJovenNombre = nombre;
        masJovenEdad = edad;
    }else {
        if(edad < masJovenEdad && nombre != "hola"){
            masJovenNombre = nombre;
            masJovenEdad = edad;
        }else{
            masJovenNombre = masJovenNombre;
            masJovenEdad = masJovenEdad;
        } 
    }
    i++
}while(nombre!= "*") */

console.log(`El nombre de la persona más joven es ${masJovenNombre} y tiene ${masJovenEdad} años`);



