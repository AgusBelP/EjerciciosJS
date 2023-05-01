/* DESARROLLO DE PROGRAMAS MODULARIZADOS*/
/* 12) Realizá un programa que permita al usuario ingresar su edad (entre 1 y 120 años) y su género ('F' o 'M'). La computadora debe indicar si la persona está o no en edad de jubilarse.
Las mujeres se jubilan con 60 años o más. Los hombres se jubilan con 65 años o más.
*/

let edad = Number(prompt("Por favor ingrese su edad"));
let genero = prompt("Por favor ingrese su genero (F o M)");

if(edad >= 65){
    console.log("Puede jubilarse");
}else if(edad>=60 && (genero === "F" || genero === "f")){
    console.log("Puede jubilarse");
    }else{
        console.log("No puede jubilarse");
    };





