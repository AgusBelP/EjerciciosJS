/* Realizá un programa que permita al usuario ingresar la edad y el sueldo de cierto empleado. La computadora muestra el monto del aporte al sindicato que se debe descontar del salario del empleado, según el siguiente cuadro. Además, si la persona tiene 30 años o menos, se cobra un 30% adicional del valor del aporte. */

let edad = parseInt(prompt("Por favor ingrese su edad"));
let sueldo = parseInt(prompt("Por favor ingrese su sueldo"));
let aporte = 0;
let porc1 = 0.7/100;
let porc2 = 1.4/100;
let porc3 = 2.1/100;
let porc4 = 2.8/100;

if(sueldo <20000){
    if(edad<=30){
        console.log(`El valor del aporte es de $${Math.round(sueldo*porc1*1.3)}`)
    }else{
        console.log(`El aporte es de $${Math.round(`${sueldo*porc1}`)}`)
    }
}else if(20000 < sueldo && sueldo < 29999){
    if(edad<=30){
        console.log(`El valor del aporte es de $${Math.round(`${sueldo*porc2*1.3}`)}`)
    }else{
        console.log(`El aporte es de $${Math.round(`${sueldo*porc2}`)}`)
    }
}else if(30000 < sueldo && sueldo < 39999){
    if(edad<=30){
        console.log(`El valor del aporte es de $${Math.round(`${sueldo*porc3*1.3}`)}`)
    }else{
        console.log(`El aporte es de $${Math.round(`${sueldo*porc3}`)}`)
    }
}else if(edad<=30){
        console.log(`El valor del aporte es de $${Math.round(`${sueldo*porc4*1.3}`)}`)
    }else{
        console.log(`El aporte es de $${Math.round(`${sueldo*porc4}`)}`)
    }




