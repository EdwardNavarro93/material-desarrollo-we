/*
    https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia

    mql = window.matchMedia(mediaQueryString)

    mql viene de media query list, que es el objeto que se crea con el método matchMedia()
    mediaQueryString es cualquier media query válida en CSS
*/

//esto se utiliza en el caso de que cuando se necesite una mediaquery obligatoriamente se deba cambiar algo de codigo JS (cambiar unaa clase o eliminar algun elemento etc)

const title = document.getElementById('title')

const mql = matchMedia('(min-width:400px) and (orientation: landscape)') // lista de media querys (valida en css)

console.log(mql)

const applyMatchMedia = (mql) => {
    mql.matches ? //la mediaquery coincide? (cuando el ancho coincida a 400px y landscape)
        //NO HACER ESTO NUNCA
        document.body.style.backgroundColor = 'red'
        //ESTO SI
        // title.classList.add('clase que sea')
        :
        //NO HACER ESTO NUNCA
        document.body.style.backgroundColor = 'royalblue'
}

addEventListener('resize', () => applyMatchMedia(mql))
addEventListener('DOMContentLoaded', () => applyMatchMedia(mql)) //se aplica cuando se recargue la pagina

