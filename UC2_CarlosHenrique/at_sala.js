const TOTAL_NUMERO = 75;
let numerosSorteados = 42;
let totalSoteados = 7;
let nomeDoEvento = "evento de bingo";

let faltaSortear = TOTAL_NUMERO - totalSoteados;

let jogoTerminou = numerosSorteados === TOTAL_NUMERO;

console.log(faltaSortear);
console.log(jogoTerminou);
console.log("Evento: " + nomeDoEvento + " | Total sorteados: " + totalSoteados);