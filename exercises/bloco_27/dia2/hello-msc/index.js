const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./controllers/Author');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

// app.get('/authors', async (req, res) => {
//   const authors = await Author.getAll();

//   res.status(200).json(authors);
// });

// app.get('/authors/:id', async (req, res) => {
//   const { id } = req.params;
  
//   const author = await Author.findById(id);

//   if (!author) return res.status(404).json({ message: 'Not found'});

//   res.status(200).json(author);
// });

// app.post('/authors', async (req, res) => {
//   const { first_name, middle_name, last_name } = req.body;

//   if (!Author.isValid(first_name, middle_name, last_name)) {
//     return res.status(400).json({ message: 'Dados inválidos' });
//   }

//   await Author.create(first_name, middle_name, last_name);
  
//   res.status(201).json({ message: 'Pessoa autora criada com sucesso!' });
// });


app.get('/authors', Author.getAll);
app.get('/authors/:id', Author.findById);
app.post('/authors', Author.create);

app.use(errorMiddleware);

const PORT = 3000;

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))