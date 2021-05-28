// O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript , o qual deve ser inserido entre as tags <script> e </script> .
// Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:
// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
// Adicione a tag div com a classe main-content como filho da tag body ;
// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
// Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
// Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// Adicione a classe title na tag h1 criada;
// Adicione a classe description nas 3 tags h3 criadas;
// Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
// Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
// Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.



// Função para criar div

function createDiv(classe) {
  let div = document.createElement('div');
  div.className = classe;
  return div;
}

// Função para criar lista de elementos não ordenados

function createLI(element) {
  let lI = document.createElement('li');
  lI.innerText = element;
  return lI;
}

function createH3(text){
  let h3 = document.createElement('h3');
  h3.innerText = text;
  return h3
}

// Criar o container pai sendo body

let fatherContainer = document.querySelector('body');

// Criando o primeiro elemento h1

let firstH1 = document.createElement('h1');

// Adicionando o h1 ao elemento pai fatherContainer

fatherContainer.appendChild(firstH1).innerText = 'Exercício 5.2 - JavaScript DOM';

// Adicionando a div com classe main-content no body

fatherContainer.appendChild(createDiv('main-content'));

// Criando a varíavel mainContent

let mainContent = document.querySelector('.main-content');

// Adicionando o filho .center-content à mainContent

mainContent.appendChild(createDiv('center-content'));

// Criando uma variável para receber o .center-content

let centerContent = document.querySelector('.center-content')

// Adicionando o filho de Tag p da div center-content

centerContent.appendChild(document.createElement('p'));

// Criando e adicionando a div com a classe left-content 

mainContent.appendChild(createDiv('left-content'));

// Criando e adicionando a div com classe right-content

mainContent.appendChild(createDiv('right-content'));

// Criando a variável para receber o left-content

let leftContent = document.querySelector('.left-content');

// Criando a tag img

let image = document.createElement('img');

// Adicionando a source da img

image.src = 'https://picsum.photos/200';

// Adicionando a fonte da imagem

leftContent.appendChild(image);

// Criando a variável para receber o right-content

let rightContent = document.querySelector('.right-content');

// Criando uma ul

let uL = document.createElement('ul');

// Adicionando a ul no rightContent e adicionando os itens na lista

rightContent.appendChild(uL).appendChild(createLI('Um'));
rightContent.appendChild(uL).appendChild(createLI('Dois'));
rightContent.appendChild(uL).appendChild(createLI('Três'));
rightContent.appendChild(uL).appendChild(createLI('Quatro'));
rightContent.appendChild(uL).appendChild(createLI('Cinco'));
rightContent.appendChild(uL).appendChild(createLI('Seis'));
rightContent.appendChild(uL).appendChild(createLI('Sete'));
rightContent.appendChild(uL).appendChild(createLI('Oito'));
rightContent.appendChild(uL).appendChild(createLI('Nove'));
rightContent.appendChild(uL).appendChild(createLI('Dez'));

// Adicionando as tags h3

mainContent.appendChild(createH3('Primeiro'));
mainContent.appendChild(createH3('Segundo'));
mainContent.appendChild(createH3('Terceiro'));





// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// Adicione a classe title na tag h1 criada;
// Adicione a classe description nas 3 tags h3 criadas;
// Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
// Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
// Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.



// Adicionando a classe title ao h1

document.querySelector('h1').classList.add('title');

// Adicionando a classe description nas 3 tags h3

for(index = 0; index < 3; index += 1){
  document.querySelectorAll('h3')[index].classList.add('description');
};

// Removendo a div com .removeChild()

mainContent.removeChild(mainContent.childNodes[1])

// Centralizando a div right-content

document.querySelector('.right-content').style.marginRight = 'auto';

// Trocando a cor de fundo da div center-content

document.querySelector('.center-content').style.backgroundColor = 'green';

// Removendo os dois últimos elementos da lista

uL.removeChild(uL.childNodes[9]);
uL.removeChild(uL.childNodes[8]);