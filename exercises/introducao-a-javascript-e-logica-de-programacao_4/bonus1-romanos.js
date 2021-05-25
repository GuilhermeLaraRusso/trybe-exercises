// (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dicas:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:
// Copiar
// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |
// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

function calcularRomano(string) {
  let romanoArray = string.split("");
  let numeral = 0;
  for (index = 0; index < romanoArray.length; index += 1) {
    if (
      romanoArray[index] === "I" &&
      (romanoArray[index + 1] === "V" ||
        romanoArray[index + 1] === "X" ||
        romanoArray[index + 1] === "L" ||
        romanoArray[index + 1] === "C" ||
        romanoArray[index + 1] === "D" ||
        romanoArray[index + 1] === "M")
    ) {
      numeral = numeral - 1;
    } else if (romanoArray[index] === "I") {
      numeral = numeral + 1;
    } else if (romanoArray[index] === "V") {
      numeral = numeral + 5;
    } else if (
      romanoArray[index] === "X" &&
      (romanoArray[index + 1] === "L" ||
        romanoArray[index + 1] === "C" ||
        romanoArray[index + 1] === "D" ||
        romanoArray[index + 1] === "M")
    ) {
      numeral = numeral - 10;
    } else if (romanoArray[index] === "X") {
      numeral = numeral + 10;
    } else if (romanoArray[index] === "L") {
      numeral = numeral + 50;
    } else if (
      romanoArray[index] === "C" &&
      (romanoArray[index + 1] === "D" || romanoArray[index + 1] === "M")
    ) {
      numeral = numeral - 100;
    } else if (romanoArray[index] === "C") {
      numeral = numeral + 100;
    } else if (romanoArray[index] === "D") {
      numeral = numeral + 500;
    } else if (romanoArray[index] === "M") {
      numeral = numeral + 1000;
    } else {
      return 'O input não é um numeral romano!'
    }
  }

  return numeral;
}

console.log(calcularRomano("MMXXI"));
