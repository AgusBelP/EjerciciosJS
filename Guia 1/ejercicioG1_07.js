/* 7) Realizá un programa que permita al usuario ingresar el ancho y el largo de un terreno en metros
y el valor del metro cuadrado de tierra. La computadora debe mostrar el valor total del terreno y la
cantidad de metros de alambre que serían necesarios para cercarlo completamente en tres pasadas. */

ancho = parseFloat(prompt("Por favor ingrese el ancho del terreno en metros"))

largo = parseFloat(prompt("Por favor ingrese el largo del terreno en metros"))

valor = parseFloat(prompt("Por favor ingrese el valor del metro cuadrado"))

console.log(`El valor total del terreno es ${ancho*largo*valor} y se deberán emplear ${ancho*2*3 + largo*2*3} metros de alambre para cercarlo en tres pasadas`)
