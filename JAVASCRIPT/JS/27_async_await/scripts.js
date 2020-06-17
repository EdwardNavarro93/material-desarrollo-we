//async sirve para declaarar funciones que se ejecutaran despues de un tiempo (las funciones async devuelven promesas) (async simula respuestas de apis)

//await le permite a otras funciones externas esperar los valores de las funciones asyncronas (apis)


const getname = async () =>{
    return new Promise((resolve,reject) =>{

        setTimeout(()=>{resolve('Dorian')}, 1500)
         
    })
}

const sayHello = async () =>{
    const name = await getname() //espera a que la funcion getname devuelva este resultado para poder ejecutar la funcion sayHello
    return  `Respuesta asincrona 1: Hola tu nombre es ${name}` 
}

sayHello().then(res => console.log(res))

//Ejemplo 2


const users = [{ id: 1, name: 'Dorian' }, { id: 2, name: 'Laura' }, { id: 3, name: 'Carlos' }]
const emails = [{ id: 1, email: 'dorian@gmail.com' }, { id: 2, email: 'laura@gmail.com' }]

const getUser = async (id) => {
    const user = users.find(user => user.id == id)
    if (!user) throw new Error(`Doesn't exist an user with id ${id}`) //throw(lanza una excepcion o un error) new error: construye un mensaje Error
    else return user
}

const getEmail = async (user) => {
    const email = emails.find(email => email.id == user.id)
    if (!email) throw new Error(`${user.name} hasn't email`)
    else return ({
        id: user.id,
        name: user.name,
        email: email.email
    })
}

const getInfo = async (id) => {
    try { //El famosisimo try 
        const user = await getUser(id)
        const res = await getEmail(user)
        return `Respuesta asincrona 2: ${user.name} email is ${res.email}`
    } catch (error) {
        console.log(error)
    }
}

getInfo(2).then(res => console.log(res))