//metodo dragg

let elementos = $(".elemento")
let lista = $(".lista")
let area =$("#area")
let elementomovido =$("#elemento-movido")

elementos.draggable() //el elemento se mueve libremente po la pagina

elementos.resizable() //el elemento puede ser dimensionado

//lista.selectable() //que sea un elemento seleccionable

lista.sortable({ //permite ordenar los elementos
    update: function (){
        console.log("ha cambiado la lista")
    }
}) 

elementomovido.draggable() //permite al elemento soltar otros elementos dragables
area.droppable({
    drop: function (){
        console.log("has soltado un elemento dragable aqui")
    }
})

let boton_mostrar = $("#mostrar")
let caja = $("#elementoamostrar")

//todos los efectos se encuentran en la documentacion
boton_mostrar.click(function(){
    //caja.fadeToggle() //efecto de desvanecimiento
    caja.toggle("explode", "slow") //efecto de explosion
    //caja.toggle("slide") //efecto de movimiento lateral
})


$(document).tooltip()//muestra una etiqueta sobre el elemento

$("#lanzar-popup").click(function(){
    $("#popup").dialog() //lanza una ventana de dialogo
})

let calendario = $("#calendario")
calendario.datepicker() //genera un calendario 

$("#pestanas").tabs() //permite crear pestañas 