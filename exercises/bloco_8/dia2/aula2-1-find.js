const users = [
  { firstName: "Homer", lastName: "Simpson", isDriver: true },
  { firstName: "Marge", lastName: "Simpson", isDriver: true },
  { firstName: "Bart", lastName: "Simpson", isDriver: false },
  { firstName: "Lisa", lastName: "Simpson", isDriver: false },
  { firstName: "Maggie", lastName: "Simpson", isDriver: false },
];

// Utilizando o FOR of

// let firstUserThatDontDrive;

// for (user of users) {
//   if (user.isDriver === false) {
//     firstUserThatDontDrive = user;
//     break;
//   }
// }
// console.log(`O primeiro usuário que não pode dirigir é: ${user.firstName} ${user.lastName}`);

// Utilizando FIND

const firstUserThatDontDrive = users.find((user, index, array) => {
  // Eu tenho OBRIGATORIAMENTE que retornar a regra de negócio para encontrar o Primeiro elemento que corresopnde à regra
  return user.isDriver === false;
})

console.log(firstUserThatDontDrive);