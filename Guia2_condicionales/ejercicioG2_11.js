/* 11) Realizá un programa que permita al usuario ingresar una letra, correspondiente a un dígito del sistema de numeración romano. La computadora debe mostrar su correspondiente valor decimal. Si se ingresa una letra inexistente, la computadora debe informar que no existe tal dígito. */

let num = prompt("Por favor ingrese un número romano para conocer su valor")

let num2 = num.toUpperCase();

switch(num2){
    case "I":
        console.log("1");
        break;
    case "V":
        console.log("5");
        break;
    case "X":
        console.log("10");
        break;
    case "L":
        console.log("50");
        break;
    case "C":
        console.log("100");
        break;
    case "D":
        console.log("500");
        break;
    case "M":
        console.log("1000");
        break;
    default:
        console.log("No existe ese dígito");
        break;
}
