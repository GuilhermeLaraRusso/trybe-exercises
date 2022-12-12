class Animal {
  /*  
    Ao invés de declarar os atributos antes do construtor, receber parâmetros
    no construtor e colocá-los nos atributos da classe, se não formos
    validar, podemos utilizar uma forma simplificada de escrita, simplesmente
    colocando o modificador de visibilidade na frente
    do nome do parâmetro no construtor

    Exemplo
    O seguinte código:

    public x: number
    constructor(x: number) { this.x = x }

    Pode ser substituído por:

    constructor(public x: number) { }
    
    Obs: Usando essa sintaxe é necessário indicar explicitamente 
    logo antes do nome do atributo se ele é public, private, protected ou readonly
  */

    constructor(public name: string, protected birthDate: Date) { }

    get age() {
      /* 
      Para operar com datas, vamos operar somente com milissegundos. Uma
      data é o número de milissegundos desde o dia 01/01/1970 (era Unix)
      */ 
     const timeDiff = Math.abs(
        Date.now() - new Date(this.birthDate).getTime()
     )

     return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
}

class Mammal extends Animal {
  walk() {
    console.log(`${this.name} is walking...`)
  }
}

class Bird extends Animal {
  fly() {
    console.log(`${this.name} is flying...`)
  }
  showBirthDate() {
    console.log(this.birthDate)
  }
}

const tiger = new Mammal(
  'Tiger', new Date(Date.parse('May 03, 2020')),
)

const parrot = new Bird(
  'Papagaio',
  new Date(Date.parse('Jun 07, 2017')),
)

const main = (animal: Animal) => {
  console.log(animal.age);
  // A função main, porém, só entende um objeto do tipo Animal. Por isso ela não consegue acessar nada restrito ao subtipo Mammal (também conhecida como classe filha ou subclasse)!
  // Você vai obter um erro que diz “a propriedade ‘walk’ não existe no tipo Animal“.
  // animal.walk();
}

main(tiger)
tiger.walk();

console.log(parrot.age);
parrot.fly();
parrot.showBirthDate();