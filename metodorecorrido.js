//METODO FILTER

//Generamos lista de articulos y esta lista tendra el nombre del articulo y el costo

var articulos = [
    {nombre: "Bicicleta", costo: 450000},
    {nombre: "Televisor", costo: 2500000},
    {nombre: "Libro", costo: 45000},
    {nombre: "Celular", costo: 780000},
    {nombre: "Portatil", costo: 780000},
    {nombre: "Teclado", costo: 35000},
    {nombre: "Audifonos", costo: 250000}
];
// Aqui llamamos a nuestro primer metodo. Este se llama FILTER el cual ayudara a filtrar ciertas cosas
// y este validara si algo es verdad o falso y lo metera en nuevo array y no me modifica el array original ARTICULOS
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 45000
});

articulosFiltrados

//METODO MAP

var articulos = [
    {nombre: "Bicicleta", costo: 450000},
    {nombre: "Televisor", costo: 2500000},
    {nombre: "Libro", costo: 45000},
    {nombre: "Celular", costo: 780000},
    {nombre: "Portatil", costo: 780000},
    {nombre: "Teclado", costo: 35000},
    {nombre: "Audifonos", costo: 250000}
];

//Este metodo nos permite mapear ciertos objetos, este metodo nos va generar un nuevo arreglo sin modificar el original
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

nombreArticulos

//METODO FIND
var articulos = [
    {nombre: "Bicicleta", costo: 450000},
    {nombre: "Televisor", costo: 2500000},
    {nombre: "Libro", costo: 45000},
    {nombre: "Celular", costo: 780000},
    {nombre: "Portatil", costo: 780000},
    {nombre: "Teclado", costo: 35000},
    {nombre: "Audifonos", costo: 250000}
];

//Este metodo nos permite encontrar algo dentro del array, este metodo nos va generar un nuevo arreglo sin modificar el original
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Portatil"
});

encuentraArticulo

//METODO FOREACH
var articulos = [
    {nombre: "Bicicleta", costo: 450000},
    {nombre: "Televisor", costo: 2500000},
    {nombre: "Libro", costo: 45000},
    {nombre: "Celular", costo: 780000},
    {nombre: "Portatil", costo: 780000},
    {nombre: "Teclado", costo: 35000},
    {nombre: "Audifonos", costo: 250000}
];

//Este metodo a diferencia de los demas no genera un nuevo array, solo genera un filtro sobre el array original sin modificarlo y regresa algo
var encuentraArticulo = articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//METODO SOME
var articulos = [
    {nombre: "Bicicleta", costo: 450000},
    {nombre: "Televisor", costo: 2500000},
    {nombre: "Libro", costo: 45000},
    {nombre: "Celular", costo: 780000},
    {nombre: "Portatil", costo: 780000},
    {nombre: "Teclado", costo: 35000},
    {nombre: "Audifonos", costo: 250000}
];

//Este metodo genera una validacion de verdadero o falso para todos los que cumplan esa validacion. Se genera un nuevo array
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 50000
});

articulosBaratos

//METODO PUSH
var articulos = [
    {nombre: "Bicicleta", costo: 450000},
    {nombre: "Televisor", costo: 2500000},
    {nombre: "Libro", costo: 45000},
    {nombre: "Celular", costo: 780000},
    {nombre: "Portatil", costo: 780000},
    {nombre: "Teclado", costo: 35000},
    {nombre: "Audifonos", costo: 250000}
];

//Este metodo nos permite agregar uno o mas elementos a nuestro array y ubicarlos al final del array.
var nuevosArticulos = articulos.push({nombre: "Mp3", costo: 150000});
console.log(articulos.nombre);

//METODO SHIFT
var articulos = [
    {nombre: "Bicicleta", costo: 450000},
    {nombre: "Televisor", costo: 2500000},
    {nombre: "Libro", costo: 45000},
    {nombre: "Celular", costo: 780000},
    {nombre: "Portatil", costo: 780000},
    {nombre: "Teclado", costo: 35000},
    {nombre: "Audifonos", costo: 250000}
];

//Este metodo nos permite eliminar un elemento de nuestro array, es decir el primer elemento ubicado en la posicion 1 o Index(0)
//este metodo modifica el array original
var borrarArticulos = articulos.shift(function(articulo){
    console.log(articulos.nombre);
});

//METODO POP
var articulos = [
    {nombre: "Bicicleta", costo: 450000},
    {nombre: "Televisor", costo: 2500000},
    {nombre: "Libro", costo: 45000},
    {nombre: "Celular", costo: 780000},
    {nombre: "Portatil", costo: 780000},
    {nombre: "Teclado", costo: 35000},
    {nombre: "Audifonos", costo: 250000}
];

//Este metodo nos permite eliminar un elemento de nuestro array, es decir el ultimo elemento ubicado en la ultima posicion de nuestro array
//este metodo modifica el array original
var borrarArticulos2 = articulos.pop(function(articulo){
    console.log(articulos.nombre);
});