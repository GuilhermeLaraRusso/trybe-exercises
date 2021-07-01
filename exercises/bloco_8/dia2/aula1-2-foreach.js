const users = [
  { firstName: "Homer", lastName: "Simpson", isDriver: true },
  { firstName: "Marge", lastName: "Simpson", isDriver: true },
  { firstName: "Bart", lastName: "Simpson", isDriver: false },
  { firstName: "Lisa", lastName: "Simpson", isDriver: false },
  { firstName: "Maggie", lastName: "Simpson", isDriver: false },
];

//Utilizando o for of
for (user of users) {
  console.log(`${user.firstName} ${user.lastName} sabe dirigir? ${user.isDriver}`);
}

users.forEach((user) => {
  return console.log(`${user.firstName} ${user.lastName} sabe dirigir? ${user.isDriver}`)
})