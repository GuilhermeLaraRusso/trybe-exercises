// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0];

for (let index = 0; index < numbers.length - 1; index += 1){
  if (maiorNumero > numbers[index+1]) {
    maiorNumero = maiorNumero;
  } else {
    maiorNumero = numbers[index+1];
  }
}

console.log(maiorNumero);