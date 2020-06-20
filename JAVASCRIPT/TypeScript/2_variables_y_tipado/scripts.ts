//tipos de datos 

//string

let message: string = 'hello world' //definir el tipo de dato a las vaiables
console.log(message)

message = "hola soy otro string" //solo aceptaria datos del tipo string

//number 

let numero:number //tipo de dato numerico
numero = 20

console.log("hola tu numero es " + numero)

//boleano

let buleano:boolean = true
console.log("hola soy un booleano y mi valor es " +  buleano)

//Any (permite añadi cualqier valor)

let cualquiera:any = "variable sin tipado en TS"
console.log(cualquiera)

// Arrays

let lenguajes: Array<string> //declarar un array de tipo string
lenguajes = ["php","java","python"]
console.log("declarando un array de strings")
console.log(lenguajes)


//otra forma de definir arrays 
let years: number[]
years= [1990,2009,2020]
console.log("otra manera de definir arrays")
console.log(years) 

//una variable con multiples tipos de datos

let variable1: string | number 
variable1= "soy una vaiable que acepta multiples datos"
console.log("definir una variable con multiples tipos de datos")
console.log(variable1)

variable1= 50
console.log(variable1)


//tipos de datos personalizados

type alfanumerico = string | number //define que tipo de datos aceptara la variable

let variable2: alfanumerico // se la asigna a la variable

variable2= "soy una variable con un tipo de dato personalizado"
console.log(variable2)

