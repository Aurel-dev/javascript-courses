var readline = require("readline-sync");

var moisEnLettre = readline.question("Quel mois de l'annee en lettre voulez-vous?");

var txt = "Le mois "+ moisEnLettre + " correspond à"
if(moisEnLettre === "Janvier"){
    console.log(txt + " 1");
} else if(moisEnLettre === "Fevrier"){
    console.log(txt + " 2");
}