/* Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe indicar si el mayor es divisible por el menor. */

let num1 = parseInt(prompt("Por favor ingrese el primer número entero"))

let num2 = parseInt(prompt("Por favor ingrese el segundo número entero"))

if(num2>num1){
    if(num2%num1 === 0){
        console.log(`El número ${num2} es divisible por ${num1}`)
    }else{
        console.log(`El número ${num2} no es divisible por ${num1}`)
    }
}else{ if(num1%num2 === 0){
        console.log(`El número ${num1} es divisible por ${num2}`)
    }else{
        console.log(`El número ${num1} no es divisible por ${num2}`)
    }}



