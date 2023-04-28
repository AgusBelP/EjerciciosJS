let numA= Number(prompt("Ingrese un número"))
let numB= Number(prompt("Ingrese otro número"))

function validate(a,b){
    if(a>b){
        return a+b;
    }
}

console.log(validate(numA, numB));

console.log(validate((validate(numA, numB)), 50));