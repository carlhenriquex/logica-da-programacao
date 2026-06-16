const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("\nInforma a number: ", function(resposta) {
    
    if(resposta >= 1 && resposta <=75){
        console.log("Número válido!");
    } else {
        console.log("Número inválido.");
    }
    rl.close(); // fecha somente após a última resposta
});