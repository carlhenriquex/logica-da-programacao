// 5 é maior que 20 e também é menor que 2;
question1 = (5 > 20) && (5 < 2);

// 5 é igual a 5 ou é igual a "5";
question2 = (5 === 5) || (5 === "5");

// Negação de (20 é maior que 50);
question3 = !(20 > 50);

// Negação de (20 é maior que 50 ou 50 é maior que 60);
question4 = !(20 > 50 || 50 > 60);

// 10 é maior que e também é menor que 20;
question5 = (10 > 5) && (10 < 20);

//15 é maior que 10 ou é igual a 15;
question6 = (15 < 10) || (15 === 15);

// Negação de (30 é igual a 40);
question7 = !(30 === 40);

// Negação de (8 é maior que 3 e 12 é menor que 5);
question8 = !((8 > 3) && (12 < 5));

// 25 é maior que 20 ou 10 é maior que 50;
question9 = (25 > 20) || (10 > 50);

// Resultado
console.log(
    question1, question2, question3, question4, question5, question6, question7, question8, question9
);