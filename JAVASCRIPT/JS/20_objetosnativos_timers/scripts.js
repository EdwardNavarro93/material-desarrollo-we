const button = document.getElementById('button');

/*
Objeto window - Es el objeto global, de él descienden todos los objetos
    alert()
    prompt()
    confirm()
*/

window.alert('bienvenido a la pagina'); //genera una ventana de alerta
//alert //es lo mismo

const username = prompt('Ingresa tu nombre');

if (confirm('Acepta los terminos de la pagina?')) {
    console.log('El usuario acepto');
} else {
    console.log('El usuario no acepto');
} 

/* Objeto console - Es el objeto que contiene la consola del navegador
    https://developer.mozilla.org/es/docs/Web/API/Console
    console.log()
    console.dir()
    console.error()
    console.table()
*/

const person = {
    name: 'Dorian',
    age: 30,
    email: 'dorian@gmail.com'
}

console.log('hola'); //imprime un mensaje en la consola
//console.dir(button); //permite desplegar las propiedades de los objetos que se imprimen
console.error('tines un error') //imprime un error en consola
console.table(person); //imprime de mejor manera


/* Objeto location - Es el objeto que contiene la barra de direcciones
    https://developer.mozilla.org/es/docs/Web/API/Location
    location.href
    location.protocol
    location.host
    location.pathname
    location.hash
    location.reload() //recargar pagina
*/

console.log(location.href)
console.log(location.protocol)
console.log(location.host)
console.log(location.pathname)
console.log(location.hash)

//location.href = 'https://www.google.com';


/* Objeto history

permite navegar a lo largo del historial de la pestaña que tengamos abierta

    https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador

    back()
    forward()
    go(n|-n)

    length
*/

/* Objeto date
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
    https://www.w3schools.com/jsref/jsref_obj_date.asp
*/

// los dias y los meses comienzan a contar desde 0 porque sigue el calendario anglosajon (0 - enero 11 diciembre, 0 es domingo y 6 es sabado)

const date = new Date()

console.log("la fecha de hoy es ")
console.log(date) 

/*
Timers
    Timeout: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

    setTimeout(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función despues de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)

    Interval: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

    setInterval(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/

/*
const saludar = () => {
    console.log('Hola');
}

button.addEventListener('click', () =>{
    setTimeout(saludar, 3000); //ejecutara la funcion despues de 3 segundos
})
*/

/*const timeout = setTimeout(() => {
    console.log('ADIOS'); 
}, 3000) //ejecutar adios cada 3 segundos

button.addEventListener('click', () => {
    clearTimeout(timeout) // parar el timer 
})
*/

//crear un contador de segundos
const saludar = () => {
    console.log('Hola')
}

let cont = 0

//const interval = setInterval(saludar, 3000) //ejecuta la funcion cada 3 segundos 


const interval = setInterval(() => {
    console.log(cont)
    cont++
}, 1000)


button.addEventListener('click', () => {
    clearInterval(interval) //para la ejecucion del programa
})