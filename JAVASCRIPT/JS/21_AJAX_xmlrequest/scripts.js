/* Protocolo HTTP: https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto */
/* Códigos de estado de respuesta HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Status */

const button = document.getElementById('button');

button.addEventListener('click',() => {

    let xhr;
    if (window.XMLHttpRequest){
        xhr = new XMLHttpRequest(); //objeto que guarda la informacion en los navegadores actuales
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP"); // objeto que guarda la informacion en los navegadores viejitos (solo por si las moscas) (objeto exclusivo para internet explorer)
    }    
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users'); //abriendo una solicitud get a esa direccion url donde se encuentra la informacion de usuarios

    xhr.addEventListener('load', (data) =>{
        const stringdata = data.target.response; //devuelve un string con los datos solicitados
        const dataJSON = JSON.parse(stringdata); //convierte el string en un array de objetos
        console.log(dataJSON);   

        const list = document.getElementById('list');
        const fragmentlist = document.createDocumentFragment();

        for(const userinfo of dataJSON){
            const listitem = document.createElement('LI');
            listitem.textContent = `${userinfo.id} - ${userinfo.name}`;
            fragmentlist.appendChild(listitem);
        }
        list.appendChild(fragmentlist);

    }) //evento para saber cuando la informacion ha llegado
    
    xhr.send(); //envia la solicitud

})


