const rxjs = require('rxjs');
const numeros$ = rxjs.of(1, 2, 3, 4, 5, 6); //es un observable de numeros con el signo de $
console.log(numeros$);
numeros$
    .subscribe((ok) => {
    console.log('en ok', ok);
}, (error) => {
    console.log('en ok', error);
}, () => {
    console.log('completado');
});
