// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function biggestName(arrayOfNames) {
  let mostLetters = 0;
  for (let index = 0; index < arrayOfNames.length - 1; index += 1){
    if (arrayOfNames[mostLetters].length > arrayOfNames[index+1].length) {
      mostLetters = mostLetters;
    } else {
      mostLetters = index + 1;
    }
  }
  return arrayOfNames[mostLetters];
}

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(biggestName(nomes))