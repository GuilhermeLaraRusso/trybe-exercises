// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function highestArrayValue (array) {
  let maiorNumero = array[0];
  for (let index = 0; index < array.length - 1; index += 1){
    if (maiorNumero > array[index+1]) {
      maiorNumero = maiorNumero;
    } else {
      maiorNumero = array[index+1];
    }
  }
  return maiorNumero;
}

console.log(highestArrayValue([50, 3, 6, 7, 10, 1]))
