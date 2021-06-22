const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
console.log(myRemove([1, 2, 3, 4], 3));

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// Verifique se o array passado por parâmetro não sofreu alterações
const array = [1, 2, 3, 4];
myRemove(array);
assert.deepEqual(array, [1, 2, 3, 4]);

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);