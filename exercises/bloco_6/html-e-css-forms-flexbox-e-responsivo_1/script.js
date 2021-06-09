function previnir(event) {
  document.getElementById('enviar')
  event.preventDefault();
}

const button = document.getElementById('enviar');
button.addEventListener('click', previnir);