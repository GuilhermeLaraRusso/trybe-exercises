// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const split = names.reduce((accumulator, name) => {
    let splitName = name.toLowerCase().split('');
    let splitName1 = splitName.filter((name) => {
      return name === 'a';
    })
    accumulator += splitName1.length;
    return accumulator;
  }, 0);
  return split;
}

assert.deepStrictEqual(containsA(), 20);