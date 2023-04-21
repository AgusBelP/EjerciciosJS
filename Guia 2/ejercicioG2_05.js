/* 5) Realizá un programa que permita al usuario ingresar su edad (entre 1 y 120 años) y su género ('F' para mujeres, 'M' para hombres). La computadora debe indicar si la persona está en edad de jubilarse (Las mujeres se jubilan con 60 años o más. Los hombres se jubilan con 65 años o más). En caso de haber ingresado valores erróneos (edad fuera de rango o género inválido), informar tal situación */

let edadMIn = 1;
let edadMax = 120;

let genero = prompt("Por favor ingrese su genero como F o M");
let generoIngresado= genero.toUpperCase();
let edad = parseInt(prompt("Por favor ingrese su edad"));

if (edadMIn < edad && edad < edadMax){
    if (generoIngresado === "F" || generoIngresado === "M"){
        if(edad >= 65 || genero == "F" && edad >=60){
        console.log("La persona se encuentra en edad de jubilarse")
        }else{
            console.log("La persona no se encuentra en edad de jubilarse")
        }
    }else{
        console.log("El genero ingresado es inválido")
    }
} else{
    console.log("La edad ingresada es inválida")}


