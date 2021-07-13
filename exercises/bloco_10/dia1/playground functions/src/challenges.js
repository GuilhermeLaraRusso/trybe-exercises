// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let lastItem = array[array.length - 1];
  let firstItem = array[0];
  return lastItem + ', ' + firstItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + (1 * ties);
}

// Desafio 6
function highestCount(array) {
  let highestNumber = 0;
  let sortedArray = array.sort();
  let lastItem = sortedArray[sortedArray.length -1];
  for (let index = 0; index < sortedArray.length; index += 1){
    if(lastItem < 0){
      lastItem = sortedArray[0];
    }
    if (lastItem === sortedArray[index]){
      highestNumber = highestNumber + 1;
    }
  }
  console.log(sortedArray);
  console.log(lastItem);
  return highestNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1 = Math.abs(cat1 - mouse);
  let mouseCat2 = Math.abs(cat2 - mouse);
  if (mouseCat1 < mouseCat2){
    return 'cat1';
  } else if (mouseCat1 > mouseCat2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayFizz = [];
  for (let index = 0; index < array.length; index +=1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0){
      arrayFizz.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      arrayFizz.push('fizz');
    } else if (array[index] % 5 === 0) {
      arrayFizz.push('buzz');
    } else {
      arrayFizz.push('bug!');
    }
  }
  return arrayFizz;
}

// Desafio 9
function encode(string) {
  let palavraEncodada = '';
  for (letter of string) {
    if (letter === 'a') {
      letter = '1';
    } else if (letter === 'e') {
      letter = '2';
    } else if (letter === 'i') {
      letter = '3';
    } else if (letter === 'o') {
      letter = '4';
    } else if (letter === 'u') {
      letter = '5';
    }
    palavraEncodada = palavraEncodada + letter;
  }
  return palavraEncodada;
}

function decode(string) {
  let palavraDecodada = '';
  for (letter of string) {
    if (letter === '1') {
      letter = 'a';
    } else if (letter === '2') {
      letter = 'e';
    } else if (letter === '3') {
      letter = 'i';
    } else if (letter === '4') {
      letter = 'o';
    } else if (letter === '5') {
      letter = 'u';
    }
    palavraDecodada = palavraDecodada + letter;
  }
  return palavraDecodada;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
