let caja = $("#caja");

caja.click(function(){
    console.log("hiciste click")
})

caja.dblclick(function(){
    console.log("haz hecho doble click")
})

/*
caja.mouseover(function(){  //evento que sucede cuando se hace hoover sobre el elemento
    $(this).css("background-color", "red")
})

caja.mouseout(function(){ //funcion que se ejecuta cuando se sale del elemento
    $(this).css("background-color", "yellow")
    
})

*/
function colorover (){ $(this).css("background-color", "red")}

function colorout() {$(this).css("background-color", "yellow")}

caja.hover(colorover, colorout) //combina las dos anteriores


let input = $("#nombre")

console.log("el borde automatico es")
console.log(input)

input.focus(function(){
    $(this).css("border", "3px solid red")
})

input.blur(function(){ //evento que se ejecuta uando se quita el foco del elemento
    $(this).css("border", "1px solid black")
})

//mousedown cuando se presiona el raton
//mouseup cuando se suelta el raton

$(document).mousemove(function(){
    console.log(`estas en la coordenada x: ${event.clientX} y: ${event.clientY}`)  //captura el evento
})
