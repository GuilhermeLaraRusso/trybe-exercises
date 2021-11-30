const readline = require('readline-sync');


const peso = readline.questionInt("Qual seu peso? ");
const altura = readline.questionFloat("Qual sua altura? ");

const imc = (peso, altura) => {
  return (peso / Math.pow(altura, 2)).toFixed(1)
};

const resultadoImc = imc(peso, altura);

if (resultadoImc < 18.5) {
  console.log(`Seu IMC é ${resultadoImc}. Você está abaixo do peso`)
}
if (resultadoImc >= 18.5 && resultadoImc <= 24.9) {
  console.log(`Seu IMC é ${resultadoImc}. Você está com peso normal`)
}
if (resultadoImc >= 25 && resultadoImc <= 29.9) {
  console.log(`Seu IMC é ${resultadoImc}. Você está acima do peso`)
}
if (resultadoImc >= 30 && resultadoImc <= 34.9) {
  console.log(`Seu IMC é ${resultadoImc}. Você está com obesidade grau I`)
}
if (resultadoImc >= 35 && resultadoImc <= 39.9) {
  console.log(`Seu IMC é ${resultadoImc}. Você está com obesidade grau II`)
}
if (resultadoImc >= 40) {
  console.log(`Seu IMC é ${resultadoImc}. Você está com obesidade Graus III e IV`)
}

