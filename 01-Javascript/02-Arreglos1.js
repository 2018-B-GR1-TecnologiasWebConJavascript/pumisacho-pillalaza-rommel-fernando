arreglo = [
    1, "Rommel", false, null, new Date(),
    {
        nombre: "Fernando"
    },[1,2,3]

]

console.log(arreglo[3]);

var arregloNumreos = [1,2,3];

arregloNumreos.push(4);

console.log(arregloNumreos);

arregloNumreos.pop();

console.log(arregloNumreos);

arregloNumreos.splice(0,2);

console.log(arregloNumreos);

arregloNumreos.splice(1,0,4); // se puede agragar infinitos numeros de elementos

console.log(arregloNumreos);

arregloNumreos.splice(1,0,4,5,6,7,8,9,10);

console.log(arregloNumreos);

//para verificar

var indiceNumeroSeis = arregloNumreos.indexOf(6);

arregloNumreos.splice(indiceNumeroSeis,1);
console.log(arregloNumreos);

var arregloUno = arregloNumreos.slice(0,3); // abierto
var arregloDos = arregloNumreos.slice(3,7);
//console.log(arregloUno);
//console.log(arregloDos);


//[0,10] Cerrado esta incluido el 10
//[0,10[ Abierto esta excluido en 10

var arregloUnoDos = [1,2];
//var arregloDos = [6];

// Destructuracion de arreglos(se rompe los arreglos se eliminan los corchetes )

console.log(...arregloUnoDos);
console.log(1,2);

var arregloTotal=[...arregloUnoDos,...arregloUno,...arregloDos];
console.log(arregloTotal);

//siempre tratar de no usar el for ni un while

var arreglosiguienteNumeros = [11,12,13,14,15,16,17,18,19,20];
arregloTotal.splice(arregloTotal.length,0,...arreglosiguienteNumeros);

console.log(arregloTotal);


//destructuraion de a



var vicente ={

    nombre:'Vicente',
    apellido:'Egues',
};

var egues={

    sueldo: 1923

};

var adrian = {
    edad: 20,
    casado: false,
    hijos: null,
    mascota:{
        nombre: 'cachetes'

    }

};

var vicenteAdrianEguez = {

    ...vicente,
    ...adrian,
    ...egues
};

console.log(vicenteAdrianEguez);

//permite mandar funciones como parametros

function saludar(nombre, funcion) {

    return`hola ${funcion(nombre)}`;
}

console.log(saludar("AdRiAn", nombreEnMayusculas));
console.log(saludar("AdRiAn", nombreEnMinusculas));
console.log(saludar("AdRiAn", nombreConPuntoAlFinal));

function nombreEnMayusculas(nombre) {
    return nombre.toUpperCase();
}

function nombreEnMinusculas(nombre) {
    return nombre.toLowerCase();
}

function  nombreConPuntoAlFinal(nombre) {
    return nombre + ".";
}



