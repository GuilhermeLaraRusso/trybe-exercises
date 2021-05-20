let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
console.log(tasksList.length);

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);

tasksList.push('Fazer exercícios da Trybe'); // Adiciona no final do Array
console.log(tasksList);

tasksList.unshift('Acordar'); // Adiciona no início do Array
console.log(tasksList);

tasksList.pop(); // Remove a última tarefa
console.log(tasksList);

tasksList.shift(); // Remove a primeira tarefa
console.log(tasksList);

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);