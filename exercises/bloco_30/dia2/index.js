const express = require('express')
const bodyParser = require('body-parser');

const booksController = require('./controllers/booksController');

const app = express()
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/books', booksController.getAll);
app.get('/book/:id', booksController.getById);
app.post('/book', booksController.createNew);
app.put('/book/:id', booksController.updateById);
app.delete('/book/:id', booksController.deleteById);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))