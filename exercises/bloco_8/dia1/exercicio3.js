// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const funcaoChecar = (arrayGabarito, arrayResposta) => {
  let total = 0;
  for (let index = 0; index < arrayGabarito.length; index += 1){
    if (arrayResposta[index] === arrayGabarito[index]){
      total += 1;
    } else if (arrayResposta[index] === 'N.A') {
      total = total;
    } else {
      total -= 0.5;
    }
  }
  console.log(`Sua nota na prova foi: ${total}/${arrayGabarito.length}`);
}

const comparaNumeros = (gabarito, resposta, action) => {
  action(gabarito, resposta)
}

comparaNumeros(rightAnswers, studentAnswers, funcaoChecar);
