const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'guilherme',
  password: '123456789',
  database: 'rest_exercicios'
});

module.exports = connection;
