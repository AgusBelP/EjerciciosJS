/* ARRAYS DE ENTEROS O CARACTERES */
/* 2) Realizá un programa que permita al usuario ingresar 10 números enteros. La computadora debe mostrar aquellos que sean múltiplos del último número ingresado. */

let num;
let array = [];
let multiplos = [];

for (let i = 1; i<11; i++){
    num = Number(prompt(`Por favor ingrese el número ${i}`));
    array.push(num);
}

multiplos = array.filter(value =>
        value % array[array.length-1] === 0
    )

console.log(`El array ingresado es ` + array);
console.log(`Los múltiplos del último número ingresado son ` + multiplos);





