const express = require('express')
const app = express()
const http = require('http').createServer(app);

const port = 3000;

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // métodos aceitos pela url
  }
});

io.on('connection', (socket) => {
  console.log(`Usuário conectado. ID: ${socket.id} `);
  
  socket.on('ping', () => {
    console.log(`${socket.id} emitiu um ping!`);
  })
})


app.get('/', (req, res) => res.sendFile(__dirname, '/index.html'));

http.listen(port, () => console.log(`Example app listening on port ${port}!`))