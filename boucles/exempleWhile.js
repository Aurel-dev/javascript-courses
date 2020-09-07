var readline = require("readline-sync");

var message = "";
while (message !== "coucou"){
    message = readline.question("Saisir coucou : ");
}