/* 4) Realizá un programa que permita al usuario ingresar el valor salarial de una hora de trabajo y la
cantidad de horas trabajadas por día. La computadora debe mostrar el valor del salario semanal,
asumiendo que trabaja todos los días hábiles y media jornada los sábados. */

hora_trabajo = parseInt(prompt("Por favor ingresá el alor salarial de tu hora de trabajo"))
cant_horas = parseInt(prompt("Por favor ingresá la cantidad de horas trabajadas por dia"))


console.log(`El salario semanal es ${5*cant_horas*hora_trabajo+(cant_horas/2)*hora_trabajo}`)   