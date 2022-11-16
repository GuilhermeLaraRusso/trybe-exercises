// Exercício 1
// Crie uma classe Car cujo objeto representará um carro.

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

export class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('Buzina');
  };

  turnOn(): void {
    console.log('Carro ligado');
  };

  turnOff(): void {
    console.log('Carro desligado');
  };

  speedUp(): void {
    console.log('Aumentando a velocidade');
  };

  speedDown(): void {
    console.log('Reduzindo a velocidade');
  };

  stop(): void {
    console.log('Parado');
  };

  turn(direction: string): void {
    console.log(`Virando para a ${direction}`);
  };
}