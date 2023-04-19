/* 9) Realizá un programa que permita al usuario ingresar dos números enteros, que representan las
medidas en grados de dos ángulos interiores de cierto triángulo. La computadora debe mostrar el
valor en grados del ángulo restante. */

num_1 = parseInt(prompt("Por favor ingrese el primer ángulo interno"))
num_2 = parseInt(prompt("Por favor ingrese el segundo ángulo interno"))

console.log(`El tercer ándulo interno es ${180-num_1-num_2}°`)

