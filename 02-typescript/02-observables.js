//import {subscribeOn} from "rxjs/operators";
const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const distinct = require('rxjs/operators').distinct;
const concat = require('rxjs/operators').concat;
const numeros$ = rxjs.of(1, 'adrian', [1, 2, 3, 4, 5], 1, 1);
const promesita = (correcto) => {
    return new Promise((resolve, reject) => {
        if (correcto) {
            resolve(':)');
        }
        else {
            reject(':(');
        }
    });
};
const promesita$ = rxjs.from(promesita('gc')); //solo para promesas usamos el from
numeros$
    .pipe(concat(promesita$)).pipe(distinct(), map((valorActual) => {
    return {
        data: valorActual
    };
})) //es un observable de numeros con el signo de $
    .
        subscribe((ok) => {
    console.log('en ok', ok);
}, (error) => {
    console.log('en ok', error);
}, () => {
    console.log('completado');
});
