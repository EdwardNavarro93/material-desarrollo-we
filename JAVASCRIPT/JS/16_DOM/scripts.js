/* 
document.getElementById('id') - Acceder a un elemento a través de su id

document | element .querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS

document | element .querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/

//elementos siempre se guardan en una constante
const title = document.getElementById('title'); //selecciona un elemento por su ID

console.log(title);

title.textContent = 'Dom - Accediendo a los nodos'; // es una propiedad que permite leer o editar 

const paragraph = document.querySelector('.paragraph'); //selcciona al primer elemento con ese selector CSS 

console.log(paragraph);


const span_paragraph = paragraph.querySelector("span"); // se puede a acceder a un elemento dentro de otro

console.log(span_paragraph); 


const paragraphs= document.querySelectorAll('.paragraph'); // selecciona todos los elementos con dicho selector

const paragraphsSpread = [...document.querySelectorAll('.paragraph')]; //usar el spread operator para convertir el objeto en array

const paragraphsArray = Array.from(document.querySelectorAll('.paragraph')); // convrtir el objto en array usando una propiedad de arrays

paragraphsArray.map(p => p.style.color='green');

 console.dir(paragraphs);


//atributos y clases en el DOM
/* 
Atributos
    element.getAttribute('attribute')
    element.setAttribute('attribute', value)

Clases
    element.classList.add('class','class',...)
    element.classList.remove('class','class',...)

    element.classList.contains('class') devuelve true o false si contiene la clase o no

    element.classList.replace('oldClass', newClass) 
    
    element.classList.toggle('class'[,force])
atributos directos
    id
    value
*/

const title2 = document.getElementById('title2')
const name = document.getElementById('name')

console.log(name.getAttribute('type')); // selecciona el atributo de un elemento
name.setAttribute('type', 'password'); //cambia el tipo de atributo de un elemento

// clases

title2.classList.add('main-title', 'other-title'); //añade clases css a la etiqueta
title2.classList.remove('other-title'); //remuve una clase


//veriica si el elmnto contiene la clase o no
if(title2.classList.contains('main-title')){
    console.log("el elemento " + title2.nodeName + " tiene la clase main-title");

}else{
    console.log("el elemento " + title2.nodeName + " NO tiene la clase main-title");
}
console.log(title2);


title2.classList.replace('main-title', 'second-title'); //remplaza una clase por otra

console.log(title2);

//atributos directos

console.log(title2.id) //devuelve el id de la etiqueta seleccionada

console.log(title2.innerHTML) //devuelve las etiquetas html deesde el elemento

console.log(title2.textContent); // devuelve el texto dentro del elemento

console.log(name.value); //devuelve

console.log(name.value.length);