const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`)
}

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.order.pizza = {
    muzzarella:{
      amount: 1,
      price: 25,
    },
    calabresa:{
      amount: 1,
      price: 25,
    }
  }
  order.payment = 50;
  const muzzarella = Object.keys(order.order.pizza)
  console.log(`Olá ${order.name}, o total de seu pedido de ${muzzarella} e ${order.order.drinks.coke.type} é R$ ${order.payment},00`)
}

orderModifier(order);