// Agora que você já sabe a diferença entre eles e como usá-los, vamos praticar?
// Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge'
};

for (key in names){
  console.log('Olá ' + names[key])
};

