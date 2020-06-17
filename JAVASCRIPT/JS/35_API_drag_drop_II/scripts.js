const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-tasks')

//dataTransfer: Contiene toda la informacion del objeto que se esta arrastrando 
    //setData: Establece la información que queremos compartir
    //getData: Establece la información que queremos obtener

pendingTasks.addEventListener('dragstart', (e)=>{

    e.dataTransfer.setData('text/plain', e.target.id) //envia la el id del objeto que esta siendo arrastrado
    //console.log(e.dataTransfer.getData('text')) 

})

pendingTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active') //mientras se arrastra le agrega la clase active
})

pendingTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active') //cuando se suelta remueve la clase
})

//OBLIGATORIO, SI NO, NO FUNCIONA
finishedTasks.addEventListener('dragover', (e) => {
    e.preventDefault()
})

finishedTasks.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text')) //recibe el elemento que ha sido arrastrado 
    element.classList.remove('active')
    finishedTasks.appendChild(pendingTasks.removeChild(element)) //aquita el elemento de tareas pendientes y lo añade a tareas completadaas
})