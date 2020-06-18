

let cajaDatos = $("#datos")


//realizar una peticion AJAX con jQuery
//metodo get
$.get("https://reqres.in/api/users?page=2", function(response){
    console.log(response)
    response.data.forEach((element, index) => {
        cajaDatos.append(`<p>bienvenido ${element.first_name} ${element.last_name}</p>`)
    })
})

//metodo post

/*
let datos ={
    "name": "Edward",
    "job": "Engineer"
}
$.post("https://reqres.in/api/users", datos, function(response){
    console.log(response)
})
*/

let formulario = $("#form")
formulario.submit(function(e){
    e.preventDefault()

    
    let that = $(this)
    let url = that.attr("action")

    let datos ={
        "name": $('input[name="name"]').val(),
        "job": $('input[name="job"]').val()
    }

    $.post(url, datos, function(response){
        console.log(response)
    }).done(function(){
        console.log("usuario registrado con exitoso")
    })  

})

//otra forma de hacer peticiones

let datosJSON ={
    type: 'POST',
    url: 'https://reqres.in/api/users',
    data: {
        "name": "Edward",
        "job": "Engineer"
    },
    success: function (response){console.log(response)},
    error: function (err){console.log(err)},
    timeout: 2000
}

$.ajax(datosJSON)
