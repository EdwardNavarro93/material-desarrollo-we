const fileInput = document.getElementById('file')
const dropZone = document.getElementById('drop-zone')

dropZone.addEventListener('click', () => fileInput.click()) //cuando se hace click sobre la zona se abre el explorador de archivos

//le da el estilo css cuando so mueve el archivo sobre la zona
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault()
    dropZone.classList.add('drop-zone--active')
})

//le quita el estilo css cuando so sale de la zona
dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault()
    dropZone.classList.remove('drop-zone--active')
})


dropZone.addEventListener('drop', (e) => {
    e.preventDefault()
    fileInput.files = e.dataTransfer.files
    console.log(fileInput.files);
})

