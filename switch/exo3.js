var readline = require("readline-sync");
var menu = "1/ Ajouter un joueur\n";
menu += "2/ Modifier un joueur\n";
menu += "3/ Supprimer un joueur\n";
menu += "4/ Quitter le programme";

console.log(menu)

var choix = readline.questionInt("Quel est votre choix ?")

switch(choix){
    case 1 : console.log("Vous avez selectionné l'ajout d'un joueur");
    break;
    case 2 : console.log("Vous avez selectionné la modification d'un joueur");
    break;
    case 3 : console.log("Vous avez selectionné la suppression d'un joueur");
    break;
    case 4 : console.log("A bientôt");
    break;
    default : console.log("Cas non traité");
}

