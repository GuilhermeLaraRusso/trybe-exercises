const person = {
  name: 'Jéssica',
  lastName: 'Naiara',

  greet: function(colleague, callback) {
    if (callback === undefined) {
      console.group('Olá');
    } else {
      console.log(callback(colleague));
    }
  }
}

function formalGreeting(colleague) {
  return `Olá, ${colleague} tudo bem? Espero que esteja.`;
}
function badMoodGreeting() {
  return 'Oi'
}
function loveGreeting() {
  return 'Olá minha querida pessoa!';
}

(person.greet('Guilherme', formalGreeting));
(person.greet('Guilherme', badMoodGreeting));
(person.greet('Guilherme', loveGreeting));
person.greet();
