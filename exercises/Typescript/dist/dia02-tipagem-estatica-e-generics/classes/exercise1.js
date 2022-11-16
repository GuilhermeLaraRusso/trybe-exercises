"use strict";
// Crie uma classe cujo objeto represente um Cachorro.
class Dog {
    constructor(name, race, size, color) {
        this.name = name;
        this.race = race;
        this.size = size;
        this.color = color;
    }
    bark() {
        console.log("Au Au");
    }
}
const dog1 = new Dog("Tuchinha", "pinscher", "small", "branca");
console.log(dog1);
dog1.bark();
