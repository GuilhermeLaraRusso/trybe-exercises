// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

let a = 50;
let b = 80;
let c = 50;

let triangulo;

if (a + b + c === 180) {
  triangulo = true;
} else {
  triangulo = false;
}

if (a <= 0 || b <= 0 || c <= 0) {
  console.log("Um dos ângulos é inválido!")
}

console.log(triangulo)