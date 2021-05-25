// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

function arrayOfNumbers(vector) { 
  let evenVector = [];
  let number;
  for (index = 0; index < vector.length; index += 1){
    for (index2 = 0; index2 < vector[index].length; index2 += 1){
      if (vector[index][index2] % 2 === 0) {
        number = vector[index][index2];
        evenVector.push(number);
      }
    }
  }
  return evenVector;
}

let vetorTeste= [[1, 2], [3,4,5,6], [7,8,9,10]];
console.log(arrayOfNumbers(vetorTeste));

// console.log(vetorTeste[1][0]);

// console.table(vetorTeste);