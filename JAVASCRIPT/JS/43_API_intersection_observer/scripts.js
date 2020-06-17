const boxes = document.querySelectorAll('.box') //selecciona todos los elementos con la clase especificada


const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target.id, 'is intersecting') //para cada elemento intersectado mostrara el id
        }
    })
}

const options = { //opciones adicionales para la interseccion
    // root:  //se puede cambiar el elemento que lo intersecta (por defecto es la ventana principal window)
    // rootMargin: '-200px'//se le puede agregar un amrgen de interseccion
    //threshold: 0.25 //porcentaje de interseccion (cuando se muestre el 25% del objeto se disparara el callback)
}

const observer = new IntersectionObserver(callback, options) //instancia de la clase intersection
boxes.forEach(element => observer.observe(element)) //cada vez que el elemento se intersecte con la ventana hara el callback