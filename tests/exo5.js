var readline = require("readline-sync");

var moisEnChiffre = readline.questionInt("Quel mois de l'annee voulez-vous?");

if(moisEnChiffre === 1)
console.log("Le mois %d est Janvier", moisEnChiffre);

