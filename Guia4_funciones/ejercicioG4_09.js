/* DEFINICIÓN Y TESTEO DE FUNCIONES */
/* 9) mostrarNPrimos, que muestre por la consola, separados por comas, los primeros n números primos. El valor de n se recibe como  parámetro.*/

/* primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409] ;

mostrar = [];

function mostrarNPrimos(a){
    for(let i = 0; i<a; i++){
        primo = primos[i];
        mostrar.push(primo);
    }
    return mostrar;
} 

console.log(mostrarNPrimos(4));
 */

/* --------------------------------------- Resolución de clase --------------------------------------- */

function cantDivisores(num) {
    if (num < 0) {
        num = num * (-1); // num = -num;
    }
    let contDivisores = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            contDivisores++;
        }        
    }
    return contDivisores;
}

function esPrimo(num) {
    return cantDivisores(num) == 2;
}

function mostrarNPrimos(n) {
    let cont = 1;
    let x = 2;
    while (cont <= n) {
        if (esPrimo(x)) {
            console.log(x);
            cont++;
        }
        x++;       
    }
}

console.log(mostrarNPrimos(8));
