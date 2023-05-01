/* ARRAYS DE ENTEROS O CARACTERES */
/* 4) Realizá un programa que permita al usuario ingresar 10 números enteros. La computadora debe mostrar la suma de los números ingresados en las posiciones pares. */

let num;
let array = [];
let cant = 0;

for (let i = 1; i<11; i++){
    num = Number(prompt(`Por favor ingrese el número ${i}`));
    array.push(num);
}
 
for(let i=0; i<array.length; i+=2){
    cant += array[i];
}

console.log(`El array ingresado es ` + array)
console.log(`La suma de los números en las posiciones pares es ${cant}`);




