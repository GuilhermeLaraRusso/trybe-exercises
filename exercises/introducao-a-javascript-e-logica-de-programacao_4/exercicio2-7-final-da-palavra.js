// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

function verificaFimPalavra(word, ending) {
  arrayWord = word.split('');
  arrayEnding = ending.split('');
  arrayEndingFinal = ending.split('');
  let arrayComparacao = [];
  for (let index = arrayEnding.length - 1; index >= 0; index -= 1) {
    if (arrayEnding.pop(-1) === arrayWord.pop(-index)) {
      arrayComparacao.push(arrayEndingFinal[index]);
    }
  } 
  if (arrayComparacao.length === arrayEndingFinal.length) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaFimPalavra('trybe', 'be'));