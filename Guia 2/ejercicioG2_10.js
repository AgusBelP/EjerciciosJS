/* Primer ejercicio de SWITCH 
10) Realizá un programa que permita al usuario ingresar un número entero entre 1 y 12. La computadora debe mostrar por pantalla el nombre del mes del año que representa tal número. Si se ingresa un número fuera de rango, debe mostrar un error. */

num = parseInt(prompt("Por favor ingrese un número del 1 al 12"))

if (1<=num<=12){
    switch(num){
        case 1:
            console.log("Enero");
            break;
        case 2:
            console.log("Febrero");
            break;
        case 3:
            console.log("Marzo");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Mayo");
            break;
        case 6:
            console.log("Junio");
            break;
        case 7:
            console.log("Julio");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Septiembre");
            break;
        case 10:
            console.log("Octubre");
            break;
        case 11:
            console.log("Noviembre");
            break;
        case 12:
            console.log("Diciembre");
            break;
    }
}else{
    console.log("El número ingresado no es válido");
}