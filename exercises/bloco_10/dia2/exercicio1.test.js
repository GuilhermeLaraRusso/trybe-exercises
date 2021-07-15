const uppercase = require('./exercicio1');

test('if it returns the string on uppercase', (done) => {
  uppercase('carro', (callback) => {
    expect(callback).toBe('CARRO');
    done();
  });
});