let edad = 'adrian'; //con el type es un or para diferentes variables
let nombre = 'adrian';
//duck typing si camina o vuela como un pato es un pato
let variableLoca = '';
let casado = false;
let adrian = {
    nombre: 'adrian',
    apellido: 'solano'
};
console.log(adrian);
let numeros = [1, 2, 2, 3, 4];
let fechanacimineto = new Date();
/*let promesa: Promise<number> = () => {
    return new Promise(
        executor
:
    (resolve, reject) => {
        resolve(1);
    }
)

};*/
function saludar(nombre, apellido, ...otrosNombres) {
    return 1;
}
let respuestaSaludar = saludar('vicente', 'lopez');
respuestaSaludar = 1;
const saludo = (nombre) => {
    return 1;
};
class Usuario {
    constructor() {
    }
    saludar(nombre) {
        return nombre;
    }
}
const adrianInstancia = new Usuario();
const vicente = {
    nombre: 'vicente'
};
