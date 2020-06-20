//clases

class Calculadora{ 

    //propiedades (caracteristicas de los objetos dentro de esta clase)
    public numero1:number;  //public significa que se puede acceder desde afuera
    public numero2:number;
    private resultado:number; //privada solo puede ser accedida dentro de la clase

    constructor(a, b){
        this.numero1 = a; //el this solo tiene sentido dentro de la clase
        this.numero2 = b;
    }

    public suma(){
        return this.resultado = this.numero1 + this.numero2
    }
    public resta(){
        return this.resultado = this.numero1 - this.numero2
    }
    public multiplicacion(){
        return this.resultado = this.numero1 * this.numero2
    }
    public division(){
        return this.resultado = this.numero1 / this.numero2
    }
}

let calculadora = new Calculadora(10, 5) //instacia de la clase (este objeto tendra todas las propiedades y metodos de esa clase)
console.log(calculadora)
console.log("la suma es " + calculadora.suma())
console.log("la resta es " + calculadora.resta())
console.log("la multiplicacion es " + calculadora.multiplicacion())
console.log("la division es " + calculadora.division())


//interfaces 

//establce unas reglas de atributos y metodos que deben cumplir las clases que implementen dicha interfaz
//esto logra un codigo mas restrictivo y evita que se escriban cientos de metodos y atributos dentro de una misma clase

interface InterfazparaCalculadora { //la calculadora solo puede tener estos metodos
    suma()
    resta()
}

class Calculadora2 implements InterfazparaCalculadora{  //se le añade la interfaz a la clase

    public numero1:number;  
    public numero2:number;
    private resultado:number; 

    constructor(a, b){
        this.numero1 = a; 
        this.numero2 = b;
    }

    public suma(){
        return this.resultado = this.numero1 + this.numero2
    }
    public resta(){
        return this.resultado = this.numero1 - this.numero2
    }
}

let newcalculadora = new Calculadora2(8, 2) 
console.log("la suma con la calculadora2 es " + newcalculadora.suma())

//herencia 

class claseHija extends Calculadora{ //hereda todas las propiedades y metodos de la clase padre
    
    private encendido:boolean = true

    public mostrarResultados(){
        return `la calculadora esta ${this.encendido} y el resultado de la suma es ${this.suma()}`
    }
}

let hijo = new claseHija(6,5)
console.log(hijo)
console.log(hijo.mostrarResultados())

/*
//necesita una configuracion extra en VS para que funcione en TS
//decorador 

// permite añadir anotaciones y metadatos o cambiar el comportamiento de clases, propiedades, métodos, parámetros y accesorios

function estampar(logo:string){
    return function(target: Function){
        target.prototype.estampado =function():void{ //agrega esta funcion extra a la clase escogida
            console.log("tu camiseta se ha estampado con el logo de: "+ logo)}
    }
}

@estampar('Gucci Gang')
class Camiseta{
    private color:string
    private marca:string

    constructor(color, marca){
        this.color=color
        this.marca=marca
    }
    getInfo(){
        return `tu camisa es ${this.marca} de color ${this.color}`
    }
}


let camiseta = new Camiseta('verde', 'Nike')
console.log(camiseta.getInfo())
Camiseta.estampado()


*/