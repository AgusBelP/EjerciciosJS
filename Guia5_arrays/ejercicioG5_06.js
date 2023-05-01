/* ARRAYS DE ENTEROS O CARACTERES */
/* 6) Realizá un programa que permita al usuario ingresar 9 caracteres. La computadora debe rotar un lugar hacia la derecha el contenido del array de caracteres sin usar un array auxiliar. Luego, mostrarlo. */

let valor;
let lista = [];


for (let i = 1; i<10; i++){
    valor = prompt(`Por favor ingrese el valor número ${i}`);
    lista.push(valor);
}
 
console.log(`El array ingresado es ` + lista)


const inversionManual = array => {
    const ultimoElemento = array.at(-1) 
    for (let j = 0; j < array.length-1; j++){
        array[array.length-j-1]=array[array.length-j-2];
    }
    array[0] = ultimoElemento;          
}

inversionManual(lista);
console.log(`El arreglo con los elementos desplazados un lugar hacia la derecha es ` + lista); 
 




