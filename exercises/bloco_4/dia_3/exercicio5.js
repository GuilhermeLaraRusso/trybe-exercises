// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:


let n = 7;

let row = '';
let empty = ' ';
let asterisco = '*';
let mid = Math.ceil(n/2);
let count;


// Declarar a string inicial
console.log(empty.repeat(n) + asterisco);

for (index = 0; index < n; index += 1) {
  if (index % 2 !== 0){
    count = n - index/2;
    row = empty.repeat(count) + asterisco + empty.repeat(index) + asterisco;
    console.log(row);
  }
}

console.log(empty.repeat(mid-1) + asterisco.repeat(n+2));