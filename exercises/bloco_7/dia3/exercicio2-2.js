const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (array) => {
  let newArr = [];
  let numberArr = [];
  for (let index = 0; index < array.length; index += 1) {
    newArr = array[index].split('');
    let number = 0;
    for (let jindex = 0; jindex < newArr.length; jindex += 1) {
      number += 1;
    }
    numberArr.push(number);
  }
  return numberArr;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);