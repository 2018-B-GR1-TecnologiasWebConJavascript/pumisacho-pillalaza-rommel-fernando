función  ejercicio ( arregloStrings , callback ) {

    const  respuestas  = [];

    arregloStrings
        . forEach (
            ( string , indice ) => {
                const  nombreArchivo  =  ` $ { indice } - $ { cadena } .txt ' ;
                const  contenido  = string;
                fs . writeFile (
                    nombreArchivo
                    contenido
                    ( err ) => {
                        const  respuesta  = {
                            nombreArchivo : nombreArchivo,
                            contenidoArchivo : contenido,
                            de error : err,
                        };
                        respuestas . empuje (respuesta);

                        const  estaCompletoElArreglo  =  respuestas . longitud  ===  arregloStrings . longitud ;

                        if (estaCompletoElArreglo) {
                            devolución de llamada (respuestas);
                        }

                    }
                );
            }
        )
        
        }


Ejercicio (
    [ ' A ' , ' B ' , ' C ' ],
    ( respuestaEjercicio ) => {
        consola . log (respuestaEjercicio);
    }
);