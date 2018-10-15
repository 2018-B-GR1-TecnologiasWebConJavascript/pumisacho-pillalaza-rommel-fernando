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
