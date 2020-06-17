//Recorrer el DOM (DOM Traversing) 

/* 
Padre - parent (Nodo del que desciende)
    - parentNode - Devuelve el nodo padre (que puede no ser un elemento)
    - parentElement - Devuelve el nodo elemento padre

    NOTA
    Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode y parentElement devolverá siempre null.

Hijos - child (Nodo que desciende de un padre)
    - childNodes - Devuelve todos los nodos hijos
    - children - Devuelve todos los nodos elementos hijos
    - firstChild - Devueleve el primer nodo hijo
    - firstElementChild - Devueleve el primer nodo elemento hijo
    - lastChild - Devueleve el último nodo hijo
    - lastElementChild - Devueleve el último nodo elemento hijo
    - hasChildNodes() - Devueleve true si el nodo tiene hijos y false si no tiene

Hermanos - siblings (Nodo al mismo nivel)
    - nextSibling - Devuelve el siguiente nodo hermano
    - nextElementSibling - Devuelve el siguiente nodo elemento hermano
    - previousSibling - Devuelve el anterior nodo hermano
    - previousElementSibling - Devuelve el anterior nodo elemento hermano

Cercano
    - closest(selector) - Selecciona el nodo más cercano que cumpla      con el selector, aún es experimental.
*/

const parent = document.getElementById('parent')

console.log(parent);
console.log(parent.parentElement); //devuelve el padre que contiene el elemento

//console.log(parent.childNodes); //devuelve todos los nodos del elemento (incluyendo saltos de linea)

console.log(parent.children); //devuelve todos los nodos del elemento de forma limpia

console.log(parent.firstElementChild);

//console.log(parent.firstChild.hasChildNodes()) // verifica si el elemento tiene hijos o no

console.log(parent.parentElement.nextElementSibling); //devuelve el siguiente hermano del elemento

console.log(parent.parentElement.previousElementSibling); //devuelve el anterior hermano del elemento