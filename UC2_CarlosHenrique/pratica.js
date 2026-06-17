const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("\nQual o seu peso: ", function(peso) {
    rl.question("\nQual a sua altura: ", function(altura) {

        peso = parseFloat(peso);
        altura = parseFloat(altura);

        let imc = peso / (altura * altura);

        console.log("\nIMC:", imc.toFixed(2));

        if (imc < 18.5) {
            console.log("Baixo peso");
        } else if (imc >= 18.5 && imc <= 24.9) {
            console.log("Peso normal");
        } else if (imc >= 25 && imc <= 29.9) {
            console.log("Sobrepeso");
        } else if (imc >= 30 && imc <= 34.9) {
            console.log("Obesidade grau 1");
        } else if (imc >= 35 && imc <= 39.9) {
            console.log("Obesidade grau 2");
        } else {
            console.log("Obesidade grau 3");
        }

        rl.close();
    });
});