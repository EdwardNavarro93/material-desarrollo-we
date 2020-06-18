// $(selector).funcion(|callback) 

$(document).ready(()=>{  //$ y jQuery significa que se esta utilizando la libreria  el evento eady se ejeucytat cuando carga la pagina
    console.log("jQuery esta corriendo correctamente")
})

//selector de ID jQuery //
let rojo= $('#rojo');
console.log("selector de ID con jQuery: ")
console.log(rojo)


//rojo[0].style.color='blue' //se comporta como un objeto normal

rojo.css('color', 'blue') //metodo que permite obtener el stilo css de un elemento o modificarlo

//rojo.css('color', 'red').css('background-color', 'yellow' )


//selectores de clase jQuery //


let parrafos_con_borde = $('.borde')
console.log("selector de clase jQuery")
console.log(parrafos_con_borde.eq(0)) //metodo jQuery que selecciona el elemento especifico en un objeto


let parrafos= $('.parrafo')
parrafos.css("background", "yellow")


parrafos.click(function(){
    let that = $(this) //se recomienda llamar al this solo una vez

    if(that.hasClass("borde")){
        that.removeClass("borde")
        that.addClass("sin-borde")
    }else{
        that.removeClass("sin-borde")
        that.addClass("borde")
    }
})

// selectores de etiqueta

let selectoretiquetas = $('p')
console.log("selectores de etiqueta ")
console.log(selectoretiquetas)

// selectores de atributo

let selectoratributo = $('[title=Google]')
console.log("selector de atributo ", selectoratributo)
selectoratributo.css("background", "red").css("color", "white")


//otros selectores 

$('p, a').addClass("margen-superior") //seleccionar varios elementos

let busqueda = $('#caja').find('.resaltado') //encontrar un elemento especifico dentro del DOM
console.log("metodo find")
console.log(busqueda)

let padrebusqueda = busqueda.eq(1).parent() //selecciona el elemento padre
console.log("el padre del metodo find")
console.log(padrebusqueda)



