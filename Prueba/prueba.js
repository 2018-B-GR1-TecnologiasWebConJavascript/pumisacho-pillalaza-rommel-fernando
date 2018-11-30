//const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
function main() {
    console.log('respuestas del examen');
    const bddLeida$ = rxjs.from(leerBDD());
    //abrirr base de datos
    //buscar tipos de grass y tipo ground
    //
    bddLeida$
        .pipe(mergeMap((respuesta) => {
        return rxjs
            .from(buscar());
    }))
        .subscribe((respuesta) => {
        console.log('correcto');
    }, (error) => {
    }, () => {
    });
}
main();
function leerBDD() {
    return new Promise((resolve) => {
        fs.readFile('data.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                resolve({
                    mensaje: 'no existe base de datos',
                    bdd: null
                });
            }
            else {
                resolve({
                    mensaje: 'base de datos leida',
                    bdd: JSON.parse(contenidoArchivo),
                });
                console.log('bdd leida');
            }
        });
    });
}
function buscar() {
    return new Promise((resolve, reject) => {
        fs.readFile('data.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                reject({
                    mensaje: 'error leyendo',
                    error: 500
                });
            }
            else {
                //transformo el contenido del archivo en un json para poder trabajar con operadores de arreglos
                const bdd = JSON.parse(contenidoArchivo);
                const respuestaFind = bdd
                    .types.filter(bdd => bdd.type.name === 'grass')
                    .forEach(n => console.log(n));
            }
        });
    });
}
