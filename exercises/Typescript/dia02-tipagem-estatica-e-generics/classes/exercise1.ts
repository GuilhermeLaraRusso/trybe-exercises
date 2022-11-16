// Crie uma classe cujo objeto represente um Cachorro.

class Dog {
  name: string;
  race: string;
  size: string;
  color: string;

  constructor(name: string, race: string, size: "small" | "medium" | "large", color: string) {
    this.name = name;
    this.race = race;
    this.size = size;
    this.color = color;
  }

  bark(): void {
    console.log("Au Au");
  }
}

const dog1 = new Dog("Tuchinha", "pinscher", "small", "branca");
console.log(dog1);
dog1.bark();

