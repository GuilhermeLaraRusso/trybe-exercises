// Para fixar:
// Que tal exercitar a sintaxe um pouco, com um breve exercício bem simples? Juro que parece muita coisa, mas não é!

// Crie uma classe chamada Superclass.

// A Superclass deve possuir um atributo público isSuper

// isSuper deve ser setado como true na inicialização.

// A Superclass deve possuir um método público chamado sayHello, que deve imprimir “Olá mundo!”.

// Crie uma classe chamada Subclass que herda da Superclass.

// Crie uma função myFunc fora do escopo da Subclass que recebe um objeto da Superclass.

// Dentro dessa função, chame o método sayHello do objeto passado como parâmetro.
// Crie um objeto da Superclass e outro da Subclass.

// Chame a função myFunc 2 vezes, passando os objetos criados.

// Vamos agora a alguns tópicos um pouco mais avançados, atributos protegidos e o uso do super.

class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  };

  public sayHello() {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

function myFunc(obj: Superclass) {
  obj.sayHello();
  console.log(obj.isSuper ? "É super" : "Não é super");
}

const superObj = new Superclass();
const subObj = new Subclass();

myFunc(superObj);
myFunc(subObj);

