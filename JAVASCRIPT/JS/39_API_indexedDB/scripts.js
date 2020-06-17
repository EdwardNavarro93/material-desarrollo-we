//Especificación oficial: https://developer.mozilla.org/es/docs/IndexedDB-840092-dup

/*
    Contenido extra para buscar:
        Método getAll() para obtener todos los registros de la base de datos
        Método clear() para borrar objetos del almacen
        Método deleteDatabase() para borrar la base de datos
        Metodo onBlocked() para bloquear bases de datos en los cambios de version
        Objeto IDBKeyRange para búsquedas en la base de datos
        Método createIndex() para la creación de índices en la base de datos
        Versionado de bases de datos

        Libreria indexedDB
            https://dexie.org/
*/

const indexedDB = window.indexedDB // crear la base de datos
const form = document.getElementById('form')
const tasks = document.getElementById('tasks')

if(indexedDB && form){
    let db
    const request = indexedDB.open('tasklist', 1)//permite acceder a la base de datos si no existe la crea ('nombre de la dB', 'version de la DB')
    request.onsuccess = ()=>{ //cuando es existosa
        db = request.result
        console.log('Open', db)
        readData()
    }

    request.onupgradeneeded = () =>{ //para saber si necesita ser actualizada o si no existe primero la crea
        db = request.result
        console.log('Create', db)
        const objectStore = db.createObjectStore('tasks', { // crea el almacen de objetos 
            //autoIncrement:true //autogenerador de claves
            keyPath:'taskTitle' //la clave sea el titulo de la tarea
        }) 
    }
    request.onerror= (error) => { // cuando ocurre un error
        console.log('Error', error)
    }





    //funcion que agregara la info a la DB
    const addData =(data)=>{
        const transaction = db.transaction(['tasks'], 'readwrite') //establece la comunicacion entre los datos  y la DB
        const objectStore = transaction.objectStore('tasks') //abre el almacen de datos  
        const request = objectStore.add(data) //le agrega los datos al almacen 
        readData()
    }

    //funcion que elimina info de la DB
    const deleteData = (key) => {
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.delete(key) 
        request.onsuccess = () => {
            readData()
        }
    }

    //funcion para obtener de la base de datos los datos solicitado (a traves de su key)
    const getData =(key) =>{
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.get(key)
        request.onsuccess = (e) => {
            form.task.value = request.result.taskTitle //escribe en el formulario los datos obtnidos
            form.priority.value = request.result.taskPriority
            form.button.dataset.action = 'update' //cambia el valor del boton a update
            form.button.textContent = 'Update Task'
        }
    }

    //funcion que actualiza los datos
    const updateData = (data) => {
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.put(data) //put (actualizar)
        request.onsuccess = () => {
            form.button.dataset.action = 'add'
            form.button.textContent = 'Add Task'
            readData()
        }
    }

    //funcion para leer todos los datos de la DB
    const readData = () => {
        const transaction = db.transaction(['tasks'], 'readonly')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.openCursor() //abre el cursor que permite leer la informacion
        const fragment = document.createDocumentFragment()

        request.onsuccess = (e) => {
            const cursor = e.target.result //guarda el resultado
            if(cursor){
                const taskTitle = document.createElement('P')
                taskTitle.textContent = cursor.value.taskTitle
                fragment.appendChild(taskTitle)

                const taskPriority = document.createElement('P')
                taskPriority.textContent = cursor.value.taskPriority
                fragment.appendChild(taskPriority)

                const taskUpdate = document.createElement('BUTTON')
                taskUpdate.dataset.type = 'update' //crea un atributo personalizado en el boton llamado data-type
                taskUpdate.dataset.key = cursor.key //crea un atributo personalizado en el boton llamado data-key con dicho valor
                taskUpdate.textContent = 'Update' 
                fragment.appendChild(taskUpdate)

                const taskDelete = document.createElement('BUTTON')
                taskDelete.textContent = 'Delete'
                taskDelete.dataset.type = 'delete'
                taskDelete.dataset.key = cursor.key
                fragment.appendChild(taskDelete)

                cursor.continue()// continua leyendo toda la base de datos

            }else{ //al tetminar de leer los datos
                tasks.textContent = '' //limpa el div
                tasks.appendChild(fragment) //agrega toda la info leida de la DB
            }
        }
    }



    

    //cuando se envia el formulario
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        const data ={ //objeto que guarda la informacion del formulario
            taskTitle: e.target.task.value, 
            taskPriority: e.target.priority.value
        }

        if (e.target.button.dataset.action == 'add') { //si el boton tiene el atributo data-action=add
            addData(data)
        } else if (e.target.button.dataset.action == 'update') { //si el boton tiene el atributo data-action=update
            updateData(data)
        }
        form.reset()
    })

    tasks.addEventListener('click', (e) => {
        if (e.target.dataset.type == 'update') {
            getData(e.target.dataset.key)
        }
        else if (e.target.dataset.type == 'delete') {
            deleteData(e.target.dataset.key)
        }
    })

}