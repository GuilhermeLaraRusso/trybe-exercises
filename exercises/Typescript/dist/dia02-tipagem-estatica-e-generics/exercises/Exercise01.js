"use strict";
// Exercício 1
// Crie uma classe Car cujo objeto representará um carro.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
// Propriedades:
// Deve conter uma propriedade do tipo string chamada brand que representa a marca.
// Deve conter uma propriedade do tipo string chamada color que representa a cor.
// Deve conter uma propriedade do tipo number chamada doors que representa a quantidade de portas.
// Comportamentos:
// Deve conter um método chamado honk que aciona a buzina do carro.
// Deve possuir um método chamado turnOn que liga o carro.
// Deve possuir um método chamado turnOff que desliga o carro.
// Deve possuir um método chamado speedUp que acelera o carro.
// Deve possuir um método chamado speedDown que reduz a velocidade do carro.
// Deve possuir um método chamado stop que para o carro.
// Deve possuir um método chamado turn que recebe uma direção do tipo string e vira o carro.
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log('Buzina');
    }
    ;
    turnOn() {
        console.log('Carro ligado');
    }
    ;
    turnOff() {
        console.log('Carro desligado');
    }
    ;
    speedUp() {
        console.log('Aumentando a velocidade');
    }
    ;
    speedDown() {
        console.log('Reduzindo a velocidade');
    }
    ;
    stop() {
        console.log('Parado');
    }
    ;
    turn(direction) {
        console.log(`Virando para a ${direction}`);
    }
    ;
}
exports.Car = Car;
