const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("\nInforme a hora atual: ", function(resposta) {
    
    let hora = Number(resposta);

    if(hora >= 0 && hora <= 5){
        console.log("Madrugada!");
    } else if(hora <= 11) {
        console.log("Boa dia!");
    } else if(hora <= 17) {
        console.log("Boa tarde!");
    } else if(hora <= 23) {
        console.log("Boa noite!");
    } else {
        console.log("Hora inválida.");
    }
    rl.close();
});