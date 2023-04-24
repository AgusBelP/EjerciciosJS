/* FLUJO DE REPETICIÓN POR CONTADOR */
/* 9) Realizá un programa que permita al usuario ingresar un número natural. La computadora debe mostrar el factorial del número.*/

let num = parseInt(prompt("Por favor ingrese el número del cual desee conocer el factorial")); 
let factorial = 1; 

for(let i = num; i> 0; i--){
    factorial = factorial*i 
} 

 console.log(`El factorial de ${num} es ${factorial}`);
 
