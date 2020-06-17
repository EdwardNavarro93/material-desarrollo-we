/* Bucles */

/* 
    Determinados

    bucle for

    Su sintaxis se compone de 3 partes
        Iniciación de variable
        Número de vueltas
        Incremento o decremento

    for(let i=0;i<=10;i++){
        Código a ejecutar
    }
*/

let numbers = [56,14,23,37,41,59];


console.log("array evaluado "+ numbers);
console.log("recorrer bucle de forma normal");

//recorrer un array
for(let i=0;i<numbers.length;i++){
    console.log(`i vale ${i} y el valor de esa posición en el array es ${numbers[i]}`);
}

console.log("recorrer bucle de forma inversa");

//bucle inverso

for(let i=numbers.length-1;i>=0;i--){
    console.log(`i vale ${i} y el valor de esa posición en el array es ${numbers[i]}`);
}


/* Bucles */

/* 
    Determinados

    bucle for of / for in

    for(let variable of/in estructura){
        Código a ejecutar
    }

    Palabras reservadas de bucles

        break - Rompe el bucle
        continue - Se salta la(s) posicion(es) que le indequemos y después continúa su ejecución
*/


let names = ['Paco', 'José', 'Paula', 'María'];

console.log("arrya de nombres "+ names);
console.log("bucle for of recorre el array");

for(let name of names){
    console.log(name);
}

console.log("bucle for in devuelve los indices del array");
for(let index in names){
    console.log(index);
}


console.log("uso de continue");

for(let name of names){
    if(name==='Paula'){
        continue //salta el valor de paula
    }
    console.log(name);
}

console.log("uso del break");

for(let name of names){
    if(name==='Paula'){
        break //rompe el bucle por completo
    }
    console.log(name);
}

