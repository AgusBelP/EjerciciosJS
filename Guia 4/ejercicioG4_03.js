/* DEFINICIÓN Y TESTEO DE FUNCIONES */
/* 3) imprimirSimbolo, que imprima por consola n veces un caracter en la misma línea. Tanto n como el caracter se reciben como parámetro.*/

function imprimirSimbolo(n,s){
    return s.repeat(n);
}

console.log(imprimirSimbolo(3,"$"));