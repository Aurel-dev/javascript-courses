var prenom = "GASTON";
var nom = "Matthieu";

console.log("Prénom : "+ prenom);
console.log("Nom : "+ nom);

var tmp = prenom; // tmp = GASTON
prenom = nom;
nom = tmp;

console.log("Prénom : "+ prenom);
console.log("Nom : "+ nom);