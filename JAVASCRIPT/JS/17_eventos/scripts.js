/* 
Eventos de ratón:
    click - cuando pulsamos el botón izquierdo del ratón
    dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown - cuando pulsamos el boton izquierdo del ratón
    mouseup - cuando soltamos el boton izquierdo del ratón
    mousemove - cuando movemos el ratón

Eventos de teclado:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/


const button = document.getElementById('button');
const box = document.getElementById('box');

//button.addEventListener('click', () => {console.log("se hizo click")}); //evento cuando se hace click en el boton

button.addEventListener('dblclick', () => {console.log("se hizo doble click");}); //evento cuando se hace doble click en el boton

box.addEventListener('mouseenter', () => {box.classList.replace('red', 'green');}); //cuando se pasa por encima del elemento con el rton


box.addEventListener('mouseleave', () => {box.classList.replace('green', 'red');}); //cuando se sale del elemento con el raton

//estos dos eventos se utilizan cuando se trabaja con APIS para arrastrar elementos
box.addEventListener('mousedown', () => {console.log("haz pulsado en la caja");}); //evento cuando se pulsa sobre el elemento
box.addEventListener('mouseup', () => {console.log("haz soltado la caja");}); //evento cuando se suelta el elemento


box.addEventListener('mousemove', () => {console.log("estas moviendo el raton en la caja");}); //evento que indica que el raton se mueve dentro del elemento


//eventos de teclado

const input = document.getElementById('input');
const form= document.getElementById('form');
const button2 = document.getElementById('button2');
const button_form = document.getElementById('button_form');
const link = document.getElementById('link')



//input.addEventListener('keydown', () => {console.log("pulsaste una tecla");});
//input.addEventListener('keypress', () => {console.log("mantienes pulsada una tecla");});

input.addEventListener('keyup', (event) => {console.log(event.key);}); //uso del objeto evento

//el objeto padre de JS se denomina window

 button2.addEventListener('click', (event) => {console.log(event.target);} )


 form.addEventListener('submit', (e) => {
    e.preventDefault()  //evita que el elemento haga lo que esta predefinido para hacer(reiniciar la pagina)
    console.log('El formulario se ha enviado');
})

link.addEventListener('click', (e) => {
    e.preventDefault() //evita que vaya a la direccion predefinida
    
})

 //escuchar el click dentro de una galeria

 const gallery = document.getElementById('gallery');

 gallery.addEventListener('click', (event) => {console.log(event.target.textContent)});


 button_form.addEventListener('click', () => {
    input.value='enviado el form'; 
})

button_form.click();  //forzar a que el evento se ejecute