// Depois, faça uma pirâmide com n asteriscos de base:

let n = 10;

let row = '';
let empty = ' ';
let asterisco = '*';
let mid = Math.ceil(n/2);
let count;


// Declarar a string inicial

for (index = 0; index < n; index += 1) {
  if (index % 2 !== 0){
    count = n - index/2;
    row = empty.repeat(count) + asterisco.repeat(index);
    console.log(row);
  }
}



