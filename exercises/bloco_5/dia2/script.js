//      Acesse o elemento elementoOndeVoceEsta .
//      Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
//      Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
//      Acesse o primeiroFilho a partir de pai .
//      Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
//      Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
//      Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
//      Agora acesse o terceiroFilho a partir de pai .


document.getElementById("elementoOndeVoceEsta");
document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "red";

document.getElementById("primeiroFilhoDoFilho").innerText = "Guilherme";

console.log(document.getElementById("pai").firstElementChild);

console.log(
  document.getElementById("elementoOndeVoceEsta").previousElementSibling
);

console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);

console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling);

console.log(
  document.getElementById("pai").firstElementChild.nextElementSibling
    .nextElementSibling
);



//    Crie um irmão para elementoOndeVoceEsta .
//    Crie um filho para elementoOndeVoceEsta .
//    Crie um filho para primeiroFilhoDoFilho .
//    A partir desse filho criado, acesse terceiroFilho .

let irmaoNome = 'Rogério';
let filhoNome = 'Lorenzo';

let euMesmo = document.getElementById('elementoOndeVoceEsta');
let pai = document.getElementById('pai');

let meuIrmao = document.createElement('div');
meuIrmao.innerHTML = irmaoNome;

let meuFilho = document.createElement('p');
meuFilho.innerText = filhoNome;

euMesmo.appendChild(meuFilho);

pai.appendChild(meuIrmao);

let neto = document.getElementById('primeiroFilhoDoFilho');
let filhoDoNetoElement = document.createElement('p');

neto.appendChild(filhoDoNetoElement).innerText = 'Xablau';
let xablau = neto.appendChild(filhoDoNetoElement)
xablau.className = 'xablau';

console.log();




// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .