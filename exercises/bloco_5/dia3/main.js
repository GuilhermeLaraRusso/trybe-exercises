const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
1. Copie esse arquivo e edite apenas ele;

2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';

4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?

5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.





// função para criar a classe tech

function createTech(originEvent) {
  console.log(originEvent.target);

  // Remove a classe tech existente
  let techClassToDelete = document.querySelector('.tech');
  techClassToDelete.classList.remove('tech');
  
  // Adiciona uma nova classe tech
  let techClassToAdd = originEvent.target;
  techClassToAdd.classList.add('tech');
}

// Criando variável para receber o clickDiv
let clickDiv = document.querySelector('div');

// Executando o addEventListener
clickDiv.addEventListener('click', createTech);

// Função para quando digitar, alterar o texto da classe tech
function alteraTech(){
  let myText = 'teste';
  document.querySelector('tech').innerText = myText;
  console.log(myText);
}

//quando apertar enter na id 'input', o texto da classe tech terá de ser alterado para o valor digitado!
let pressEnter = document.getElementById('input');
pressEnter.addEventListener('keyup', alteraTech)

divDois.addEventListener('dblclick', resetText);

// função para redirecionar a id myspotrybefy para o portifólio
function redirect(originEvent){
  let redireciona = originEvent.target;
  window.open('https://guilhermelararusso.github.io/', '_blank')
}

// eventListener para dblclick
let dblClick = document.getElementById('mySpotrybefy');
dblClick.addEventListener('dblclick', redirect);