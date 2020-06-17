//DOM - Crear e insertar elementos

/* 
Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML

Añadir un elemento al DOM: parent.appendChild(element) (lo coloca de ultimo)

Fragmentos de código: document.createDocumentFragment()
*/

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const title = document.getElementById('title');
const daysList = document.getElementById('daysList');
const selectDays = document.getElementById('daysSelect');

//crear un elemento e isertarlo en el documento
const itemlist = document.createElement('LI'); //debe ponerse en mayusculas "LI"
itemlist.textContent = "soy un elemento";
daysList.appendChild(itemlist);

title.innerHTML = 'DOM - <span> Crear e insertar elementos I </span>'; //inserta codigo html 

//crear e insertar codigo a html sin sobreecarga el navegador

const fragmentList = document.createDocumentFragment();


//crear el codigo HTML
for(let day of days){

    const itemlist2 = document.createElement('LI');
    itemlist2.textContent = day;
    fragmentList.appendChild(itemlist2);
    
}

//insertar todo el codigo en una sola linea
daysList.appendChild(fragmentList);

const fragmentSelect = document.createDocumentFragment()

for(let day of days){
    
    const selectItem =document.createElement('OPTION');
    selectItem.setAttribute('value', day.toLowerCase);
    selectItem.textContent = day;
    fragmentSelect.appendChild(selectItem);

}
daysSelect.appendChild(fragmentSelect);


/*
Insertar y eliminar elementos II

    parent.insertBefore(newElement, referenceElement) - Insertar un elemento antes del elemento de referencia

    SOPORTE TOTAL
    parent.insertAdjacentElement(position, element)

    parent.insertAdjacentHTML(position, HTML)
    parent.insertAdjacentText(position, text)

    positions: 
        beforebegin - Antes de que empiece (hermano anterior)
        afterbegin - después de que empiece (primer hijo)
        beforeend - antes de que acabe (último hijo)
        afterend - después de que acabe (hermano siguiente)

    parent.replaceChild(newChild, oldChild) - Reemplaza un hijo por otro
*/

const list = document.getElementById('list');
const newElement = document.createElement('li');
newElement.textContent = "I'm a new element";

//list.insertBefore(newElement, list.children[1]); //inserta elementos en cualquier posicion

//list.children[0].insertAdjacentElement('beforebegin',newElement) //inserta en la primera posicion
// list.insertAdjacentElement('afterbegin',newElement) //inserta en la primera posicion
// list.insertAdjacentElement('beforeend',newElement) //inserta en la ultima posicion
//list.children[1].insertAdjacentElement('afterend',newElement) //inserta en la ultima posicion

//otra forma

list.children[1].insertAdjacentHTML('afterend', '<li>Elemento con HTML</li>')
// list.children[1].insertAdjacentText('afterend', '<li>Elemento con HTML</li>')


list.replaceChild(newElement,list.children[0]) //reemplaza un elemento por otro


/*
    DOM manipulation convenience methods - JQuery Like
    https://caniuse.com/#search=jQuery-like

    positions:
        parent.before() - Antes de que empiece (hermano anterior)
        parent.prepend() - después de que empiece (primer hijo)
        parent.append() - antes de que acabe (último hijo)
        parent.after() - después de que acabe (hermano siguiente) 

        child.replaceWith(newChild)
*/

//estos son mas faciles que los anteriores 

const list2 = document.getElementById('list2');
const newElement2 = document.createElement('li');
newElement2.textContent = "soy un nuevo elemento";


//list2.children[0].before(newElement2); //antes de algun elemento
//list2.prepend(newElement2); //primer hijo
//list2.append(newElement2); //ultimo hijo
//list2.children[1].after(newElement2);// antes de algun elemento

list2.children[0].replaceWith(newElement2);

//document.getElementById('child-to-replace').replaceWith(newElement)

/*
    Clonar y eliminar elementos
        element.cloneNode(true|false) - Clona el nodo. Si le pasamos true clona todo el elemento con los hijos, si le pasamos false clona solo el elemento sin hijos

        element.remove() - Elimina el nodo del DOM
        element.removeChild(child) - Elimina el nodo hijo del DOM
*/

list2.after(list2.cloneNode(true))

//list2.remove()


list2.removeChild(list2.children[1])
