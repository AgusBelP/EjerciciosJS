/* ARRAYS DE ENTEROS O CARACTERES */
/* 1) Realizá un programa que permita al usuario ingresar 10 números enteros. La computadora debe mostrar el promedio de los mismos y cuáles fueron los valores ingresados que lo superaron. */

let num;
let array = [];
let sum = 0;

for (let i = 1; i<11; i++){
    num = Number(prompt(`Por favor ingrese el número ${i}`));
    array.push(num);
    sum += num;
}


const superanPromedio = array.filter(value =>
    value > (sum/10)
    );

console.log(`El array ingresado es ` + array);
console.log(`El promedio es ${sum/10}`); 
console.log(`Los elementos que superan el promedio son `+ superanPromedio);

