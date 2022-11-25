export class Person {
  name: string;
  private _weight: number;
  private _age: number;
  readonly height: number;

  constructor(name: string, height: number, weight: number, age: number) {
    this.name = name;
    this.height = height;
    this._weight = weight;
    this._age = age;
  }

  // esta sintaxe permite acessar o valor retornado via person.getWeight()
  getWeight() {
    return this._weight;
  }

  // esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
  get age() {
    return this._age;
  }

  // do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
  // mesmo que esteja ocorrendo uma validação internamente

  set age(newValue: number) {
    if (newValue >= 0 && newValue <= 200) {
      this._age = newValue;
    }
  }

  birthday() {
    this._age += 1;
  }
}

const p1 = new Person('Maria', 171, 58, 19);
const p2 = new Person('João', 175, 66, 18);

// Alteração direta da variável pública
p1.name = 'Mariazinha';

// Acesso direto a variável pública
console.log(p1.name);

// Acesso a método público que manipula atributo privado
console.log(p1.getWeight());

// Acesso a método com getter para manipular atributo privado como se fosse público
console.log(p2.age);

// Acesso a método púiblico que manipula atributo privado
p2.birthday();
console.log(p2.age);

// Acesso a método ccom setter para manipular atributo privado como se fosse público
p2.age = 17;
console.log(p2.age);

// Leotura de atributo readonly
console.log(p1.height);

// a idade da pessoa p2 continua sendo 17, pois a valodação no set age impede que existam pessoas com 300 anos de idade
p2.age = 300;
console.log(p2.age);

// Acesso externo à classe a atrobuto privado
p1._weight;
p1._weight = 1;

// Acesso a atributo inexistente
p1.weight;
p1.weight = 1;

// Escrita em atributo readonly
p1.height = 1;