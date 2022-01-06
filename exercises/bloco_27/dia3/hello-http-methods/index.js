const axios = require('axios').default;

// Armazenamos o token numa variável.
// Num ambiente real, esse valor viria do Local Storage, ou de uma variável de ambiente
const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';


// Criamos um novo objeto de Headers
const headers = { Authorization: API_TOKEN };

// Criamos um novo objeto de body
const body = {
  name: 'Tryber',
  email: 'tryber@betrybe.com',
  password: 'Tr1b3r',
}


// Para aquecer, vamos começar com uma requisição do tipo 'GET', mas passando o token no header
axios.get('https://postman-echo.com/get?param1=teste', { headers })
  .then((response) => {
    // Caos esteja tudo OK, retornamos os dados
    // As informações são retornadas dentro da propriedade "data" quando usamos axios
    return response.data;
  })
  .then((data) => {
    // Por fim, escrevemos o body no console
    console.log(data);
  })
  .catch((errorOrResponse) => {
    // Em caso de falha simples ( a request completou com um status diferente de 2xx)
    // simplesmente logamos o statuso no console
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }

    // Caso tenha acontecido um erro de rede (não foi possível completar a request)
    // logamos o erro todo
    console.log(errorOrResponse);
  });


// Agora, iremos fazer uma requisição do tipo 'POST' passando o body
axios.post('https://postman-echo.com/post?param1=teste', body, { headers })
  .then((response) => {
    // Caos esteja tudo OK, retornamos os dados
    // As informações são retornadas dentro da propriedade "data" quando usamos axios
    return response.data;
  })
  .then((data) => {
    // Por fim, escrevemos o body no console
    console.log(data);
  })
  .catch((errorOrResponse) => {
    // Em caso de falha simples ( a request completou com um status diferente de 2xx)
    // simplesmente logamos o statuso no console
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }

    // Caso tenha acontecido um erro de rede (não foi possível completar a request)
    // logamos o erro todo
    console.log(errorOrResponse);
  });