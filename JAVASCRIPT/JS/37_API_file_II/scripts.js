const fileInput = document.getElementById('file')
const progress = document.getElementById('progress')

/*
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('progress', (e) => { //evento que se ejecuta mientras esta cargando
        //console.log(Number.parseInt(e.loaded * 100 / e.total) + '%');
        progress.style.width = Number.parseInt(e.loaded * 100 / e.total) + '%'
    })

    fileReader.addEventListener('loadend', () => {
        //console.log("finalizo la carga del archivo")
        progress.style.width = '100%'
    })
})
*/

const root = document.documentElement //raiz del archivo

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('progress', (e) => { //evento que se ejecuta mientras esta cargando
        root.style.setProperty('--bar-width', Number.parseInt(e.loaded * 100 / e.total) + '%') //modifica la variable css que se le indique
    })

    fileReader.addEventListener('loadend', () => {
        root.style.setProperty('--bar-width', '100%')
    })
})