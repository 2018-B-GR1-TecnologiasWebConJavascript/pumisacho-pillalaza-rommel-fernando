
const version = require('./version.js');
const numeroProcesadores = require('./numero-procesadores');
const calculadora = require('./calculadora-simple');
const sinUso = require('../../04-Operadores');

console.log(version);
console.log(numeroProcesadores);

console.log(calculadora.sumar(4,5));
console.log(calculadora.restar(4,5));
console.log(calculadora.multiplicar(4,5));
console.log(calculadora.dividir(4,5));



