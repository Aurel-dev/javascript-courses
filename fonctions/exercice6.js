var readline = require("readline-sync");

var number1 = readline.questionInt("Premier nombre : ");
var number2 = readline.questionInt("Deuxième nombre : ");
var number3 = readline.questionInt("Troisième nombre : ");
var number4 = readline.questionInt("Quatrième nombre : ");
calculMoyenne(number1,number2,number3,number4)

function calculMoyenne(n1,n2,n3,n4){
    var moyenne = (n1 + n2 + n3 + n4) / 4 ;
    console.log("La moyenne des 4 nombres saisis au clavier est de : " + moyenne);
}
