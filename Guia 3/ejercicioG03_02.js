/* FLUJO DE REPETICIÓN POR CONTADOR */
/* 2) Realizá un programa que permita al usuario ingresar dos números enteros num1 y num2, donde el primero siempre deberá ser menor o igual al segundo. La computadora debe mostrar la secuencia de números existentes entre ambos: 
A) Incluyéndolos
B) Excluyéndolos
*/

num1= parseInt(prompt("Por favor ingrese el primer número entero"))
num2= parseInt(prompt("Por favor ingrese el segundo número entero"))

console.log(`Los números ingresados son ${num1} y ${num2}`);

console.log("La secuencia incluyendo los números ingresados es:");

for (let j= num1; j <= num2; j++){
    console.log(j);
} 

console.log("La secuencia excluyendo los números ingresados es:");

for (let j= num1 + 1; j < num2; j++){
    console.log(j);
} 

