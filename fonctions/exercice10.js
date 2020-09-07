var readline = require("readline-sync");

var capitalEmprunt = readline.questionInt("Combien voulez-vous emprunter ? ");
var tauxInteret = readline.questionInt("Quel est le taux propose par votre banquier (par an) ? ");
var dureePret = readline.questionInt("Quelle est la durée de l'emprunt (en années) ? ");

console.log("----------------------------");

console.log("Votre mensualité sera de %d € par mois", calculMensualite(capitalEmprunt,tauxInteret,dureePret));

function calculMensualite(capital, taux, duree){
    var i = taux / 100 / 12;
    var n = duree * 12;
    var mensualite = capital * (i / (1-Math.pow(1+i,-n)));
    return Math.round(mensualite);
}

