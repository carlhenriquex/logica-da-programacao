const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("\nSeu nome: ", function(resposta1) {
    rl.question("Seu sobrenome: ", function(resposta2) {

        console.log("Resposta:", resposta1, resposta2);

        rl.close(); // fecha somente após a última resposta
    });
});