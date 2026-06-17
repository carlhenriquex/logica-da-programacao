const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("\nInforme sua idade: ", function(resposta) {
    
    if(resposta < 12){
        console.log("Criança");
    } else if(resposta < 18) {
        console.log("Adolecente");
    } else if(resposta < 60) {
        console.log("Adulto");
    } else {
        console.log("Idoso");
    }
    rl.close();
});