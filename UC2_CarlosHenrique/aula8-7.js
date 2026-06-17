const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("\nInforme a hora atual: ", function(resposta) {
    
    if(resposta >= 0 && resposta <= 5){
        console.log("Madrugada!");
    } else if(resposta <= 11) {
        console.log("Boa dia!");
    } else if(resposta <= 17) {
        console.log("Boa tarde!");
    } else if(resposta <= 23) {
        console.log("Boa noite!");
    } else {
        console.log("Hora inválida.");
    }
    rl.close();
});