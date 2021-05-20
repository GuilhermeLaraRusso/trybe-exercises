// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let newArray = [];
let arrayDividido = [];

for (index = 1; index <= 25; index += 1) {
  newArray.push(index);
}

for (indexDivisao = 0; indexDivisao < newArray.length; indexDivisao += 1) {
  arrayDividido[indexDivisao] = newArray[indexDivisao] / 2;
}

console.log(arrayDividido);