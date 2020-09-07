var age = 17;
console.log((age < 18) ? "mineur" : "majeur");

var sportif = true;
console.log((sportif) ? "bien" : "flemmard");

var readline = require("readline-sync");
var saisie1 = readline.questionInt("Choisir un nombre : ");
var parite = (saisie1 %2 === 0) ? "pair" : "impair";
console.log("Parité : " + parite);