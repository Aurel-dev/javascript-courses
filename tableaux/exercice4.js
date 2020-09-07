var readline = require("readline-sync");

var tableau = [4,8,12,16];

var choix = -1;
while(choix!== 0){
  afficherMenu();
  choix = readline.questionInt("Quel choix voulez-vous ? ");
  switch(choix){
    case 1 : afficherTableau(tableau);
    break;
    case 2 : 
        var moyenne = calculMoyenne(tableau);
        console.log("La moyenne est :" + moyenne);
    break;
    case 3 : 
        console.log("Saisie du tableau");
        tableau = saisieTableau();
    break;
    case 0 : console.log("A +");
    break;
    default : console.log("cas non pris en compte")
  }  
}

function saisieTableau(){
    var nombreNotes = readline.questionInt("Combien de notes voulez-vous ? ");

    var nombres= [];
    for(var cpt = 1; cpt < nombreNotes+1; cpt++){
    nombres.push(readline.questionInt("Saisir la note numéro "+ cpt +" :"));
    }
    return nombres;
}

function afficherMenu(){
    var menu = "1/ Afficher tableau\n";
    menu += "2/ Calculer la moyenne \n";
    menu += "3/ Saisir un tableau\n";
    menu += "0/ Sortir";
    console.log(menu);
}


afficherTableau(tableau);
var moyenne = calculMoyenne(tableau);
console.log("La moyenne est " + moyenne);

function afficherTableau(tab){
    for(var i = 0 ; i < tab.length ; i++){
        console.log("Indice : " + i + " - valeur : " + tab[i]);
    }
}

function calculMoyenne(tab){
    var resultat = 0;
    for(var i = 0; i <= tab.length-1; i++){
        resultat += tab[i];
    }
    return resultat / tab.length;
}