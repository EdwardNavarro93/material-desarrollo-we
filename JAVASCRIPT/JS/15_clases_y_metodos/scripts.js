
// declarar una clase
class Persona{
    constructor(nombre,apellido,edad){
        this.nombre=nombre;     
        this.apellido=apellido;
        this.edad=edad;

        this.datos= `Mis datos son nombre: ${nombre}, apellido: ${apellido}, edad: ${edad} años `;
    }
    // declarar un metodo dentro de la clase 
    saludar(){
        return `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años de edad`;
    }
}


const persona1 = new Persona('Edward', 'Navarro', 26); //instanncia de la clase persona

console.log("Nombre de la persona 1 "+ persona1.nombre);

console.log("invocar la funcion");
console.log(persona1.saludar());