var readline = require("readline-sync");

var menu = "1/ Bonjour\n";
menu += "2/ Salut\n";
menu += "3/ Coucou\n";
menu += "0/ Quitter";

var saisie ="";
while (saisie !== 0){
    console.log(menu);
    saisie = readline.questionInt("Quel choix voulez-vous ? ");
    switch(saisie){
        case 1 : console.log("Bonjour");
        break;
        case 2 : console.log("Salut");
        break;
        case 3 : console.log("Coucou");
        break;
        case 0 : console.log("A bientot");
        break;
        default : console.log("Cas non pris en compte")
    }
}
