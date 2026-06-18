const { copyFileSync } = require("node:fs");

let vidas = 3;
let repeticoes = 1;
let episodio = 1;
let totalEpisodios = 5;
let tentativas = 1;
let estoque = 10;
let contador = 0;
let senha = 1;


while(vidas > 0) {
    console.log("Jogando..");
    vidas--;
}

console.log("Game over!");
console.log("==============================================")

// =============================================

while(repeticoes <= 10) {
    console.log("Fazendo repetição", repeticoes);
    repeticoes ++;
}

console.log("Exercício concluído!");
console.log("==============================================")

// =============================================

while(episodio <= totalEpisodios) {
    console.log("Assistindo episódio", episodio);
    episodio ++;
}

console.log("Série finalizada!");
console.log("==============================================")

// ========================================

while(tentativas <= 3) {
    console.log("Tentativa de login n°", tentativas);
    tentativas ++;
}

console.log("Número máximo de tentativas atingido.");
console.log("==============================================")

// ==========================================


while(estoque > 0) {
    console.log("Produto vendido.");
    estoque --;
}

console.log("Estoque esgotado.");
console.log("==============================================")

// =========================================================


while(contador < 5) {
    console.log("Valor:", contador);
    contador ++;
}
console.log("==============================================")

// =============================================================


while(senha <= 10) {
    console.log("Chamando a senha", senha);
    senha ++;
}
console.log("==============================================")
