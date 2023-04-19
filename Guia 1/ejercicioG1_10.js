/* 10) Realizá un programa que permita al usuario ingresar los nombres de tres inversores junto al
capital invertido por cada uno. La computadora debe informar qué porcentaje del total aportó cada
uno y cuál es el monto del total aportado entre los tres. */

inversor_1 = prompt("Por favor ingrese el nombre del primer inversor")
cap_1 = parseFloat(prompt("Por favor ingrese el capital invertido por el inversor"))
inversor_2 = prompt("Por favor ingrese el nombre del segundo inversor")
cap_2 = parseFloat(prompt("Por favor ingrese el capital invertido por el inversor"))
inversor_3 = prompt("Por favor ingrese el nombre del tercer inversor")
cap_3 = parseFloat(prompt("Por favor ingrese el capital invertido por el inversor"))

console.log(`El capital total aportado es de ${cap_1+cap_2+cap_3}`)
console.log(`${inversor_1} aportó el ${100*cap_1/(cap_1+cap_2+cap_3)}% del capital`)
console.log(`${inversor_2} aportó el ${100*cap_2/(cap_1+cap_2+cap_3)}% del capital`)
console.log(`${inversor_3} aportó el ${100*cap_3/(cap_1+cap_2+cap_3)}% del capital`)
