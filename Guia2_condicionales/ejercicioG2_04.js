/* 4) Realizá un programa que permita al usuario ingresar tres números enteros. La computadora debe
indicar cuál de ellos es el mayor.. */

let num1 = parseInt(prompt("Por favor ingrese el primer número entero"))

let num2 = parseInt(prompt("Por favor ingrese el segundo número entero"))

let num3 = parseInt(prompt("Por favor ingrese el tercer número entero"))

if (num1 < num2 && num2 < num3){
    console.log(`El número más grande es el ${num3}`)
}
else if (num2 < num3  && num3< num1){
    console.log(`El número más grande es el ${num1}`)}
    else {
        console.log(`El número más grande es el ${num2}`)}
    

