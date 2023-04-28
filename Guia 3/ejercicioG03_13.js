/* FLUJO DE REPETICIÓN POR CONDICIÓN */
/* 13) Realizá un programa que permita al usuario ingresar números hasta que se introduzca un 0. La computadora debe mostrar el número máximo y el número mínimo.
*/


let num;
let min;
let max;
let i = 0;

do{
    num = Number(prompt("Por favor introduzca un número"));
    if(i===0){
        min = num;
        max = num;
    }else{
        if(num>max){
            max = num;
        }else if(min>num && num != 0){
            min = num;
                }else{
                    min = min;
                    max = max;
                }
    }
    i+=1;
}while(num!=0)

console.log(`El máximo ingresado es ${max} y el mínimo ingresado es ${min}`);



