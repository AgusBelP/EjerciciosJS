/* FLUJO DE REPETICIÓN POR CONTADOR */
/* 4) Realizá un programa que permita al usuario ingresar un número natural n. La computadora debe mostrar los primeros n múltiplos de 3 excepto aquellos que sean a la vez múltiplos de 5 */

let n = parseInt(prompt("Por favor ingrese un número natural n"));


for (let i = 1; i<=n ; i++){
    if(3*i % 5 != 0){
        console.log(3*i);
    }
}
