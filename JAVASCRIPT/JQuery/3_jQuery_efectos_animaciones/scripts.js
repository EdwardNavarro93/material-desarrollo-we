
let boton = $("#button")
let new_link = $("#add_link")
let menu = $("#menu")

console.log(new_link)

boton.click(function(){

    let valor =new_link.val()//obtiene el valor del campo
    menu.append('<li><a href="'+valor+'"></a></li>') //agrega codigo html al final 
    recargarlinks()

})

function recargarlinks (){
    let enlaces = $("a")
    enlaces.each(function(){
        let that= $(this)
        let enlace = that.attr("href") //obtiene el  atributo seleccionado
        that.text(enlace) //coloca el contenido del texto en el elemento
    })
}

recargarlinks()

//animaciones  
let boton_mostrar= $("#mostrar")
let boton_ocultar =$("#ocultar")
let boton_animacion =$("#animacion")
let caja = $("#caja")
let velocidad= "normal"

boton_mostrar.click(function(){
    caja.show(velocidad) //muestra el elemento a la velocidad indicada
    //caja.fadeIn('normal') //desvanece
    //caja.fadeTo('slow', 1) //el parametro 2 es opacidad
    //caja.slideToggle('normal')
})

boton_ocultar.click(function(){
    caja.hide(velocidad) //oculta el elemento a la velocidad indicada
    //caja.fadeOut('normal') //desvanece
    //caja.fadeTo('slow', 0) //el parametro 2 es opacidad
    //caja.slideToggle('normal')
})

boton_animacion.click(function(){
    let animacion1= {//debe ser un objeto (JSON))
        marginLeft: '500px',
        fontsize: '40px',
        height: '200px',
        lineHeight: '200px'
    }

    let animacion2= {
        marginLeft: '0px',
        fontsize: '20px',
        height: '100px',
        lineHeight: '100px'
    }
    caja.animate(animacion1, 'slow') //permite realizar animaiones personalizadas
    .animate(animacion2, 'slow', function(){
        console.log("la animacion ha finalizado")
    }) //tambien pueden recibir callbacks que se ejecutaran una vez finalize la animacion
})



