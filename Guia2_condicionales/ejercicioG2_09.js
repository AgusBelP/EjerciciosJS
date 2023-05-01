/* Realizá un programa que permita al usuario ingresar los lados a, b y c de un triángulo. La computadora informa si el triángulo es o no válido. En caso afirmativo, además informa si es equilátero, isósceles o escaleno.5 
Nota: Según el teorema de desigualdad triangular, un triángulo es válido si se cumple que cada uno de los lados no puede ser más largo que la suma de los otros dos.*/

let a = parseInt(prompt("Por favor ingrese el primer lado del triángulo"))

let b = parseInt(prompt("Por favor ingrese el segundo lado del triángulo"))

let c = parseInt(prompt("Por favor ingrese el segundo lado del triángulo"))

if(a<b+c && b<a+c && c<a+b){
    if(a === b && b === c){
        console.log("El triángulo ingresado es válido. Se trata de un triángulo equilátero")
    }else if(a===b || b===c || a===c){
        console.log("El triángulo ingresado es válido. Se trata de un triángulo isósceles")
    }else{
        console.log("El triángulo ingresado es válido. Se trata de un triángulo escaleno")
    }
}else{
    console.log("El triángulo ingresado no es válido")
}