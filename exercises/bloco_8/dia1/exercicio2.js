// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const sorteio = () => {
  return Math.floor(Math.random() * 5) + 1;
}

const numero = () => {
  return Math.floor(Math.random() * 5) + 1;
}

const comparaNumeros = (sorteio, numero) => {
  console.log(`Número sorteado: ${sorteio}`);
  console.log(`Número jogado: ${numero}`);
  if (sorteio === numero) {
    return 'Parabens'
  } else {
    return 'Loser'
  }
}

console.log(comparaNumeros(sorteio(), numero()));