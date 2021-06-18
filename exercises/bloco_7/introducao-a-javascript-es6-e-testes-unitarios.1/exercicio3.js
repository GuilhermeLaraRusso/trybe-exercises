// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

// function factorial (n) {
//   let resultado = 1;
//   for (let index = 1; index <= n; index += 1){
//     resultado = resultado * index;
//   }
//   return resultado
// }



const factorial = (n) => {
  let resultado = 1;
  for (let index = 1; index <= n; index += 1){
    resultado = resultado * index;
  }
  return resultado;
}

console.log(factorial(5));