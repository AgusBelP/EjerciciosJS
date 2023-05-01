/* ARRAYS DE ENTEROS O CARACTERES */
/* 5) Realizá un programa que permita al usuario ingresar 9 caracteres. La computadora debe invertir el contenido del array de caracteres sin usar un array auxiliar. Luego, mostrarlo. */

let valor;
let array = [];


for (let i = 1; i<11; i++){
    valor = prompt(`Por favor ingrese el valor número ${i}`);
    array.push(valor);
}
 
console.log(`El array ingresado es ` + array)
/* 
Con la función ya ofrecida por JavaScript
console.log(`El array invertido es ` + array.reverse()) */


const inversionManual = array => {
        for (let i = 0; i<array.length/2; i++){
            array[i] = array[array.length - i - 1];
            array[array.length - i - 1] = array[i];}
    
}

inversionManual(array);
console.log(`El arreglo invertido es ` + array); 





