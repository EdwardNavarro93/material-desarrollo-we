/* 
Operador ternario
(condición) ? true : false

(condición) ? 
    (primera sentencia,
    segunda sentencia)
    :
    (primera sentencia,
    segunda sentencia)
*/

let num = 3;
let num2=8;

/* if(num % 2 == 0) console.log(`${num} es par`);
else console.log(`${num} es impar`); */

//una sola sentencia
(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);

//varias sentencias
(num2 % 2 == 0) ? 
    (
        console.log(`${num2} es par`),
        console.log(`${num2} es par 2`)
    )
     : 
    (
        console.log(`${num2} es impar`),
        console.log(`${num2} es impar`)
    )