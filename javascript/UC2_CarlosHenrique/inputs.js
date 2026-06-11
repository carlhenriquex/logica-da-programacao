const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
}
);

rl.question("\nSeu nome: ", function(resposta){
    console.log("Resposta: ", resposta);

});


// =====================================