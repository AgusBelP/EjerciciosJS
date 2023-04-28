/* DEFINICIÓN Y TESTEO DE FUNCIONES */
/* 4) esVocal, que devuelva si un caracter dado como parámetro es o no una letra vocal (contemplar mayúsculas y minúsculas).*/

vocales = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]

let x = prompt("Por favor ingrese una letra");

/* Con una función delcarada */

function esvocal (x){
    if(vocales.includes(x)){
        return "Es vocal";
    }else {
        return "No es vocal"
    }
} 

console.log(esvocal(x));

/* Con una función expresada y un operador triple */

/* const esVocal = vocales.includes(x) ? "Es vocal" : "No es vocal"; 

console.log(esVocal); */