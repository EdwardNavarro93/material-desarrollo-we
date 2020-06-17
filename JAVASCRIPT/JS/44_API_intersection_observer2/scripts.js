const images = document.getElementById('images')
const getImages = () => {
    axios('https://picsum.photos/v2/list?page=3&limit=5') //api de donde obtiene las imagenes
        .then(res => {
            const fragment = document.createDocumentFragment()
            res.data.forEach(element => {
                const newImage = document.createElement('IMG')
                newImage.src = element.download_url
                fragment.appendChild(newImage)
            })
            images.appendChild(fragment)
            setObserver()
        })
}


const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            getImages() //cuando se intersecte agregara nuevas imagenes
        } else {
            //quitar animación
        }
    })
}

const setObserver = () => {
    const options = {
        //threshold: 0.5 //se activa al 50% de interseccion con el elemento
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(images.lastElementChild) //el elemento a observar sera la ultima imagen
}

getImages()