/*
    Fetch API

        Uso de fetch para la lectura de archivos

        blob(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando no se necesita manipular el contenido y se va a trabajar con el archivo directamente


        blob(): Binary Long OBject
        Si ponemos la ruta hacia el archivo podemos leer ese archivo y renderizarlo en pantalla

        URL: Con el objeto URL usando el método createObjectURL(archivo) podemos crear una ruta válida para ver ese archivo
        https://developer.mozilla.org/es/docs/Web/API/URL
*/

const buttonImg = document.getElementById('button-img')
const buttonPDF = document.getElementById('button-pdf')

buttonImg.addEventListener('click', () =>{
    fetch('dog.jpg')
    .then(res => res.blob())  // blob se utiliza para trabajar archivos directamente (similar a lo q hace json pero con archivos)
    .then(img => {
        document.getElementById('img').src = URL.createObjectURL(img) //crea una ruta valida para ver la imagen
    })
})

buttonPDF.addEventListener('click', () =>{
    fetch('demo.pdf')
    .then(res => res.blob()) 
    .then(pdf => {
        document.getElementById('pdf').href = URL.createObjectURL(pdf) 
    })
})