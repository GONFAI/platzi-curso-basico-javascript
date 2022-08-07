var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2022
};
// para acceder a algo especifico de un objeto es:
miAuto.marca
miAuto.annio
miAuto.modelo
// para agregar una propiedad que sea una funcion como valor (metodo de objeto)
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2022,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

