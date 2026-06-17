const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("\nInforme uma temperatura: ", function(resposta) {
    
    if(resposta < 15){
        console.log("Frio");
    } else if(resposta < 26) {
        console.log("Agradável");
    } else {
        console.log("Quente");
    }
    rl.close();
});