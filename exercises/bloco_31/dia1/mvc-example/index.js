const express = require('express')
const bodyParser = require('body-parser');

const authorController = require('./controllers/authorController');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/authors', authorController.listAuthor);

app.get('/authors/new', authorController.newAuthor);

app.get('/authors/:id', authorController.showAuthor);

app.post('/authors', authorController.createAuthor);

app.get('/ping', (req, res) => res.send('Pong'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))