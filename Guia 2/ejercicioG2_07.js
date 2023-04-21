/* 7) Realizá un programa que permita al usuario ingresar tres números. La computadora debe
mostrarlos ordenados de menor a mayor. (Para resolver este ejercicio debés contemplar todas las combinaciones posibles en el orden de los números) */


let num1 = parseInt(prompt("Por favor ingrese el primer número entero"))

let num2 = parseInt(prompt("Por favor ingrese el segundo número entero"))

let num3 = parseInt(prompt("Por favor ingrese el tercer número entero"))

if (num1 < num2 && num2 < num3){
    console.log(`De menor a mayor los números son: ${num1} ${num2} ${num3}`)
}
else if (num2 < num1 && num1< num3){
    console.log(`De menor a mayor los números son: ${num2} ${num1} ${num3}`)}
else if (num1 < num3 && num3< num2){
    console.log(`De menor a mayor los números son: ${num1} ${num3} ${num2}`)}
else if (num3 < num1 && num1< num2){
    console.log(`De menor a mayor los números son: ${num3} ${num1} ${num2}`)}
else if (num2 < num3 && num3< num1){
    console.log(`De menor a mayor los números son: ${num2} ${num3} ${num1}`)}
else{
    console.log(`De menor a mayor los números son: ${num3} ${num2} ${num1}`)}
   
    


