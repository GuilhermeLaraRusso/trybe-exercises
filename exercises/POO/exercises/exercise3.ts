// Exercício 3: Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido.

// A pessoa cliente deverá conter o nome;
// O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;
// O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.

// Exercício 4: Agora vamos adicionar às nossas classes do exercício anterior os comportamentos.
// A classe que representa o pedido deverá ter dois métodos: um que calcula o total do
// pedido e outro que calcula o total aplicando o valor de desconto.

class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error ('Name must have at least 3 characters');
    };

    this._name = newName;
  }
}

class OrderItem {
  private _name: string;
  private _price: number;
  
  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error ('Name must have at least 3 characters');
    };

    this._name = newName;
  }

  get price(): number {
    return this._price;
  }

  set price(newPrice: number) {
    if (newPrice < 0) {
      throw new Error ('Price must be greater than 0');
    };

    this._price = newPrice;
  }
}

class Order {
  private _client: Client;
  private _orderItems: OrderItem[];
  private _paymentMethod: string;
  private _discount: number;

  constructor(client: Client, orderItems: OrderItem[], paymentMethod: string, discount: number) {
    this._client = client;
    this._orderItems = orderItems;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  get client(): Client {
    return this._client;
  }

  set client(newClient: Client) {
    this._client = newClient;
  }

  get orderItems(): OrderItem[] {
    return this._orderItems;
  }

  set orderItems(newOrderItems: OrderItem[]) {
    if (newOrderItems.length < 1) {
      throw new Error ('Order must have at least 1 item');
    };
    this._orderItems = newOrderItems;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(newPaymentMethod: string) {
    this._paymentMethod = newPaymentMethod;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(newDiscount: number) {
    if (newDiscount < 0) {
      throw new Error ('Discount must be greater than 0');
    }

    this._discount = newDiscount;
  }

  calculateTotal(): number {
    return this.orderItems.reduce((total, orderItem) => total + orderItem.price, 0);
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this.discount);
  }

}

// para testar

const client1 = new Client('João');

const batataFrita = new OrderItem('Batata frita', 10);
const acai = new OrderItem('Açaí', 15);
const cocaCola = new OrderItem('Coca-cola', 5);
const sandwich = new OrderItem('Sanduíche', 20);

const order1 = new Order(client1, [batataFrita, acai, cocaCola, sandwich], 'cartão', 0.1);

console.log(order1);
console.log('Valor normal: ', order1.calculateTotal());
console.log('Valor com desconto: ', order1.calculateTotalWithDiscount());