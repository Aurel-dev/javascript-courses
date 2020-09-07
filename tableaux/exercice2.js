var readline = require("readline-sync");

var nombreNotes = readline.questionInt("Combien de notes voulez-vous ? ");
var nombres= [];
for(var cpt = 1; cpt < nombreNotes+1; cpt++){
    nombres.push(readline.questionInt("Saisir la note numéro "+ cpt +" :"));
}
console.log(nombres);

console.log("La moyenne est de : " + Math.round(calculMoyenne(nombres)*10)/10);

function calculMoyenne(tab){
    var resultat = 0;
    for(var i = 0 ; i < nombres.length ; i++){ // i <= nombres.length-1
        resultat = resultat + nombres[i];
    }
    var moyenne = resultat / nombres.length;
    return moyenne;
}

