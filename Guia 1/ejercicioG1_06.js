/* 6) Realizá un programa que permita al usuario ingresar el valor unitario de cierto artículo y la
cantidad de artículos vendidos por un vendedor, del cual se sabe que gana un sueldo fijo de $14000
más el 16% del monto total vendido. Con tales datos, la computadora debe calcular el sueldo
mensual del vendedor y mostrarlo. */

valor_unit = parseFloat(prompt("Por favor ingrese el valor unitario del artículo"))

cant_vendidas = parseInt(prompt("Por favor ingrese la cantidad de artículos vendidos"))

console.log(`El sueldo del vendedor es de ${14000 + valor_unit*cant_vendidas*0.16}`)