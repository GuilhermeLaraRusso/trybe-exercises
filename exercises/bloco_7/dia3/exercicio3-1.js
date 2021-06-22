const assert = require('assert');

const greetPeople = (people) => {
  let arrayOfPeople = []
  
  for (let index = 0; index < people.length; index += 1) {
    let greeting = 'Hello ';
    greeting += people[index];
    arrayOfPeople.push(greeting);
  }
  return arrayOfPeople;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(greetPeople(parameter), result);