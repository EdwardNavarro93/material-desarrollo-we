/*
Ordena 3 números de mayor a menor
Permutaciones con 3 elementos
Posibilidades 3! = 3*2*1 = 6
abc - 321
acb - 312
bac - 231
bca - 132
cab - 213
cba - 123
*/

/*constantes que permiter utilizar etiquetas html dentro de JS*/
const numbers = document.getElementById('numbers');
const results = document.getElementById('results');

/*permite ingresar valores desde el teclado*/
let a= prompt('Introduzca el primer numero');
let b= prompt('Introduzca el segundo numero');
let c= prompt('Introduzca el tercer numero');

/*permite ingresar texto en la etiqueta html*/
numbers.textContent = `Los numeros ingresados desde el teclado son ${a}, ${b}, ${c}.`;

/* El ejercicio de un numero mayor que otro */
if(a>=b && a>=c){
    if(b>c){
        results.textContent = `El orden es: ${a}, ${b}, ${c}`;
    }else{
        results.textContent = `El orden es: ${a}, ${c}, ${b}`;
    }
}else if(b>=a && b>=c){
    if(a>c){
        results.textContent = `El orden es: ${b}, ${a}, ${c}`;
    }else{
        results.textContent = `El orden es: ${b}, ${c}, ${a}`;
    }
}else if(c>=a && c>=b){
    if(a>b){
        results.textContent = `El orden es: ${c}, ${a}, ${b}`;
    }else{
        results.textContent = `El orden es: ${c}, ${b}, ${a}`;
    }
}
