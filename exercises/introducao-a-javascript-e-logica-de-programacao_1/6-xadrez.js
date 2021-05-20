// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

let peca = 'Rainha';

switch (peca.toLowerCase()) {
  case 'bispo':
    console.log('A peça ' + peca + ' se movimenta na diagonal');
    break;
  case 'cavalo':
    console.log('A peça ' + peca + ' se movimenta em L');
    break;
  case 'peao':
    console.log('A peça ' + peca + ' se movimenta um espaço para frente');
    break;
  case 'torre':
    console.log('A peça ' + peca + ' se movimenta na horizontal ou vertical');
    break;
  case 'rei':
    console.log('A peça ' + peca + ' se movimenta um espaço para qualquer direção');
    break;
  case 'rainha':
    console.log('A peça ' + peca + ' se movimenta para qualquer direção');
    break;
}