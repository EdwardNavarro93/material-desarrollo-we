// tipado en funciones con TS

//EMS_5

function funcion1 (numero:number):string { //se le puede asignar tipo de datos tanto a los datos que acepta la funcion como a los datos que evuelve

return`la variable que ingresaste en la funcion 1 es de tipo ${typeof numero} y su valor es ${numero}`

}

let respuesta = funcion1(20)
console.log(`lo que devuelve la funcion 1 es de tipo ${typeof respuesta} y su valor es: "${respuesta}"`)


//EMS_6

const funcion2 = (bulean:boolean):string => {

    return`la variable que ingresaste en la funcion 2 es de tipo ${typeof bulean} y su valor es ${bulean}`
}

let respuesta2 = funcion2(false)
console.log(`lo que devuelve la funcion 2 es de tipo ${typeof respuesta2} y su valor es: "${respuesta2}"`)
