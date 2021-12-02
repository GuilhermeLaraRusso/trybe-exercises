const equacao = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
      return reject (new Error("Informe apenas números"))
    }

    const resultado = (a + b) * c;
    
    if (resultado < 50) reject(new Error("Valor muito baixo"))

    resolve(resultado);
  })

  return promise;
}

const asyncFunction = async () => {
  const randomNumber = Math.floor(Math.random() * 100 + 1);

  try {
    const result = await equacao(randomNumber, randomNumber, randomNumber);
    console.log(`O resultado é: ${result}`);
  } catch (err) {
    console.log(err.message);
  }
  
}

asyncFunction();

// equacao(randomNumber, randomNumber, randomNumber)
//   .then(result => console.log(`valor: ${result}`))
//   .catch(err => console.log(`${err}`))