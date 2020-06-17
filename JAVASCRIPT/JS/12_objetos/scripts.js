
//declarar un objeto con sus atributos
const person = {
    name: 'Juan', //atributo y su valor
    age: 26,
    sons: ['Laura', 'Diego', 'Pepe', 'Rosa', 'Tomás']
 }
 
console.log("el objeto es");
console.log(person);

console.log("uno de los atributos del objeto es "+ person.name);

console.log("otra forma de acceder a los atributos es "+ person['name']);

console.log("imprimir las llaves del objeto");
for(const key in person){
    console.log(key);
}

console.log("recorrer el objeto mediante un for in");

for(const key in person){
    console.log(person[key]);
}

console.log("imprimir los hijos de la persona con un for of");
for(const son of person.sons){
    console.log(son);
}


console.log("finalmente como imprimir todo el objeto en una frase");

console.log(`Hola ${person.name}. Tienes ${person.age} años y tus hijos se llaman ${person.sons.join(' - ')}`);