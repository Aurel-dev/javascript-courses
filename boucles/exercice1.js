var readline = require("readline-sync");

var tableMultiplication = readline.questionInt("Quelle est la table de multiplication?")
for(var cpt=1 ; cpt <= 10 ; cpt = cpt + 1){
    var resultat = cpt * tableMultiplication;
    console.log(cpt + " * " + tableMultiplication + " = " + resultat);
}