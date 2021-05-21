// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let n = 5;

// fazer a linha igual a 'n' vezes asterisco

let line = '';

for (index = 0; index < n; index += 1) {
  line = line + '*';
}

// repetir a linha 'n' vezes

for (indexRepeticao = 0; indexRepeticao < n; indexRepeticao +=1) {
  console.log(line);
}