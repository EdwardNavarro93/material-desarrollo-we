/* 
 - Son estructuras que nos permiten almacenar varios datos y agruparlos.
 - Se pueden llenar con cualquier tipo de dato válido en JavaScript y deben ir separados por comas
 - Se pueden mezclar tipos de datos, pero no es recomendable.
 - Se declaran con llaves cuadradas o corchetes []
 - Pueden declararse vacíos o con un contenido ya establecido
 - Pueden añadirse o eliminarse elementos en el momento que queramos

    let array = [] //Array vacío
    let numeros = [1,2,3,4,5] //Array con contenido inicial
*/

let numeros=[1,2,3,4,5,];
let palabras=['hola', 'estamos', 'en', 'YouTube'];
let booleans=[true, true, false];

console.log(palabras);
console.log(numeros[0]+numeros[1]);
console.log(`la longitud del array es  ${numeros.length}`);
console.log(`La palabra "${palabras[3]}" tiene ${palabras[3].length} letras`);

console.log("Aqui comienzan las propiedades de los arrays");


/* 
    Arrays - Propiedad
        .length - devuelve el número de posiciones que contiene el array
*/

let numbers = [1,2,3,3,4,5,6];
let a=3;

console.log("el array evaluado es " +  numbers);
console.log("el array tiene longitud " + numbers.length);


/*
    Arrays - Métodos
        Array.isArray(variable a evaluar) - Devuelve true si la variable es un array.
*/

console.log("metodo que evalua si la variable es array o no " + Array.isArray(numbers));

/*
    Eliminar un elemento
        .shift() - Elimina el primer elemento del array y devuelve ese elemento
        .pop() - Elimina el último elemento de un array y devuelve ese elemento
*/

let deleteElement = numbers.shift();
console.log(`metodo que elimina el primer elemento "${deleteElement}" del array. El nuevo array es ${numbers}`);

console.log(`metodo que elimina el ultimo elemento "${numbers.pop()}" del array. El nuevo array es ${numbers}`);


/*
    Añadir elementos
        .push(element1, element2,...) - Añade uno o más elementos al final del array y devuelve la nueva longitud.

        .unshift(element1, element2,...) - Añade uno o más elementos al comienzo del array y devuelve la nueva longitud.
*/


let addelement1=10;
let addelement2=17;

//push
console.log(`metodo que añade el elemento "${addelement1}" al final del array.`);
let lengthpusarray= numbers.push(addelement1); // guarda la longitud del nuevo array
console.log("el nuevo array es "+ numbers)

//unshift
console.log(`metodo que añade el elemento "${addelement2}" al principio del array.`);
let lengthunshiftarray= numbers.unshift(addelement2); //guarda la longitud del nuevo array
console.log("el nuevo array es "+ numbers)


/*    
    .indexOf() - Devuelve el primer índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.
*/

console.log("metodo que devuelve el indice del valor 5. El indice es "+numbers.indexOf(5)); //devuelve la posicion del valor especificado 


/* 
    .lastIndexOf() - Devuelve el último índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.
*/

console.log("metodo que devuelve el ultimo indice del valor 3. El indice es "+numbers.lastIndexOf(3));

/* 
    .reverse() - Invierte el orden de los elementos del array.
*/

let arrayreverse=numbers.reverse();

console.log(`metodo que invierte un array ${arrayreverse}`);

/*       
    .join('separador') - Devuelve un string con el separador que indiquemos, por defecto son comas 
*/

let arrayString = numbers.join('-')
console.log(`metodo que devuelve el array en formato string ${arrayString}`);


/*     
    .splice(a,b,items) - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
        a - Indice de inicio
        b - Número de elementos (opcional)
        items - Elementos a añadir en el caso de que se añadan. (opcional)
*/

// numbers.slice(2); //elimina desde la posicion 2 hasta el final

//numbers.splice(2, 3); //elimina 3 elementos desde la posicion 2 hacia adelante

numbers.splice(2,0,10,20,30); //añade elementos en la posicion indicada (solo si b es distinto de 0 sino eliminaria los elementos que se indiquen en b)
console.log("metodo que permite añadir o eliminar elementos en cualquier posicion");
console.log(numbers);


