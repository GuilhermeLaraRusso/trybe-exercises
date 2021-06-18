// Crie uma função que receba uma frase e retorne qual a maior palavra.

const findLongestWord = (word) => {
  let wordSplit = word.split(' ');
  let longestWord = 0;
  let charCount = 0;
  for (let index = 0; index < wordSplit.length; index += 1){
    if (wordSplit[index].length > charCount){
      // console.log(wordSplit[index]);
      charCount = wordSplit[index].length;
      longestWord = wordSplit[index];
    }
  }
  // console.log(wordSplit);
  return longestWord;
}

console.log(findLongestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))