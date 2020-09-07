ligneTirets();
console.log("Bonjour");
afficherLignes();
console.log("Coucou");
afficherLignes();
console.log("Salut");
ligneTirets();


function ligneTirets(){
    var txt = "";
    for(var i = 0; i < 50 ; i++){
        txt += "-";
    }
    console.log(txt);
}

function afficherLignes(){
    for(var i = 0; i < 4; i++){
        ligneTirets();
    }
}