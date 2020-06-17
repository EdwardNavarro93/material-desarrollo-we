/* Operadores lógicos */

/* && and */
/* || o */


let num= 5;
let num1=3;
let num2 =10;
//condicional simple

if(num>0){
    console.log("el numero es positivo");
}
else{
    console.log("el numero es negativo");
}

//condicionales compuestos

if(num2>0){
    console.log("el num2 es positivo");
}
else if(num2<0){
    console.log("num2 es menor que 0");
}
else{
    console.log("el numero es 0");
}



if(num1>0){
    if(num2>0){
        console.log(`${num1} y ${num2} son mayores que 0`);
    }else if(num2<0){
        console.log(`${num1} es mayor que 0 y num 2 es menor que 0`);
    }else{
        console.log(`${num1} es mayor que 0 y num 2 es igual a 0`);
    }
}else if(num1<0){
    if(num2>0){
        console.log(`${num1} no es mayor que 0 y ${num2} es mayor que 0`);
    }else if(num2<0){
        console.log(`${num1} y ${num2} son menores que 0`);
    }else{
        console.log(`${num1} es menor que 0 y num 2 es igual a 0`);
    }
}else{
    if(num2>0){
        console.log(`${num1} es igual a 0 y ${num2} es mayor que 0`);
    }else if(num2<0){
        console.log(`${num1} es igual a 0 y ${num2} es menor que 0`);
    }else{
        console.log(`${num1} y ${num2} son iguales a 0`);
    }
}

//operadores logicos

if(num1>0 && num2>0){
    console.log("con operadores logicos ambos numeros son mayores que 0");
}


//booleanos

let respuesta = false;

if(respuesta==true) console.log(`Respuesta tiene el valor true`);
if(respuesta!=true) console.log(`Respuesta tiene el valor false`);

//otra manera

if(respuesta) console.log(`Respuesta tiene el valor true`);
if(!respuesta) console.log(`Respuesta tiene el valor false`);
