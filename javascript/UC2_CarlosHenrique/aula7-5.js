const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("\nQual sua senha: ", function(resposta) {
    
    if(resposta == 1234){
        console.log("Acesso liberado!");

    } else {
        console.log("Acesso negado.");
    }
    rl.close();
});