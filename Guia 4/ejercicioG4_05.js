/* DEFINICIÓN Y TESTEO DE FUNCIONES */
/* 5) mostrarSucesion, que imprima por consola la sucesión de números inclusiva entre a y b, dados como parámetros.*/

num1= parseInt(prompt("Por favor ingrese el primer número entero"))
num2= parseInt(prompt("Por favor ingrese el segundo número entero"))

/* function mostrarSucesion(a, b){
    console.log(`Los números ingresados son ${a} y ${b}`);
    console.log("La secuencia incluyendo los números ingresados es:");
    
    for (let j= a; j <= b; j++){
        console.log(j);
    } 
}

mostrarSucesion(num1, num2); */

const sucesion = (a,b) =>{
    console.log(`Los números ingresados son ${a} y ${b}`);
    console.log("La secuencia incluyendo los números ingresados es:");
    
    for (let j= a; j <= b; j++){
       console.log(j);
    } 

}

sucesion(num1,num2);
