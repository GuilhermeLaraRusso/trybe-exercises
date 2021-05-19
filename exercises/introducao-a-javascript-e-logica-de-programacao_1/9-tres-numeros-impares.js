// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let a = 4;
let b = 2;
let c = 9;

let resultado;

if (a % 2 === 1 || b % 2 === 1 || c % 2 === 1) {
  resultado = true;
} else {
  resultado = false;
}

console.log(resultado);