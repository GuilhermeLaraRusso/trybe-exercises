const readline = require("readline-sync");


const numeroSorteado = () => {
  const numeroDigitado = readline.questionInt("digite um número entre 0 e 10: ");
  const randomNumber = Math.floor(Math.random() * 11);
  if (randomNumber === numeroDigitado) {
    console.log("parabens")
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
    const resposta = readline.question("Quer jogar de novo? [s/n]");
    if ( resposta === "s") {
      numeroSorteado();
    }
  }

}

numeroSorteado();