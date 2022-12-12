interface Person {
  name: string,
  info: string,
}

class Student implements Person {
  constructor (
    public name: string,
    public school: string,
  ) { }

  get info() {
    return `${this.name} goes to ${this.school}`;
  }
}

class Professor implements Person {
  constructor (
    public name: string,
    public school: string,
    public subject: string,
  ) { }

  get info() {
    return `${this.name} teaches ${this.subject} at ${this.school}`;
  }
}

function printInfo(person: Person) {
  console.log(person.info);
}

const student = new Student('John', 'MIT');
const professor = new Professor('Jane', 'MIT', 'Math');

printInfo(student);
printInfo(professor);