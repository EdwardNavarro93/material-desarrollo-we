/*
    API webStorage:
        Los dos mecanismos en el almacenamiento web son los siguientes:

            sessionStorage mantiene un área de almacenamiento separada para cada origen que está disponible mientras dure la sesión de la página (mientras el navegador esté abierto, incluyendo recargas de página y restablecimientos).

            localStorage hace lo mismo, pero persiste incluso cuando el navegador se cierre y se reabra.

        Ambos funcionan con clave:valor y tienen dos métodos fundamentales setItem() para asignar una clave:valor y getItem() que recibe como parámetro la clave de la que quieremos obtener el valor
*/

const form = document.getElementById('form')
const keys = document.getElementById('keys')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // const person = {
    //     name: 'Dorian',
    //     email: 'dorian@gmail.com'
    // }

    // sessionStorage.setItem('person', JSON.stringify(person)) //tambien se puede guardar objetos
    
    sessionStorage.setItem('name', 'dorian') //almacena este valor en el almacenamiento de sesion del navegador
    sessionStorage.setItem(form.key.value, form.value.value) //almacena el formulario en el almacenamiento de sesion
    //localStorage.setItem(form.key.value, form.value.value) //almacena el formulario en el almacenamiento local
    keys.innerHTML += `<option>${ form.key.value }</option>`
    form.reset()
})

keys.addEventListener('change', () => {
    document.getElementById('infoValue').textContent = sessionStorage.getItem(keys[ keys.selectedIndex ].textContent) //obtiene el valor del almacenamiento de sesion cuando se le envia la "key" 
})

// localStorage.clear() //limpia todo de local
//sessionStorage.clear() //limpia todo de sesion
sessionStorage.removeItem('name') //limpia el almacenamiento donde esta la key