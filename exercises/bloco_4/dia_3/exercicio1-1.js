// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// testando o exercício com repeat

row = '*';
n = 5;

for (index = 0; index < n; index += 1) {
  console.log(row.repeat(n));
}
