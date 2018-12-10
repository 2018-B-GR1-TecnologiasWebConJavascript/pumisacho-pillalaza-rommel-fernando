let edad: number | string = 'adrian'; //con el type es un or para diferentes variables
let nombre: string = 'adrian';
//duck typing si camina o vuela como un pato es un pato
let variableLoca: any = '';
let casado: boolean = false

let adrian: {//interface para typar un json
    nombre: string;
    apellido?: string; //con una ? le hago opcional al typeo
} = {//JSON
    nombre: 'adrian',
    apellido: 'solano'
};

console.log(adrian);

let numeros: number[] = [1, 2, 2, 3, 4];

let fechanacimineto: Date = new Date();


/*let promesa: Promise<number> = () => {
    return new Promise(
        executor
:
    (resolve, reject) => {
        resolve(1);
    }
)

};*/

function saludar(
    nombre: string,
function saludar(
    nombre: string,
    apellido?: string,
    ...otrosNombres: string[]): number { //despues de los parentesis hago el typescrip del return de la funcion

    return 1;
}

let respuestaSaludar = <number> saludar('vicente', 'lopez');

apellido?: string,
    ...otrosNombres: string[]): number { //despues de los parentesis hago el typescrip del return de la funcion

    return 1;
}

let respuestaSaludar = <number> saludar('vicente', 'lopez');

respuestaSaludar = 1;

const saludo = (nombre: string): number => {
    return 1;
}

class Usuario {
    public edad: string;
    nombre;

    constructor() {
    }

    saludar(nombre: string): string {
        return nombre;
    }
}

const adrianInstancia = new Usuario();


interface UsuarioDummy {
    nombre: string;
    apellido?: string;
}

const vicente: UsuarioDummy = {

    nombre: 'vicente'
};




































