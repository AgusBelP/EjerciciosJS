/* ARRAYS DE ENTEROS O CARACTERES */
/* 8) Realizá un programa que permita al usuario ingresar 9 caracteres. La computadora debe mostrarlos sin repetidos.*/

let valor;
let lista = [];
let cont = 0 ;
let arraySorted = [];


for (let i = 1; i<9; i++){
    valor = prompt(`Por favor ingrese el valor número ${i}`);
    lista.push(valor);
}
 
console.log(`El array ingresado es ` + lista)

const repetidos = array => {
    arraySorted = array.sort((a,b) => a-b)
    arraySorted.forEach(element => {
        for(j=0; j < arraySorted.length ; j++){
            if (element === arraySorted[j] && arraySorted.indexOf(element) != j)
            arraySorted.splice(j,1);
        }
        
    });
}

repetidos(lista);

console.log("La nueva lista es " + lista);




