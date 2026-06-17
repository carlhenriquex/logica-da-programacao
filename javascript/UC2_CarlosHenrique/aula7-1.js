const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("\nInforme sua idade: ", function(resposta) {
    
    if(resposta < 16){
        console.log("Você ainda não pode votar!");
    } else if(resposta < 18) {
        console.log("Seu voto é opcional!");
    } else if(resposta < 70) {
        console.log("Você já pode votar!");
    } else {
        console.log("Seu voto é opcional!");
    }
    rl.close();
});