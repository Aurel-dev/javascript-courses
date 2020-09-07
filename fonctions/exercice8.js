var readline = require("readline-sync");
var nombre = readline.questionInt("Quel nombre voulez-vous ? ");
var diviseur = readline.questionInt("Quel est le diviseur ? ")

var estDivisible = retourneEstDivisible(nombre,diviseur);

if(estDivisible){
    console.log("Le nombre " + nombre + " est divisible par " + diviseur);
} else {
    console.log("Le nombre " + nombre + " n'est pas divisible par " + diviseur);
}

function retourneEstDivisible(nombre,diviseur){
    if(nombre % diviseur === 0){
       return true; 
    } else {
       return false;
    }
}