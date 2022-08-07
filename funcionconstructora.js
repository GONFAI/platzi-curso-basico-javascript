function auto (marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
// Generamos un nuevo objeto del Objeto de la funcion
var autoNuevo = new auto("Tesla", "Model 4", 2022);
var autoNuevo2 = new auto("Tesla", "Model X", 2021);
var autoNuevo3 = new auto("Toyota", "Corolla", 2018);

// Crear un metodo para agregar varios autos de forma automatica

//Definimos las variables
let autos = [];
let cantidadAutos = 0;
let cantidadRegistrados = 0;
//Creamos la funcion constructora
function Auto(){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;     
}
// Le solicitamos al usuario que ingrese la cantidad de vehiculos a registrar
cantidadAutos = prompt('Cuantos autos desea registrar');

/*
**Ejecutamos el ciclo mientras que la cantidad de autos registrados sea menor a la cantidad 
*de autos que el usuario desea registrar. */

while(cantidadRegistrados < cantidadAutos){
    //se define la variables con scope local
    let marca = prompt('Marca: ');
    let modelo = prompt('Modelo: ');
    let annio = prompt('Año: ');

    //Se pasan las variables de scope local a la funcion constructora
    var autoNuevo = new auto(marca, modelo, annio);

    //Se agrega el auto al array de autos
    autos.unshift(autoNuevo);

    //Incrementamos la cantidad de autos en 1
    cantidadRegistrados++;
}

//retornamos por consola los elementos del arreglo registrados por el usuarios

console.log(autos);

//

function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var carro = [];
  for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }
