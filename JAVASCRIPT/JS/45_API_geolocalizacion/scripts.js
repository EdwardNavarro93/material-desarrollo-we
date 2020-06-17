/* 
    https://developer.mozilla.org/es/docs/Web/API/NavigatorGeolocation/geolocation
*/


const button = document.getElementById('button')

button.addEventListener('click', () => {
    const geolocation = navigator.geolocation //guarda la geolocalizacion
    geolocation.getCurrentPosition(getPosition, error, options) //utilizado para obtener la posicion actual
})

const options = {
    enableHightAccuracy: true, //permite obtener mas opciones de geolocalizacion (gps, altimetro, etc)
    timeout: 5000, //tiempo para que nos devuelva la posicion
    maximunAge: 0 //maximo tiempo en memoria cache 
}

const getPosition = (position) => {
    console.log(position.coords)
}

const error = (error) => console.log(error) //funcion error