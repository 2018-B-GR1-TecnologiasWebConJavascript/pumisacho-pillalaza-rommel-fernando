
//siempre voy a usar el tripe igual para comparar los tipos de datos
if(0 === ''){
    console.log('es verdad');

}else{
    console.log('es falso');
}


//OPERADORES


const arreglo=['A','b','C'];

const respuesta = arreglo
    .forEach(
        (valorActualDeLaIteracion, indice , arreglo) => {
            console.log('valor:' , valorActualDeLaIteracion);
            console.log('indice',indice);
            console.log('arreglo',arreglo);
        }
    );

console.log(respuesta);

arreglo.forEach(v => console.log(v));

//operador map -> muta el arreglo cambiar -> reasignar nuevo arreglo

const respuestaMap = arreglo
    .map(valoraActual=> valoraActual.toUpperCase());

console.log(respuestaMap);

const arregloNumeros = [3,2,4,6,7,5,8,9,1];


const respuestaFilter= arregloNumeros
    .filter(n => n > 5)
    .map(n => n+1)
    .filter(n => n > 7)
    .forEach(n=>console.log(n));

console.log(respuestaFilter);

//find

const  respuestaFindIndex = arregloNumeros
    .findIndex (v=> v === 7);

console.log('respuesta de finindex'+arregloNumeros.indexOf(7));
console.log('respuesta de finindex'+respuestaFindIndex);

//find

const respuestaFind = arregloNumeros
    .find(v => v === 7);

console.log(respuestaFind);

//some

const respuestaSome = arregloNumeros
    .some(n => n % 7 === 0);

console.log(respuestaSome);

//every

const respuestaEvery = arregloNumeros
    .every(n => n < 5);

console.log(respuestaEvery);

//reduce

const  respuestaReduce = arregloNumeros
    .reduce(
        (valorActualDeLaOperacion,valorActualDelArreglo)=>{

            return valorActualDeLaOperacion + valorActualDelArreglo
        },
        0
    );
console.log(respuestaReduce);


const  respuestaReduce2 = arregloNumeros
    .reduce(
        (a , b ) => b - a ,0 );

console.log(respuestaReduce2);