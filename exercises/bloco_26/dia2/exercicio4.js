const fs = require('fs').promises;

const main = async () => {
  fs.readFile("simpsons.json", "utf8")
    .then((result) => JSON.parse(result))
    .then((data) => {
      // console.log(data);
      data.map(({id, name}) => {
        console.log(`${id} - ${name}`)
      })
      
    })
    .catch((err) => {
      console.log(`Não foi possível ler o arquivo\n Erro: ${err}`);
      process.exit(1);
    })
};

// main();

const personagem = async (idPersonagem) => {
  const result = await fs.readFile("simpsons.json", "utf8")
    .then((resultado) => JSON.parse(resultado))
    .catch((err) => console.log(err.message));

  const simpson = result.find(({id}) => id === idPersonagem);

  if(!simpson) {
    throw new Error("id não encontrado");
  }

  return simpson;

}

personagem('7').then((result) => console.log(result));