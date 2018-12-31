declare var require;
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
        .pipe(
            mergeMap(
                (respuesta) => {
                    return rxjs
                        .from(buscar())
                }
            )
        )
        .subscribe(
            (respuesta) => {
                console.log('correcto');

            }, (error) => {


            }, () => {


            }
        )
}

main();

function leerBDD() {

    return new Promise(
        (resolve) => {
            fs.readFile(
                'data.json',
                'utf-8',
                (error, contenidoArchivo) => {
                    if (error) {
                        resolve(
                            {
                                mensaje: 'no existe base de datos',
                                bdd: null
                            })
                    } else {
                        resolve({
                            mensaje: 'base de datos leida',
                            bdd: JSON.parse(contenidoArchivo),

                        })
                        console.log('bdd leida');
                    }
                }
            )
        }
    )

}

function buscar() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                'data.json',
                'utf-8',
                (error, contenidoArchivo) => {
                    if (error) {
                        reject({
                            mensaje: 'error leyendo',
                            error: 500
                        })
                    } else {
                        //transformo el contenido del archivo en un json para poder trabajar con operadores de arreglos
                        const bdd: BaseDatos = JSON.parse(contenidoArchivo);

                        const respuestaFind = bdd
                            .types.filter( (valor,indice) => bdd.types.name === 'types')     //esperaba que con esto pueda clasificar los pokenomes
                            .forEach(n => console.log(n));



                    }
                })
        }
    )
}

export interface BaseDatos {
    types: typess[];
    abilities: abilities[];
}

interface typess {
    slot: number;
    //type: type;
    name: string;
    url: string;
}

interface type {
    name: string;
    url: string;
}

interface abilities {
    ability: abilit;
    is_hidden: boolean;
    slot: number;

}

interface abilit {
    name: string;
    url: string;
}

interface moves {
    name: "machine";
}