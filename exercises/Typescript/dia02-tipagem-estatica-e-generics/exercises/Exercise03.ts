// Exercício 3
// Crie uma interface que represente uma pizza. Ela deve conter:

// Uma propriedade do tipo string chamada flavor que representa o sabor.
// Uma propriedade chamada slices cujo tipo é a união entre os possíveis números de fatias da pizza.
// O número de fatias pode ser 4, 6 ou 8;
// Utilize um type alias para armazenar o tipo dessa propriedade.
// a) Crie uma pizza sabor Calabresa de 8 fatias;

// b) Crie uma pizza sabor Marguerita de 6 fatias;

// c) Crie uma pizza sabor Nutela de 4 fatias.

type Slices = 4 | 6 | 8;

export interface Pizza {
  flavor: string;
  slices: Slices;
};

const calabresa: Pizza = {
  flavor: 'calabresa',
  slices: 8
}

console.log(calabresa);

const marguerita: Pizza = {
  flavor: 'marguerita',
  slices: 6
}

console.log(marguerita);

const nutella: Pizza = {
  flavor: 'nutella',
  slices: 4
}

console.log(nutella);
