if (true){
    console.log("Hola");
}

if(){
    console.log("Hola");
}else{
    console.log("Soy falso");
}
   

//Ejemplo: Si el usuario es mayo de edad va poder votar, 
//sino es mayor de edad no puede votar, si es mayor de 18 años no es la primera ves que ha votado

var edad = 18;

if (edad === 18){
    console.log("Puedes votar, sera tu primera votacion");
}else if (edad > 18){
    console.log("Puedes votar de nuevo");
}else{
    console.log("Aun no puedes votar");
}

//Reto de piedra, palel o tijera con la computadora

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario GANO con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "el usuario GANO con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};

resultado(op1,op3) //el usuario GANO con Piedra```

//--------------------------------------------------------------
var jugador;
var computador;

if (jugador == "tijeras"  && computador == "papel") 
{
    console.log("Ganaste");
}
else if (jugador == "Piedra"  && computador == "tijeras") 
{
    console.log("Ganaste");
}
else if (jugador == "papel"  && computador == "piedra") 
{
    console.log("Ganaste");
}
else if (jugador == computador ) 
{
    console.log("empate");
}
else {
    console.log("Perdiste")
}

