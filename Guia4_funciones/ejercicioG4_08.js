/* DEFINICIÓN Y TESTEO DE FUNCIONES */
/* 8) esPrimo, que devuelva si un número entero dado como parámetro es o no primo.*/
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

function esPrimo(num) {
    return cantDivisores(num) == 2;
}

console.log(esPrimo(98));