var readline = require("readline-sync");

var nom = "Matthieu";
ditBonjour(nom);

var nom2 = readline.question("Quel pseudo voulez-vous?");
ditBonjour(nom2);

function ditBonjour(pseudo){
    console.log("Bonjour " + pseudo);
    console.log("Hello %s ", pseudo);
    console.log("Hola " + pseudo);
}