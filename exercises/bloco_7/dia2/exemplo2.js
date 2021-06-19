const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

function returnObject(student) {
  const arrayOfSkills = Object.keys(student)
  for (keys in arrayOfSkills){
    console.log(`${arrayOfSkills[keys]}, Nivel: ${student[arrayOfSkills[keys]]}`)
  }
}

console.log('Estudante 1:');
returnObject(student1);

console.log('\nEstudante 2:');
returnObject(student2);
