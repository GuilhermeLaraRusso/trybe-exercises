const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (arrayOfWords, word) => {
  let number = -1;
  for (let index = 0; index < arrayOfWords.length; index += 1) {
    if (arrayOfWords[index] === word) {
      number = index;
    }
  }
  return number;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);