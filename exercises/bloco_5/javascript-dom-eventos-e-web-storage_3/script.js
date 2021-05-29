function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.


// array com os dias do mês
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let dezDaysItems = document.querySelector('#days');

//Exercício 1 - função para criar os dias do mês como filhos lista tag ul
for (let index = 0; index < dezDaysList.length; index += 1) {
  let day = dezDaysList[index];

  let dezDaysListDia = document.createElement('li');
  dezDaysListDia.innerText = day;

  if (day === 24 || day === 25 || day === 31) {
    dezDaysItems.appendChild(dezDaysListDia).className = 'day holiday';
  } else {
    dezDaysItems.appendChild(dezDaysListDia).className = 'day';
  }
  
  if (day === 4 || day === 11 || day === 18 || day === 25) {
    dezDaysListDia.className = 'day friday';
  }

  if (day === 25) {
    dezDaysListDia.className = 'day holiday friday';
  } 
}

// Exercício 2 - criando o botão feriado e adicionando sua id e adicionando como filho do buttons-container
let button = document.createElement('button');
button.textContent = 'Feriados'
button.id = 'btn-holiday';
document.querySelector('.buttons-container').appendChild(button);


// Exercício 3
// função para alterara a cor de fundo de todos os feriados

function changeBackgroundColor () {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let feriado = document.getElementsByClassName('holiday')[index];
    if(feriado.style.backgroundColor !== 'darkgreen'){
      feriado.style.backgroundColor = 'darkgreen';
    } else {
      feriado.style.backgroundColor = '#eee';
    }
  }
}

// adicionar evento de clicar no botão

let clickButton = document.querySelector('#btn-holiday')

clickButton.addEventListener('click', changeBackgroundColor);