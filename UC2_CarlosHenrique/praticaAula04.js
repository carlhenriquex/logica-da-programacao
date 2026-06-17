const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const TOTAL_NUMER0S = 75;
let numerosDisponiveis = [];
let numerosSorteados = [];


if (numerosDisponiveis.length === 0) {
    console.log("\nTodos os números ja foram chamados");
    return;
}

// =====================================