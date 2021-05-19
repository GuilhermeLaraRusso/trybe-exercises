// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 15;
let b = 5;
let c = 25;

if (a >= b && a >= c) {
  console.log('O número ' + a + ' é maior');
} else if (b >= a && b >= c) {
  console.log('O número ' + b + ' é maior');
} else if (c >= b && c >= a) {
  console.log('O número ' + c + ' é maior');
}