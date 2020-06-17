//Un callback es una función que se ejecuta a través de otra función
//Los callbacks no son asíncronos

/*
const getUser = (id, cb) => { //cb es abreviatura de callback

    const user = {
        name: 'Edward',
        id: id //se puede poner solamente id 
    }

    if(id==2) cb('el usuario no existe') //cb es donde se ejecuta la funcion
    else cb(null, user)

    
}

getUser(1, (err, user) => {
    if (err) return console.log(err)
    console.log(`user name is ${user.name}`)
}); */

const users = [
    {
        id: 1,
        name: 'Dorian'

    },
    {
        id: 2,
        name: 'Laura'
    },
    {
        id: 3,
        name: 'Carlos'
    }
]

const emails = [
    {
        id: 1,
        email: 'dorian@gmail.com'
    },
    {
        id: 2,
        email: 'laura@gmail.com'
    }
]

const getUser = (id, cb) => {
    const user = users.find(user => user.id == id) //encontrar el usuario mediante el id

    if (!user) cb(`Not exist a user with id ${id}`) //si el usuario no existe mandar un error
    else cb(null, user) // si el suario existe no mandar error y enviar el suario
}


const getEmail = (user, cb) => {
    const email = emails.find(email => email.id == user.id)

    if (!email) cb(`${user.name} hasn't email`)
    else cb(null, {
        id: user.id,
        name: user.name,
        email: email.email
    })
}


getUser(2, (err, user) => { 
    if (err) return console.log(err) //return finaliza la funcion 
    console.log(`user name is ${user.name}`)
    getEmail(user, (err, res)=>{
        if (err) return console.log(err)
        console.log(`El usuario: ${user.name} tiene el correo electronico: ${res.email}`)
    })
})

//estos callbacks se pueden complicar muchisimo mas por lo que esto casi ya no se usa y se pasa a usar promesas de JS
