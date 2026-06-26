for (let i = 1; i <= 15; i++){
    console.log(i);
}
console.log("=====================================================");

for (let i = 0; i <= 30; i++){
    
    if(i % 2 === 0){
        console.log("par:", i);
    }
}
console.log("=====================================================");

for (let i = 0; i <= 30; i++){
    
    if(i % 2 === 0){
        console.log("impar:", i);
    }
}
console.log("=====================================================");

for (let i = 5; i <=50; i++){
    if (i % 5 === 0){
        console.log(i)
    }
}
console.log("=====================================================");

let notas = [8, 7, 9, 6];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;
console.log("Média:", media);
console.log("=====================================================");