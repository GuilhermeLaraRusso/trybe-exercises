const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

function addShift(lesson, turno, valor) {
  lesson[turno] = valor;
}

addShift(lesson2, 'turno', 'manhã');
console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function objectKeys(object) {
  return Object.keys(object)
}

console.log(objectKeys(lesson1));

// Crie uma função para mostrar o tamanho de um objeto.

function objectLength(object) {
  let length = 0;
  for (index in object){
    length += 1;
  }
  return length;
}

console.log(objectLength(lesson3));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

function objectValue (object) {
  return Object.values(object);
}

console.log(objectValue(lesson2))

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

console.log(allLessons)

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.



// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto

function getValueByNumber(lesson, index) {
  for(index in lesson){
    return lesson[index]
  }
}

console.log(getValueByNumber(lesson1, 0))

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

function verifyPair(lesson, key, value) {
  for (index in lesson){
    if (index === key && lesson[index] === value) {
      return true;
    }
  }
  return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));