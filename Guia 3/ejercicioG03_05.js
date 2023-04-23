/* FLUJO DE REPETICIÓN POR CONTADOR */
/* 5) Realizá un programa que permita al usuario ingresar 5 edades. La computadora debe indicar cuántas edades fueron valores impares mayores que 18.*/

let k = 0

for (let i = 1; i<=5 ; i++){
    let j = parseInt(prompt("Por favor ingrese una edad"))
    if (j % 2 != 0 && j>18){
        k += 1;
    }
}

console.log(`Se ingresaron ${k} edades impares mayores que 18`);
