// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

function repeticaoEmArray(arrayOfNumbers) {
  let mf = 1;
  let m = 0;
  let item;
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    for (let index2 = 0; index2 < arrayOfNumbers.length; index2 += 1) {
      if (arrayOfNumbers[index] === arrayOfNumbers[index2]) {
        m += 1;
      }
      if(mf < m){
        mf = m;
        item = arrayOfNumbers[index]
      }
    }
    m = 0;
  }
  return ('O número inteiro ' + item + ' repete ' + mf + ' vezes!');
}

console.log(repeticaoEmArray([2, 3, 2, 5, 8, 2, 3]));




