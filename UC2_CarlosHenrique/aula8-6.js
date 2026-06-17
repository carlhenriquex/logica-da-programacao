const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("\nQual o seu peso: ", function(peso) {
    rl.question("\nQual o sua altura: ", function(altura) {

        peso = parseFloat(peso);
        altura = parseFloat(altura);

        let imc = peso / (altura * altura);

        if(imc > 0 && imc < 18.5){
            console.log("Baixo peso!");

        } else if (imc >= 18.5 && imc <= 24.9) {
            console.log("Peso adequado!");

        } else if (imc >= 25 && imc <= 29.9) {
            console.log("Sobrepeso.");

        } else if (imc >= 30 && imc <= 34.9) {
            console.log("Obesidade grau I.");

        } else if (imc >= 35 && imc <= 39.9) {
            console.log("Obesidade grau II.");

        } else if (imc > 40) {
            console.log("Obesidade grau III.");

        } else {
            console.log("Valores digitados inválidos.");
        };
        rl.close();
    });
});