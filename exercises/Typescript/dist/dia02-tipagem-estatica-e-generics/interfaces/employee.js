"use strict";
let employee = {
    firstName: "John",
    lastName: "Doe",
    fullName() {
        return this.firstName + " " + this.lastName;
    },
};
;
let teacher = {
    firstName: "John",
    lastName: "Doe",
    subject: "Matemática",
    fullName() {
        return this.firstName + " " + this.lastName;
    },
    sayHello() {
        return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
    }
};
