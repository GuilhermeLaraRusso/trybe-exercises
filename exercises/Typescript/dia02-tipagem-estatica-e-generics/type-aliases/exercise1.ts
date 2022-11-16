// Crie um type para um objeto que represente um pássaro.
type Bird = {
  name: string;
  canFly: string;
  featherColor: string[];
};

function printBird(bd: Bird) {
  console.log(`O pássaro ${bd.name} pode voar? ${bd.canFly}`)
  console.log(`Suas cores normalmente são: ${bd.featherColor}`)
}

printBird({name: 'Galinha', canFly: 'no', featherColor: ['branca', 'marrom']})


// Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.
type Sum = (x: number, y: number) => number;

// Crie um type para um objeto que represente um endereço.
type Address = {
  publicPlace: string;
  number: number;
  district: string;
  city: string;
  state: string;
}