/*
    Fetch API
        Para hacer peticiones POST, fetch admite un segundo parámetro.
        fetch(url, {
        method: 'POST',
        body: Los datos que enviamos. Si es un objeto hay que convertirlo con JSON.stringify(datos),
        headers: {
            cabeceras de información sobre lo que estamos enviando
            https://developer.mozilla.org/es/docs/Web/HTTP/Headers
        }
    })
   
*/

const button = document.getElementById('button');

button.addEventListener('click', () =>{

    const newPost = {
        title: 'A new post',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vitae deleniti eos aliquid atque eveniet iste at earum, consequatur amet?',
        userID:1
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost), // convierte el objeeto a formato JSON que la api puede entender 
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(res => res.json())
    .then(data => console.log(data))
})