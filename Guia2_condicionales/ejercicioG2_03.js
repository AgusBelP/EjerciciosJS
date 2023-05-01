/* 3) Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe
indicar cuál de ellos es el mayor. */

let num1 = parseInt(prompt("Por favor ingrese el primer número entero"))

let num2 = parseInt(prompt("Por favor ingrese el segundo número entero"))

if (num1 < num2){
    console.log(`El número más grande es el ${num2}`)
}
else {
    console.log(`El número más grande es el ${num1}`)
}

