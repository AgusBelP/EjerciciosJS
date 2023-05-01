/* ARRAYS DE ENTEROS O CARACTERES */
/* 7) Realizá un programa que permita al usuario ingresar 9 caracteres. La computadora debe indicar si la palabra representada es o no un palíndromo. */

let valor;
let lista = [];
let cont = 0


for (let i = 1; i<10; i++){
    valor = prompt(`Por favor ingrese el valor número ${i}`);
    lista.push(valor);
}
 
console.log(`El array ingresado es ` + lista)

const esPalindromo = array =>{
    for(let j=0; j < Math.floor(lista.length/2); j++){
        if(array[array.length-1-j] === array[j]){
            cont ++;
        }
    }
    if (cont === Math.floor((array.length/2))){
        console.log("Se trata de un palíndromo");
    }else{
        console.log("No es un palíndromo");
    }
}

esPalindromo(lista);





