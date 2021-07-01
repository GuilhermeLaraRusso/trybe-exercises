const users = [
  { firstName: "Homer", lastName: "Simpson", isDriver: true },
  { firstName: "Marge", lastName: "Simpson", isDriver: true },
  { firstName: "Bart", lastName: "Simpson", isDriver: true },
  { firstName: "Lisa", lastName: "Simpson", isDriver: true },
  { firstName: "Maggie", lastName: "Simpson", isDriver: true },
];

const canAllDrive = users.every((user, index, array) => {
  return user.isDriver === true;
})

console.log(canAllDrive);