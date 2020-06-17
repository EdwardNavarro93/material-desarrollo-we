/*
Spread Operator (operador de expansión)

Su sintaxis es ...

*/

const numbers=[-12,2,3,23,43,2,3];

console.log(...numbers); //pone cada valor por separado

//Enviar elementos en un array a una función

const addNumbers = (a, b, c) => {
    console.log(a+b+c);
}


console.log("envia elementos de un array a una funcion");

let numbersToAdd = [1,2,3];

addNumbers(...numbersToAdd);

//Añadir un array a otro array
    let users = ['javier', 'david', 'rosa', 'juan', 'mercedes']

    let newUsers = ['marta', 'jaime', 'laura']

    console.log("agrega un array a otro array");

    console.log(`array 1: ${users}, array2: ${newUsers} y el array obtenido es `);
    users.push(...newUsers)
    console.log(users);

//Copiar arrays
    let arr1 = [1, 2, 3, 4,5]
    let arr2 = [...arr1]
    
    console.log("copiar un array")
    console.log(`original: ${arr1} --> copia: ${arr2}`);
    
//Concatenar arrays
    let arr_1 = [1, 2, 3, 4, 5]
    let arr_2 = [6, 7, 8]

    console.log(`concatenar el array1: ${arr_1} con el ${arr_2} y el resultado es`)
    let arrConcat = [...arr_1, ...arr_2];
    console.log(arrConcat);

// Enviar un número indefinido de argumentos a una función (parámetros REST)

console.log("parametros rest mira el codigo");
const restParms = (...numbers) => {
        console.log(numbers);
    }

restParms(1,2,3,4,5,6,7,8); 


//librería math
const numbers_1 = [-12, 2, 3, 23, 43, 2, 3];

console.log(`obtener el maximo y el minimo del array ${numbers_1} con el objeto Math`);
console.log("el maximo es "+ Math.max(...numbers_1));
console.log("el minimo es "+ Math.min(...numbers_1));

//Eliminar elementos duplicados
console.log("eliminar elementos duplicados de un array con el bjeto Set");

const noduplicate= [...new Set(numbers_1)];
console.log(`array original: ${numbers_1}, array sin elementos duplicados: `)

console.log(noduplicate);
