//javaScript copia todas las funciones al principio es por esto que se pueden utilizar las funciones

function holaMundo() {
    console.log("Hola Mundo");

}

//todas las funciones devuelven un undefined o lo que se devuelva con el return
console.log(holaMundo());


function sumarDosNumeros(numeroUno, numeroDos) {
    var numeroUnoEsValido = typeof numeroUno == 'number';
    var numeroDosEsValido = typeof numeroDos == 'number';

    if (numeroUnoEsValido && numeroDosEsValido) {
        return numeroUno + numeroDos;
    } else {
        console.error('los parametros no son numeros');
        return 0;
    }
}

console.log(sumarDosNumeros(1, 2));



function sumarNumeros(...numeros) {// destructuracion de argumentos
    var resultado = calcularResultadoSumarNNumeros(numeros);
    if (resultado.esValido) {
        return resultado.suma;
    } else {
        return 0;
    }
}

function calcularResultadoSumarNNumeros(numeros){

    var suma = 0;
    var todosLosNumerosSonValidos = true;
    for (var i = 0; i < numeros.length; i++) {
        var numeroEsvalido = typeof numeros[i] == 'number';
        if (numeroEsvalido) {
            suma = suma + numeros[i];
        } else {
            todosLosNumerosSonValidos = false;
            break;
        }
    }
    var resultado = {
        suma: suma,
        esValido: todosLosNumerosSonValidos
    };
    return resultado;
}

console.log(sumarNumeros(4, 1, 2, 3));

function restar(a, b) {
    return a-b;

}
console.log(restar());   //ejecucion -undefined o otro tipo de datos
console.log(typeof restar);//tipo de una funcion = funtion tipo funtion
console.log(restar); //definicion de la funcion


var ejemplo = function nombreDos() {};// funcion anonima


var adrian ={
    trabajo: function () {
        //implementacion
    }
    adrian.trabajo();

    var arreglo = [
        funtion


    ]
}




//debemos olvidarnos de algunos tipos de variables

var variable; //nunca mas escribir la variable var desde ahora va a ser let
let variableDos = 2;
variableDos = 3 ;


const edad = 29;//siempre que puedan hay que usar esta
//edad = 30;

const vicente ={
    nombre: 'vicente'

};

vicente.nombre= 'Adrian';

const arregloUnoDos = [1,2];

arregloUnoDos[0]=3;

const nombre = 'adrian';
//nombre = 'vicente'; no me deja reasicnar en strings


const casado = true;
//casado = false
const hijos = null;
// hijos = 1 ;

const ganarDinero = function () {
    return 1;
};

//ganarDinero = function () {
//    return = 2 ;
//}

//en arreglos y objetos se pueden usar las funciones
// se puede usar funciones en las variables de tipo constannte
//no se puede reasignar valores en variables de tipo constante

//nunca mas vamos a usar funciones anonimas

// fat arrow function en vez de funciones anonimas

const elevarAlCuadrado = (numero) => {
    return numero * numero ;
};


const elevarAlCuadradoV2 = (numero) => numero * numero ;
const elevarAlCuadradoV3 = numero => numero * numero ;

const restarDosNumeros = (numUno, numDos) => numUno - numDos;



