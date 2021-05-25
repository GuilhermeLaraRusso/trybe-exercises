// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

function somaNumeros(numeroInteiro) {
  let number = 0;
  for (index = 0; index <= numeroInteiro; index += 1){
    number = number + index;
  }
  return number;
}

console.log(somaNumeros(100));