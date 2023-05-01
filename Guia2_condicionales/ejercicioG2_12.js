/* 12) Realizá un programa que permita al usuario ingresar el día y el mes de su cumpleaños (de manera independiente). La computadora debe indicar cuál es su signo del zodiaco. Deben validarse tanto el día como el mes. */


let mesNac = parseInt(prompt("Por favor ingrese el mes de su cumpleaños"));
let diaNac = parseInt(prompt("Por favor ingrese el dia de su cumpleaños"));

let mes_31 = [1,3,5,7,8,10,12];
let mes_30 = [4,6,9,11];
let mes_28 = [2];


if(1<=mesNac && mesNac<=12){
    if(1<=diaNac && diaNac<=31){
        if(((mes_31.includes(mesNac)) && (1<=diaNac && diaNac<=31)) || ((mes_30.includes(mesNac)) && (1<=diaNac && diaNac<=30)) || ((mes_28.includes(mesNac)) && (1<=diaNac && diaNac<= 28))){
            switch(mesNac){
                case 1:
                    if(1<= diaNac && diaNac <= 22){
                        console.log("Capricornio");
                    }else{
                        console.log("Acuario");
                    };
                    break;
                case 2:
                    if(1<= diaNac && diaNac <= 22){
                        console.log("Acuario");
                    }else{
                        console.log("Piscis");
                    };
                    break;
                case 3:
                    if(1<= diaNac && diaNac <= 22){
                        console.log("Piscis");
                    }else{
                        console.log("Aries");
                    };
                    break;
                case 4:
                    if(1<= diaNac && diaNac <= 22){
                        console.log("Aries");
                    }else{
                        console.log("Tauro");
                    };
                    break;
                case 5:
                    if(1<= diaNac && diaNac <= 22){
                        console.log("Tauro");
                    }else{
                        console.log("Géminis");
                    };
                    break;
                case 6:
                    if(1<= diaNac && diaNac <= 22){
                        console.log("Géminis");
                    }else{
                        console.log("Cáncer");
                    };
                    break;
                case 7:
                    if(1<= diaNac && diaNac <= 22){
                        console.log("Cáncer");
                    }else{
                        console.log("Leo");
                    };
                    break;
                case 8:
                    if(1<= diaNac && diaNac <= 22){
                        console.log("Leo");
                    }else{
                        console.log("Virgo");
                    };
                    break;
                case 9:
                    if(1<= diaNac && diaNac <= 22){
                        console.log("Virgo");
                    }else{
                        console.log("Libra");
                    };
                    break;
                case 10:
                    if(1<= diaNac && diaNac <= 22){
                        console.log("Libra");
                    }else{
                        console.log("Escorpio");
                    };
                    break;
                case 11:
                    if(1<= diaNac && diaNac <= 22){
                        console.log("Escorpio");
                    }else{
                        console.log("Sagitario");
                    };
                    break;
                case 12:
                    if(1<= diaNac && diaNac <= 22){
                        console.log("Sagitario");
                    }else{
                        console.log("Capricornio");
                    };
                    break;}
        }else{
            console.log("La combinación de mes y día de nacimiento ingresadas no existe");
        }
    }else{
        console.log("El día ingresado no existe");
    }
}else{
    console.log("El mes ingresado no existe")
}
 