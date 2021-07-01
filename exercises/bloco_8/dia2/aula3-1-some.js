const users = [
  { firstName: "Homer", lastName: "Simpson", isDriver: true },
  { firstName: "Marge", lastName: "Simpson", isDriver: true },
  { firstName: "Bart", lastName: "Simpson", isDriver: false },
  { firstName: "Lisa", lastName: "Simpson", isDriver: false },
  { firstName: "Maggie", lastName: "Simpson", isDriver: false },
];

// Via FOR
// let isThereAnyoneThatDontDrive = false;
// for (user of users) {
//   if (user.isDriver === false) {
//     isThereAnyoneThatDontDrive = true;
//     break;
//   }
// }

// console.log(`Existe alguém quem não sabe dirigir? ${isThereAnyoneThatDontDrive}`)

// Via SOME

const isThereAnyoneThatDontDrive = users.some((user, index, array) => user.isDriver === false)

console.log(`Existe alguém quem não sabe dirigir? ${isThereAnyoneThatDontDrive}`)