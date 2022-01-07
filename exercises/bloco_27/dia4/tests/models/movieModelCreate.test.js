const sinon = require('sinon');
const { expect } = require('chai');

const { MongoClient } = require('mongodb');
const { getConnection } = require('./mongoMockConnection');

const mongoConnection = require('../../models/connection');

const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  // Vamos deixar o objeto com o mock da conexão como uma variável global dentro desse describe
  let connectionMock;

  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  // // Esta é uma forma provisória para mockar a função insertOne
  // // desta forma ela não vai chamar o banco de verdade para fazer esse teste
  // before(() => {
  //   const ID_EXAMPLE = '604cb554311d68f491ba5781';
  //   const insertOne = async() => ({ insertedId: ID_EXAMPLE });
  //   const collection = async() => ({ insertOne });
  //   const db = async(databasaName) => ({ collection });
  //   const getConnectionMock = async() => ({ db });

  //   connectionMock = getConnectionMock()
  //     .then((conn) => conn.db('model_example'));

  //   sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  // })

  // // Restauraremos a função 'getConnection' original após os testes.
  // after(() => {
  //   mongoConnection.getConnection.restore();
  // })


  // Aqui autalizamos o código para usar o banco montado pela lib 'mongo-memory-server'
  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  // Restauraremos a função 'connect' original após os testes
  after(async () => {
    await connectionMock.db('model_example').collection('movies').drop();
    MongoClient.connect.restore();
  });


  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async() => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async() => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

    it('deve existir um filme com o título cadastrado!', async() => {
      await MoviesModel.create(payloadMovie);
      const movieCreated = await connectionMock
        .db('model_example')
        .collection('movies')
        .findOne({ title: payloadMovie.title });
      
      expect(movieCreated).to.be.not.null;
    })
  })
})