export class Person {
  // Atributos
  name: string;
  height: number;
  weight: number;
  
  // Métodos
  // Método constructor
  constructor(name: string, height: number, weight: number) {
    console.log(`Creating a new person: ${name}`);
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  // Método qualquer de exemplo
  sleep() {
    console.log(`${this.name}: zzzzzzzzzz`);
  }
}

// Criação dos objetos
const p1 = new Person('Maria', 171, 58);
const p2 = new Person('João', 180, 80);

//Acesso aos atributos
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);

// Acesso aos métodos
p1.sleep();
p2.sleep();