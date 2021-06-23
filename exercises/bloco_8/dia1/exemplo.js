const wake = () => 'Acordando!!';

const coffee = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => func();

console.log(doingThings(wake));
console.log(doingThings(coffee));
console.log(doingThings(sleep));