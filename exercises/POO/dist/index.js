"use strict";
class Person {
    constructor(name, height, weight) {
        console.log(`Creating a new person: ${name}`);
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
    sleep() {
        console.log(`${this.name}: zzzzzzzzzz`);
    }
}
const p1 = new Person('Maria', 171, 58);
const p2 = new Person('João', 180, 80);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();
