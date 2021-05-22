let n = 10;

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

console.log(empty.repeat(mid) + asterisco.repeat(n+1));