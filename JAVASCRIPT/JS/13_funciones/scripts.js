// declarar una funcion

const saludar =()=>{

    console.log("holi");
}

const saludarusuario =(user)=>{

    console.log(`hola ${user} `);
}

const suma=(num1, num2)=>{
     return num1 + num2;;
}


console.log("invocar la funcion saludar");
saludar(); //invocar la funcion


let nombre= prompt('Introduzca su nombre');
saludarusuario(nombre);

let num1 = parseInt(prompt('introduzca el primer numero')); //parseint convierte el string en entero

let num2 = parseInt(prompt('introduzca el segundo numero'));

console.log("funcion que devuelve la suma de dos numeros")

console.log("la suma es " +  suma(num1,num2))
