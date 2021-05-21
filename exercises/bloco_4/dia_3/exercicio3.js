// 3- Agora inverta o lado do triângulo. Por exemplo:

let n = 10;


// fazer os espaços vazios

let empty = '';
for (indexVazio = 0; indexVazio < n; indexVazio += 1) {
  empty = empty + ' ';
}

// fazer a linha igual a 'n' vezes asterisco

let line = '';

for (index = 0; index < n; index += 1) {
  line = line + '*';
  empty = empty.slice(1);
    console.log(empty + line);

}
