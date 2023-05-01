/* DEFINICIÓN Y TESTEO DE FUNCIONES */
/* 6) esMultiplo, que devuelva si un número entero es múltiplo de otro. Ambos son dados como parámetros.*/

const esMultiplo = (a,b) => a%b === 0 ? "Es múltiplo" : "No es múltiplo" ;

console.log(esMultiplo(11,2));