var readline = require("readline-sync");

var moisEnLettre = readline.question("Quel mois de l'annee (en lettre) voulez-vous?");

switch(moisEnLettre){
    case "Janvier" : console.log(1);
    break;
    case "fevrier" :
    case "Fevrier" : console.log(2);
    break;
    default : console.log("Inexistant");
}