function previnir(event) {
  document.getElementById('enviar')
  event.preventDefault();
}

const button = document.getElementById('enviar');
button.addEventListener('click', previnir);


// função inicial para introduzir todas as outras funções
function Init(){
  let nameEvent = document.getElementById('nome');
  nameEvent.addEventListener('keypress', checkName, false);

  let emailEvent = document.getElementById('email');
  emailEvent.addEventListener('keypress', checkEmail);

  let cpfEvent = document.getElementById('cpf');
  cpfEvent.addEventListener('keypress', checkCPF);

  let adressEvent = document.getElementById('adress');
  adressEvent.addEventListener('keypress',checkAdress);
}




// Função para chegar o nome
function checkName(event) {
  let charCode = event.charCode;
  let fullName = document.getElementById('nome').value;
  if (charCode != 0) {
    if(charCode < 65 || charCode > 122) {
      event.preventDefault();
      alert('O nome deve conter apenas letras')
    }
    if(fullName.length > 40){
      event.preventDefault();
      alert('O nome deve conter no máximo 40 caracteres');    }
  }
}

function checkEmail(event) {
  let email = document.getElementById('email').value;
  if (email.length > 50) {
    event.preventDefault();
    alert('alerta')
  }
}

function checkCPF(event) {
  let charCode = event.charCode;
  let cpf = document.getElementById('cpf').value;
  if (charCode < 48 || charCode > 58) {
    event.preventDefault();
    alert('CPF deve conter apenas números');
  }
  if (cpf.length > 11) {
    event.preventDefault();
    alert('CPF deve conter apenas 11 caracteres');
  }
}

function checkAdress(event) {
  let charCode = event.charCode;
  let adress = document.getElementById('adress').value;
  if (adress.length > 200) {
    event.preventDefault();
    alert('Endereço deve conter no máximo 200 caracteres');
  }
}

