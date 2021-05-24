// Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas deixam o código mais bem escrito.
// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

// Exemplo de como inverter uma string:

// let stringToReverse = 'This is the string I want to reverse.';

// let reversedString = stringToReverse.split("").reverse().join("");

// console.log(reversedString);

function verificaPalindrome(word){
  let reversedWord = word.split("").reverse().join("");
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

console.log("A palavra 'arara' é palíndromo? " + verificaPalindrome('arara'));

console.log("A palavra 'desenvolvimento' é palíndromo? " + verificaPalindrome('desenvolvimento'));


