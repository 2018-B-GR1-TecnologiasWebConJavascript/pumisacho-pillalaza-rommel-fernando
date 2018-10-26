//02-fs/app.js

const fs = require('fs');
//const express = require('express');
//console.log(express);

const nombreArchivo = 'ejemplo.txt';
const contenidoArchivo = new Date();

console.log('inicio');


fs.readFile(nombreArchivo,'utf-8',
    (error,textoDelArchivo) => { //callback

        if (error) {

            try {
                throw new Error(error);

            } catch (e) {
                console.error(e);
            }

        } else {

            console.log(textoDelArchivo);
        }
    }
);


fs.writeFile ('ejemplo.txt',textoDelArchivo + '\n' +contenidoArchivo,
    (error)=> {
    if(err) throw err;
    console.log('archivo guardado');
} );



console.log('fin');



