const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("\nQual o seu peso: ", function(peso) {
    rl.question("\nQual o sua altura: ", function(altura) {

        let peso = Float(peso);
        let altura = Float(altura);

        imc = peso / (altura * altura);

        if(imc < 18.5){
            console.log("Baixo peso!");

        } else if (18.5 >= imc <= 24.9) {
            console.log("Acesso negado.");

        } else if (25 >= imc <= 29.9) {
            console.log("Acesso negado.");

        } else if (30 >= imc <= 34.9) {
            console.log("Acesso negado.");

        } else if (35 >= imc <= 39.9) {
            console.log("Acesso negado.");

        } else if (imc > 40) {
            console.log("Acesso negado.");

        } else {
            console.log("Valor digitado inválido.");
        };
        rl.close();
    });
});