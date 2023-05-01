/* ARRAYS DE ENTEROS O CARACTERES */
/* 3) Realizá un programa que permita al usuario ingresar 10 números enteros. La computadora debe mostrar el valor máximo y la cantidad de veces que se ingresó tal valor. */

let num;
let array = [];
let cant = 0;

for (let i = 1; i<11; i++){
    num = Number(prompt(`Por favor ingrese el número ${i}`));
    array.push(num);
}
 
array.forEach(num =>{
    if(num === Math.max(...array)){
        cant++
    }
    return cant;
}
)

console.log(`El array ingresado es ` + array);
console.log(`El máximo número del array es ` + Math.max(...array) + " " +`y se repite` + " " + cant + ` veces`); 




