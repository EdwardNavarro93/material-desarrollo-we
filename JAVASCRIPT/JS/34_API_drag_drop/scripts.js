/*
    API drag & drop:

    Existen dos partes principales en esta API, el objeto a arrastrar y la zona donde vamos a dejarlo

    Para controlar estas acciones tenemos varios eventos de cada una de las partes
        Objeto a arrastrar:
            dragstart: Se dispara al comenzar a arrastrar
            drag: Se dispara mientras arrastramos
            dragend: Se dispara cuando soltamos el objeto

        Zona de destino:
            dragenter: Se dispara cuando el objeto entra en la zona de destino
            dragover: Se dispara cuando el objeto se mueve sobre la zona de destino
            drop: Se dispara cuando soltamos el objeto en la zona de destino
            dragleave: Se dispara cuando el objeto sale de la zona de destino
*/

const smile = document.getElementById('smile')
const dropZone = document.getElementById('drop-zone')

/*
smile.addEventListener('dragend', () =>{
    console.log('drag end')
})
*/

dropZone.addEventListener('dragenter', (e) => {
    e.preventDefault() //esto es necesario para que funcione
    console.log('el elemento acaba de entrar')
})



dropZone.addEventListener('dragover', (e) => {
    e.preventDefault() //esto es necesario para que funcione
    console.log('el elemento se esta moviendo adentro')
})

dropZone.addEventListener('drop', (e) => {
    e.preventDefault() 
    console.log('soltaste el elemento adentro')
})

dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault() 
    console.log('saliste de la zona')
})