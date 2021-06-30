const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];

const newNewArray = [...newArray, 7, 8, 9, ...numbers]

console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]
console.log(newNewArray)