const readline = require("readline-sync");

const velocidadeMedia = (distancia, tempo) => {
  return distancia / tempo
}

const distancia = readline.questionInt("Digite a distancia em metros: ");
const tempo = readline.questionInt("Digite o tempo em segundos: ");

const velocidade = velocidadeMedia(distancia, tempo)

console.log(`A velocidade média é ${velocidade} m/s`);