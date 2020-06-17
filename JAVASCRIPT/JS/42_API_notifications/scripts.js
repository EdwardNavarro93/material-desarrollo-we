/* 
https://developer.mozilla.org/es/docs/Web/API/notification 

icono:
https://www.flaticon.es/icono-gratis/en-todo-el-mundo_814513?term=world&page=1&position=18
*/

const permissions = document.getElementById('permissions')

permissions.addEventListener('click', () => { //si el navegador posee permiso para mostrar notificaciones o no
    if (Notification.permission !== 'granted') {
        getPermissions()
    } else {
        notify()
    }
})

const getPermissions = () => {
    Notification.requestPermission()
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

const notify = () => {
    const options = {
        body: 'Este es el cuerpo del mensaje de la notificacion.',
        icon: 'world.png',
        data: 'Extra data', //informacion extra de la notificacion (que no se muesta se debe acceder por codigo)
        tag: 'notification demo'
    }
    const notification = new Notification('Hello World', options)

    notification.addEventListener('close', () => console.log('se cerro la notificacion'))
    notification.addEventListener('show', () => console.log('se muestra la notificacion'))

    console.log(notification)
}


