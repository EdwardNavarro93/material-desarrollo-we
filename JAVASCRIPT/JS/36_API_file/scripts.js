/* 
    API File
        Esta API nos sirve para leer archivos que el usuario cargue en la web. Se pueden cargar archivos desde un input de tipo file o desde el objeto DataTransfer de la API Drag&Drop.

        La interfaz más utilizada para interactuar con ella es FileReader
        https://developer.mozilla.org/es/docs/Web/API/FileReader
 */

const fileInput = document.getElementById('file')
const img = document.getElementById('img')
const text = document.getElementById('text')

/*
//cargar documentos de texto
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0]//guarda el archivo subido
    const fileReader = new FileReader() //instancia la clase 
    fileReader.readAsText(file) //lee archivos de tipo texto (esto es un proceso asyncrono)
    fileReader.addEventListener('load', (e)=>{
        text.textContent= e.target.result // añadir al parrafo el contenido del archivo tipo texto
    })
})
*/

/*
//Carga simple de imagen
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.addEventListener('load', (e) => {
        img.setAttribute('src', e.target.result)
    })
})
*/

//Carga múltiple de imágenes
fileInput.addEventListener('change', (e) => {
    const files = e.target.files                       //guarda las imagenes subidas
    const fragment = document.createDocumentFragment() 
    for (const file of files) {                        //recorre cada una de las imagenes
        const fileReader = new FileReader()            
        const img = document.createElement('IMG')      //crea el elemento img por cada imagen
        fileReader.readAsDataURL(file)                 //lee una por una las imagenes 
        fileReader.addEventListener('load', (e) => {   //una vez termine de leer la imagen se ejecuta este evento
            img.setAttribute('src', e.target.result)   //al elemento html se le agrega la imagen
        })
        fragment.appendChild(img)                      //crea un fragmento de codigo que sera insertado en el html5
    }
    images.appendChild(fragment)                       //al div se le agrega todo el codigo
})