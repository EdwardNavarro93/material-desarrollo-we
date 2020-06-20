//clases
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Calculadora = /** @class */ (function () {
    function Calculadora(a, b) {
        this.numero1 = a; //el this solo tiene sentido dentro de la clase
        this.numero2 = b;
    }
    Calculadora.prototype.suma = function () {
        return this.resultado = this.numero1 + this.numero2;
    };
    Calculadora.prototype.resta = function () {
        return this.resultado = this.numero1 - this.numero2;
    };
    Calculadora.prototype.multiplicacion = function () {
        return this.resultado = this.numero1 * this.numero2;
    };
    Calculadora.prototype.division = function () {
        return this.resultado = this.numero1 / this.numero2;
    };
    return Calculadora;
}());
var calculadora = new Calculadora(10, 5); //instacia de la clase (este objeto tendra todas las propiedades y metodos de esa clase)
console.log(calculadora);
console.log("la suma es " + calculadora.suma());
console.log("la resta es " + calculadora.resta());
console.log("la multiplicacion es " + calculadora.multiplicacion());
console.log("la division es " + calculadora.division());
var Calculadora2 = /** @class */ (function () {
    function Calculadora2(a, b) {
        this.numero1 = a;
        this.numero2 = b;
    }
    Calculadora2.prototype.suma = function () {
        return this.resultado = this.numero1 + this.numero2;
    };
    Calculadora2.prototype.resta = function () {
        return this.resultado = this.numero1 - this.numero2;
    };
    return Calculadora2;
}());
var newcalculadora = new Calculadora2(8, 2);
console.log("la suma con la calculadora2 es " + newcalculadora.suma());
//herencia 
var claseHija = /** @class */ (function (_super) {
    __extends(claseHija, _super);
    function claseHija() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.encendido = true;
        return _this;
    }
    claseHija.prototype.mostrarResultados = function () {
        return "la calculadora esta " + this.encendido + " y el resultado de la suma es " + this.suma();
    };
    return claseHija;
}(Calculadora));
var hijo = new claseHija(6, 5);
console.log(hijo);
console.log(hijo.mostrarResultados());
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
