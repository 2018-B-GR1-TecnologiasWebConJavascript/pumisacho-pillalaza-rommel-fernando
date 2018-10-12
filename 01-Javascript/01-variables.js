//int edad = 10;
//es un lenguaje

//datos importantes en javascript
var edad = 10;
edad = "10";
var sueldo = 1.234;
var edadString = "10";
var casado = false;
var hijos = null;
var dato = undefined;
var fecha_nacimiento = new Date();
var adrian = {
    "nombre": "Romel",
    'segundo nombre': 'Fernando',
    apellidoPaterno: `Pumisacho`,
    apellidoMaterno: 'Pillalaza',
    edad: 20,
    casado: false,
    hijo: null,
    mascotas: {
        nombre: "iris"
    }
}; // tipo object


console.log("edad", typeof edad);
console.log("sueldo", typeof sueldo);
console.log("edad string", typeof edadString);
console.log("casado", typeof casado);//booblean
console.log("hijos", typeof hijos);//object
console.log("dato valor", dato);//object
console.log("dato tipo", typeof dato);//object
console.log("fecha de nacimineto", typeof fecha_nacimiento);//object
//en javascript tenemos funciones propiedades clases
//java no es un lenguaje orientado a objetos

console.log(adrian.nombre);
console.log(adrian);
delete adrian.hijo;
console.log(adrian);
adrian.hija={
    nombre:"???"
};
console.log(adrian);

if(2){//truthy
    console.log("si")
}else{
    console.log("no")
}
if(0){//falsy
    console.log("si")
}else{
    console.log("no")
}
if(-2){//truthy
    console.log("si")
}else{
    console.log("no")
}
if(""){//falsy
    console.log("si")
}else{
    console.log("no")
}
if("asd"){//truthy
    console.log("si")
}else{
    console.log("no")
}
if(null){//falsy
    console.log("si")
}else{
    console.log("no")
}
if({nombre:'adrian'}){//truthy
    console.log("si")
}else{
    console.log("no")
}
if(new Date()){//truthy
    console.log("si")
}else{
    console.log("no")
}
if(undefined){//falsy
    console.log("si")
}else{
    console.log("no")
}