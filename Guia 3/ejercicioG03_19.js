/* FLUJO DE REPETICIÓN COMBINADA Y ANIDAMIENTO */
/* 19) Realizá un programa que permita la validación del ingreso a un sitio web. Teniendo ya precargados un nombre de usuario ("admin") y una contraseña ("123456"), el programa debe permitir al usuario ingresar sus credenciales. Si las mismas son erróneas, se volverán a pedir hasta un máximo de 3 intentos. Finalmente, la computadora debe mostrar alguno de los siguientes mensajes según sea el caso: "Acceso concedido" o "Se ha bloqueado la cuenta". */

let usuario = "admin";
let contrasenia = "123456";
let usuarioIngresado;
let contraIngresada;
let i=0;

usuarioIngresado = prompt("Por favor ingrese su usuario");
contraIngresada = prompt("Por favor ingrese su contraseña");
i++;

while (i<3 && usuarioIngresado!= usuario && contraIngresada != contrasenia){
    console.log(`Crerenciales incorrectas. Intentos restantes: ${3-i}`);
    usuarioIngresado = prompt("Por favor ingrese su usuario");
    contraIngresada = prompt("Por favor ingrese su contraseña");  
    i++; 
}


if (i===3){
    console.log("Se ha bloqueado la cuenta");
}else{
    console.log("Acceso concedido");
};

