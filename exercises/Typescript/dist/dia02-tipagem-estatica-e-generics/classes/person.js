"use strict";
// usamos a palavra reservada class para definir uma classe
class Person {
    constructor(name, birthDate, age) {
        // usamos o this para acessar as propriedades da instância da classe,
        // ele representa a própria instância que estamos criando
        // atribuímos o valor do parâmetro recebido a propriedade da instância da classe
        this.name = name;
        this.birthDate = birthDate;
        this.age = age;
    }
    speak() {
        console.log(`${this.name} está falando.`);
    }
    ;
    eat() {
        console.log(`${this.name} está comendo.`);
    }
    ;
    walk() {
        console.log(`${this.name} está andando.`);
    }
    ;
}
const person1 = new Person("Jane Doe", new Date("1986-01-01"), 27);
const person2 = new Person("Jon Doe", new Date("1980-08-05"), 42);
console.log(person1);
person1.speak();
console.log(person2);
person2.walk();
