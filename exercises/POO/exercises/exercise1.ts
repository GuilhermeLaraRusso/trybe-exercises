// Exercício 1: Vamos modelar algumas partes de um software de uma escola. 
// Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas 
// em uma disciplina. Cada objeto dessa classe deve conter os seguintes 
// dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

// Exercício 2: Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. 
// Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante
//  e outro que calcula a média das notas da pessoa estudante.

class Students {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _paperGrades: number[];

  constructor(enrollment: string, name: string) {
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades = [];
    this._paperGrades = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(newEnrollment: string) {
    this._enrollment = newEnrollment;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error ('Name must have at least 3 characters');
    }

    this._name = newName;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(newExamsGrades: number[]) {
    if (newExamsGrades.length > 4) {
      throw new Error ('Student can only have 4 exams');
    }

    this._examsGrades = newExamsGrades;
  }

  get paperGrades(): number[] {
    return this._paperGrades;
  }

  set paperGrades(newPaperGrades: number[]) {
    if (newPaperGrades.length > 2) {
      throw new Error ('Student can only have 2 papers');
    }

    this._paperGrades = newPaperGrades;
  }

  sumGrades(): number {
    return [...this.examsGrades, ...this.paperGrades].reduce((acc, curr) => acc + curr, 0);
  }

  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this.examsGrades.length + this.paperGrades.length;

    return Math.round(sumGrades / divider);
  }

}

// Para testar

const personOne = new Students('202001011', 'Maria da Silva');

personOne.examsGrades = [25, 20, 23, 23];
personOne.paperGrades = [45, 45];

console.log(personOne);
console.log('Soma de todas as notas: ', personOne.sumGrades());
console.log('Média de todas as notas: ', personOne.sumAverageGrade());