/* 
    .slice(a,b) - Extrae elementos de un array desde el índice a hasta el índice b. Si no existe b lo hace desde a hasta el final, si no existe ni a ni b hace una copia del original.
*/

let newNumbers = numbers.slice(2,5); //no incluye la ultima posicion
console.log("metodo que permite cortar un array "+ newNumbers);



//Arrays - Métodos II

/* 
.from(iterable) - Convierte en array el elemento iterable

.sort([callback]) - Ordena los elementos de un array alfabéticamente(valor Unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos.

.forEach(callback(currentValue, [index])) - ejecuta la función indicada una vez por cada elemento del array.

.some(callback) - Comprueba si al menos un elemento del array cumple la condición

.every(callback) - Comprueba si todos los elementos del array cumplen la condición

.map(callback) - Transforma todos los elementos del array y devuelve un nuevo array

.filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array

.reduce(callback) - Reduce todos los elementos del array a un único valor
*/


/* FROM */
let word = 'Hola mundo';

console.log("metodos de los array Parte 2");

console.log(`metodo que convierte la palabra "${word}" en un array`);
console.log("array "+ Array.from(word));

/* sort*/
const letters = ['b', 'c', 'z', 'a'];
const numbers_2 = [1,8,100,300,3];

console.log(`metodo que ordena los elementos alfabeticamente ${letters.sort()}`);

console.log("como enviar un callback a los metodos del array");
console.log(`callback para ordenar los numeros ${numbers_2} con sort`);
console.log(numbers_2.sort((a,b)=>a-b)); // utiliza un comparador que coje parejas del array y determina cual es mayor 


/*
 asi es como funciona internamente el ejemplo anterior
function menorMayor(a, b) {
    if (a-b < 0) return -1;
    if (a-b > 0) return 1;
    if(a == b) return 0;
}

function mayorMenor(a, b) {
    if (b-a < 0) return -1;
    if (b-a > 0) return 1;
    if(b == a) return 0;
} */

//for each

const numbers_3 = [12, 25, 47, 84, 98];

console.log("metodo que ejecuta una funcion indicada en este caso recorrer el array "+ numbers_3);

numbers_3.forEach((number) => console.log(number)); //(ejecuta una funcion)para cada numero dentro de number 3 imprimalo en cosola

numbers_3.forEach((number, index) => console.log(`${number} está en la posición ${index}`));


//some y every


const words = ['HTML', 'CSS', 'JavaScript', 'PHP'];

console.log(`metodo que verifica si un elemento cumple la condicion longitud de las palabras  "${words}"  " sean mayores que 10`);

console.log(words.some(word => word.length>=10));

console.log(`metodo que verifica si todos los elementos cumplen la condicion longitud de las palabras  "${words}"  " sean mayores que 10`);

console.log(words.every(word => word.length>=10));


//map
console.log(`metodo que recorre el array ${numbers_3} y crea uno (array*2)`);

//numbers_3.map((number) => console.log(number*2));

let array2 = numbers_3.map(number => number*2);
 console.log("el nuevo array es "+ array2);


 //filter
 console.log(`metodo que crea un nuevo array con los elementos del array ${numbers_3} que cumplan la condicion: elemento >40`);
 const arrayfilter = numbers_3.filter(number => number>40);

 console.log("el nuevo array es "+ arrayfilter);

//reduce

console.log("metodo que Reduce todos los elementos del array a un único valor");

console.log(`la suma de todos los elementos del array ${numbers_3} es ${numbers_3.reduce((a,b)=> a+b)}`);


//ejemplo mas avanzado

console.log("un ejemplo un poco mas avanzado pero que no entendi");

//un array de objetos
const users = [
    {
        name: 'user 1',
        online: true
    },
    {
        name: 'user 2',
        online: true
    },
    {
        name: 'user 3',
        online: false
    },
    {
        name: 'user 4',
        online: false
    },
    {
        name: 'user 5',
        online: false
    },
    {
        name: 'user 6',
        online: true
    }
]

console.log("se evalua el siguiente array de objetos");
console.log(users);

console.log("se usa el metodo reduce para saber cuantos usuarios hay conectados");
const usersOnline = users.reduce((cont, user) => {
    if (user.online) cont++
    return cont
},0) //guarda el numero de usuarios que estan conectados

console.log(`Hay ${usersOnline} usuarios conectados`);



