//promesas

const fs = require('fs');
const nombre = '10-texto.txt';


/*
const nuevaPromesa = (nombreArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreDelArchivo,
                'utf-8',
                (err, contenidoLeidoDelArchivo) => {
                    if (err) {
                        reject(err);

                    } else {
                        resolve(contenidoLeidoDelArchivo);
                    }
                }
            )
        }
    )
};

const nuevaPromesaescritura = (nombreArchivo, contenidoArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                nombreDelArchivo,
                contenidoArchivo,
                (err) => {
                    if (err) {
                        reject(err);

                    } else {
                        resolve(contenidoLeidoDelArchivo);

                    }
                }
            )
        }
    )
};


nuevaPromesa(nombre)
    .then(
        (contenido) => {
            console.log(contenido);
            return nuevaPromesaescritura('07-ejemplo2.txt', 'Adios amigos');
        }
    )
    .then(
        (contenidoArchivoEscrito) => {
            console.log(contenidoArchivoEscrito);
        }
    )
    .catch(
        (error) => {
            console.log('mal', error);
        }
    );
*/



const oppendFile = (nombreArchivo,contenido) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo,
                'utf-8',
                (error, contenidoLeidoDelArchivo) => {
                    if (error) {
                        fs.writeFile(
                            nombreArchivo,
                            contenido,
                            (err) => {
                                if (err) {
                                    //callback(undefined, err)
                                    resolve(err);

                                } else {
                                    // Devolver el contenido
                                    //callback(contenido);
                                    reject(contenidoLeidoDelArchivo);

                                }
                            }
                        );
                    } else {

                        fs.writeFile(
                            nombreArchivo,
                            contenidoLeidoDelArchivo + contenido,
                            (err) => {
                                if (err) {
                                    resolve(undefined, err);
                                } else {
                                    // Devolver el contenido
                                    reject(contenidoLeidoDelArchivo + contenido)
                                }
                            }
                        )
                    }
                }
            );

        }
    )
};


oppendFile(nombre,'holapoquueeee')
    .then(
        (contenido) => {

            return oppendFile('09-texto.txt', 'Adios amigos');
        }
    )
    .catch(
        (error) => {
            console.log('mal', error);
        }
    );



