require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

/** Usaremos o 'fs' pois teremos que fazer a leitura de todos os arquivos do diretório */
const fs = require('fs');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

const fileExists = (fileName) => {
  /** fs.readdirSync retorna uma lista com nome de todos os arquivos da pasta up,loads */
  const files = fs.readdirSync(`${__dirname}/uploads`);
  
  /** Aqui usamos a função some, que retorna 'true' se algum dos itens do array passar no teste, no nosso caso o 'file.includes' */
  return files.some((file) => file === fileName);
};

const fileFilter = (req, file, callback) => {
  if (file.mimetype !== 'image/png') {
    /** Colocar uma mensagem de erro na requisição */
    req.fileValidationError = true;

    /** Rejeitar o arquivo */
    return callback(null, false);
  }

  if (fileExists(file.originalname)) {
    /** Colocar uma flag de erro na requisição */
    req.fileDuplicated = true;

    /** Rejeitar o arquivo */
    return callback(null, false);
  }

  /** Aceitar o arquivo */
  callback(null, true);
}; 

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/uploads`));

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    callback(null, `${file.originalname}`);
  },
});

const upload = multer({ storage, fileFilter });

app.get('/ping', controllers.ping);
app.post('/files/upload', upload.single('file'), controllers.upload);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
