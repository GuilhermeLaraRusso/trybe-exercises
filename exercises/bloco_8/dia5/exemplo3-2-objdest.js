const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const {a: name, b: classAssigned, c: subject} = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática


// Nesse exemplo, informamos qual a propriedade que gostaríamos de acessar e a declaramos em uma nova variável seguindo a sintaxe: { propriedade:nomeVariável } = objeto