document.querySelector('#header-container').style.backgroundColor = 'lightgreen';
document.querySelector('.emergency-tasks').style.backgroundColor = 'salmon';

for (let index = 0; index < 2; index += 1){
  document.querySelectorAll('.emergency-tasks h3')[index].style.backgroundColor = 'magenta';
}

document.querySelector('.no-emergency-tasks').style.backgroundColor = 'yellow';

for (let index = 0; index < 2; index += 1){
  document.querySelectorAll('.no-emergency-tasks h3')[index].style.backgroundColor = 'black';
}

document.querySelector('footer').style.backgroundColor = 'darkgreen'