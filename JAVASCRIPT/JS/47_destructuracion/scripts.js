/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

La destructuración es una expresión de JavaScript que hace posible la extracción de datos de arreglos u objetos
*/

const person = {
    name: 'Dorian',
    age: 20,
    email: 'dorian@gmail.com'
}

//FORMA TRADICIONAL
// const name = person.name
// const age = person.age
// const email = person.email

//DESTRUCTURING
// const { name, age, email } = person //obtiene el nombre la edad y el email de person
// console.log(name, age, email) //imprime las tres variables
const { name: nombre, age: edad, email } = person // a las variables se les puede asiganar un nombre con :
console.log(nombre, edad, email)


const numbers = [1, 2, 3, 4]
//console.log(numbers[0]) //forma tradicional
const [primeraposicion, segundaposicion, terceraPosicion] = numbers //destructuring
console.log(`la tercera posicion de ${numbers} es ${terceraPosicion}`)


// const printPerson = ({ name }) => {
//     console.log(name)
// }

const printPerson = ({ name: nombre }) => { //destructuring
    console.log(nombre) //imprime unicamente el nombre de la persona
}
printPerson(person)


const getUsers = async () => {
    const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users') //obtiene unicamente los usuaios de la API
    console.log(users)
}

getUsers()




