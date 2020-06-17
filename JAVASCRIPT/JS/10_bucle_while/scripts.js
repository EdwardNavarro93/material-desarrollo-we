/* Bucles */

/* 
    Indeterminados - No sabemos el número de veces que se va a ejecutar el código

    Bucle while
    while(condición){
        //código a ejecutar
    }    

    Bucle do...while
    do{
        //código a ejecutar
    }while(condición)
*/

let pass = ' ';


while(pass != 'hola'){
    pass = prompt('Introduzca su contraseña');
}

console.log("al fin saliste del bucle");

do{
    pass = prompt('Introduzca otra contraseña')

}while(pass != 'hola')


console.log("saliste del otro bucle");