/* DEFINICIÓN Y TESTEO DE FUNCIONES */
/* 2) obtenerResto, que devuelva el resto del cociente entre dos números enteros dados como parámetros (sin usar el operador %).*/


function obtenerResto(a,b){
    resto = (((a/b) - (Math.floor(a/b)))*b);
    return resto;

}

console.log(obtenerResto(5,2));
