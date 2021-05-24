// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

function lowestArrayValue (array) {
  let menorNumero = array[0];
  for (let index = 0; index < array.length - 1; index += 1){
    if (menorNumero < array[index+1]) {
      menorNumero = menorNumero;
    } else {
      menorNumero = array[index+1];
    }
  }
  return menorNumero;
}

console.log(lowestArrayValue([2, 4, 6, 7, 10, 0, -3]))