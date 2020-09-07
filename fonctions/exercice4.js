var readline = require("readline-sync");

console.log("------------------------");
ditBonjour("Mathieu", "FR");
console.log("------------------------");
ditBonjour("Tya", "Es");
console.log("------------------------");
ditBonjour("Milo", "fR");

var pseudo = readline.question("Quel pseudo voulez-vous?");
var langue = readline.question("Quelle langue voulez-vous?");
ditBonjour(pseudo,langue);

function ditBonjour(pseudo, langue){
    if(langue.toLowerCase() === "fr"){
        console.log("Bonjour " + pseudo);
    } else if(langue.toLowerCase() === "en"){
        console.log("Hello " + pseudo);
    } else if(langue.toLowerCase() === "es"){
        console.log("Hola " + pseudo);
    } else {
        console.log("La langue n'est pas paramétrée");
    }
}

// possibilité de faire des SWITCH/case/break;