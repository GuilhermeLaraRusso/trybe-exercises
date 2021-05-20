// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

let a = 15;
let b = 5;

if (a > b) {
  console.log('O número ' + a + ' é maior');
} else if (a < b) {
  console.log('O número ' + b + ' é maior');
} else if (a === b) {
  console.log('Ambos os números são iguais');
} else {
  console.log('A comparação não existe');
}