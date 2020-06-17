// Una promesa es un objeto con 2 callbacks internos
const users = [{id: 1, name: 'Dorian'},{id: 2, name: 'Laura'},{id: 3, name: 'Carlos'}];
const emails = [{id: 1, email: 'dorian@gmail.com'}, {id: 2, email: 'laura@gmail.com'}];


const getUser = (id) => {

    const user = users.find(user => user.id == id); //encontrar el usuario mediante el id
    
    const promise = new Promise((resolve,reject) => { //declaracion de la promesa (resolve y reject son callbaks)
        //resolve se ejecuta cuando todo va bien
        // reject se ejecuta cuando algo va mal

        if (!user) reject(`Does not exist a user with id ${id}`) //si el usuario no existe
        else resolve(user) // si el suario existe 
    });

    return promise;
}

const getEmail = (user) => {
    const email = emails.find(email => email.id == user.id)

    const promise = new Promise((resolve,reject) =>{
        if (!email) reject(`${user.name} hasn't email`) 
        else resolve({
            id: user.id,
            name: user.name,
            email: email.email
        })
    })
    return promise;
}

//las promesas tienen sus propios atributos para trabajar con ellas

getUser(2)
    .then(user => getEmail(user))
    .then(res => console.log(`El usuario: ${res.name} tiene el correo electronico: ${res.email}`)) //then resuelven cuando todo va bien (se necesita un then por cada consulta)
    .catch(err => console.log(err)) //catch resuelve cuando sucede cualquier error (solo es necesario un catch)


//forma simplificada:

/*
getUser(2)
    .then(getEmail)
    .then(console.log) 
    .catch(console.log) 
*/
