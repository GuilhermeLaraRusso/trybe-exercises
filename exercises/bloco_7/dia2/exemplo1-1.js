// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

function newObject (obj, key, value) {
  let objeto = obj;
  let chave = key;
  let valor = value;
  objeto = {};
  objeto[chave] = valor;
  return objeto
}

console.log(newObject('customer', 'nome', 'guilherme'));