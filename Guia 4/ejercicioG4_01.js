/* DEFINICIÓN Y TESTEO DE FUNCIONES */
/* 1) esPar, que devuelva si un número entero dado como parámetro es par o no. */

let num;

num = Number(prompt("Por favor ingrese un número"))

const resultado = num % 2 === 0 ? "Es par" : "No es par";

console.log(resultado);