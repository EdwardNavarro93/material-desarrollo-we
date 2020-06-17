/*

Objeto Math

Objeto estático

Tenemos que usar su nombre para utilizarlo

Propiedades:
    Math.E - Math.Pi
Métodos:
    Math.abs(x) Devuelve el valor absoluto de x
    Math.ceil(x) Devuelve el entero más grande mayor o igual que un número.
    Math.floor(x) Devuelve el entero más pequeño menor o igual que un número.
    Math.pow(x, y) Devuelve la potencia de x elevado a y
    Math.sqrt(x) Devuelve la raiz cuadrada de x
    Math.random() Genera un número pseudoaleatorio entre 0 y 1
    Math.round(x) Devuelve el valor de un número redondeado al entero más cercano.
    Math.sign(x) Devuelve el signo de la x, que indica si x es positivo, negativo o cero.
*/

console.log(Math.E); //euler
console.log(Math.PI); //pi

let num = 5.9;
let num2=2;
let num3=-10;

console.log(`propiedad abs de ${num} da como resultado ${Math.abs(num)}`);
console.log(`propiedad ceil de ${num} da como resultado ${Math.ceil(num)} `);
console.log(`propiedad floor de ${num} da como resultado ${Math.floor(num)}`);

console.log(`propiedad sqrt de ${num} da como resultado ${Math.sqrt(num)}`);

console.log(`${num2} elevado a la 3 es ${Math.pow(num2, 3)}`);

console.log(`propiedad random entre 0 y 1 da como resultado ${Math.random()}`);

console.log(`generar un numero aleatorio entre 0 y 100 da como resultado ${Math.round(Math.random()*100)}`);



/*generar un numero aleatorio entre un maximo y un minimo 

console.log(Math.random() * (max - min)+min);
*/


console.log(`generar un numero aleatorio entre 5 y 10 da como resultado ${Math.round(Math.random() * (10 - 5)+5)}`); //genera un aleatorio entre 5 y 10

console.log(`propiedad sign que muestra el signo de ${num3} da como resultado ${Math.sign(num3)}`); //devuelve -1, 0, 1 