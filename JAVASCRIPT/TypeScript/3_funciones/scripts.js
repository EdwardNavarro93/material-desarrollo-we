// tipado en funciones con TS
//EMS_5
function funcion1(numero) {
    return "la variable que ingresaste en la funcion 1 es de tipo " + typeof numero + " y su valor es " + numero;
}
var respuesta = funcion1(20);
console.log("lo que devuelve la funcion 1 es de tipo " + typeof respuesta + " y su valor es: \"" + respuesta + "\"");
//EMS_6
var funcion2 = function (bulean) {
    return "la variable que ingresaste en la funcion 2 es de tipo " + typeof bulean + " y su valor es " + bulean;
};
var respuesta2 = funcion2(false);
console.log("lo que devuelve la funcion 2 es de tipo " + typeof respuesta2 + " y su valor es: \"" + respuesta2 + "\"");
