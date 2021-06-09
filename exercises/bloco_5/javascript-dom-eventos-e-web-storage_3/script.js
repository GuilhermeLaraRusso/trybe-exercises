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

// Exercício 2 - criando o botão feriado 
let button = document.createElement('button');

// Adicionando o conteúdo do botão
button.textContent = 'Feriados';

// Adicionado o id do botão
button.id = 'btn-holiday';

// Adicionando o botão como filho do buttons-container
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


// Exercício - 4
// Criando o botão sexta feira
let buttonFriday = document.createElement('button');
buttonFriday.textContent = 'Sexta-feira';
buttonFriday.id = 'btn-friday';
document.querySelector('.buttons-container').appendChild(buttonFriday);


//Exercício 5
//Adicionando a função para modificar os textos das sextas feiras
function sextou() {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let sextou = document.getElementsByClassName('friday')[index];
    if(sextou.innerText !== 'SEXTOU!') {
      sextou.innerText = 'SEXTOU!';
    } else {
      sextou.innerText = index;
    }
  }  
}

// Adicionando o evento de btnclick
let clickFridayButton = document.querySelector('#btn-friday');
clickFridayButton.addEventListener('click', sextou);