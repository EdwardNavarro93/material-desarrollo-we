/*Axios es una libreria liviana y optimizada basada en promesas que permite 
realizar peticiones asincronas a una API de una manera mas rapida y mas limpia que Fetch y XMLHttpRequest*/

const button = document.getElementById('button');

button.addEventListener('click', () =>{
    axios({  //se delcara el metodo axios y se trata como si fuera una promesa
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users'
    })
    .then(res => {
        const list = document.getElementById('list')
        const fragment = document.createDocumentFragment()
        for (const userInfo of res.data) {
            const listItem = document.createElement('LI')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            fragment.appendChild(listItem)
        }
        list.appendChild(fragment)

    })
    .catch(err => console.log(err))
})