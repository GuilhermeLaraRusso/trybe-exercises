// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numeroPar = 0;
let numeroImpar = 0;

for (number of numbers) {
  if (number % 2 === 0) {
    numeroPar += 1;
  } else {
    numeroImpar += 1;
  }
}
if (numeroImpar !== 0) {
  console.log('A quantidade de números impares é: ' + numeroImpar)
} else {
  console.log('Nenhum valor ímpar encontrado.')
}