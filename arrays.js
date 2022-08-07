var frutas = ["Manzanas", "Plátanos", "Cereza", "Fresa"];
console.log(frutas);

//Sintaxis Array
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
//acceso a contenido de array
console.log(frutas);
//impresion de todos los valores del arreglo segun su longitud
console.log(frutas.length);
//impresion
4
//impresion de un elemento en específico segun el index (Posicion) de un arreglo
console.log(frutas[0]);
//impresion
Manzana
//Para ingresar mas elementos al arreglo
var masFrutas = frutas.push("Uvas");//Añade elementos en la última posición del arreglo
//impresion
console.log(frutas);
["Manzana", "Platano", "Cereza", "Fresa", "Uvas"]
//Eliminar el último elemento del arreglo
var ultimo = frutas.pop("Uvas");
//Insertar elemento en el arreglo en la primera posición
var nuevaLongitud = frutas.unshift("Uvas");
//Eliminar elemento en el arreglo en la primera posición
var borrarFruta = frutas.shift("Uvas");
//Saber posición de elemento dentro de un arreglo
var posicion = frutas.indexOf("Cereza");

//---Array con Loops o Ciclos (FOR) Ejemplo 1

var estudiantes = ["Maria E", "Alejandro", "Luciana"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}
//---Array con Loops o Ciclos (FOR OF) Ejemplo 2

var estudiantes = ["Maria E", "Alejandro", "Luciana"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

//---Array con Loops o Ciclos (WHILE) Ejemplo 3

var estudiantes = ["Maria E", "Alejandro", "Luciana"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}