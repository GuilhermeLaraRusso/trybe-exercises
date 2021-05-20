// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let a = 3;
let b = 5;
let c = 9;

let resultado;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  resultado = true;
} else {
  resultado = false;
}

console.log(resultado);