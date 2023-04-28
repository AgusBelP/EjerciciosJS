/* DEFINICIÓN Y TESTEO DE FUNCIONES */
/* 7) cantDivisores, que devuelva la cantidad de divisores que posea un número entero dado como parámetro*/
/* Resuelto en clase */

function cantDivisores(num) {
    if (num < 0) {
        num = num * (-1); // num = -num;
    }
    let contDivisores = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            contDivisores++;
        }        
    }
    return contDivisores;
}

console.log(cantDivisores(4));