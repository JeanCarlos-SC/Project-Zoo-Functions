const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se a função ao não receber nenhum parâmetro retorna undefined', () => {
    expect(handlerElephants()).toEqual(undefined);
  });

  it('Testa se a função ao receber um parâmetro que não é uma string retorna uma mensagem de erro', () => {
    expect(handlerElephants(5)).toEqual('Parâmetro inválido, é necessário uma string');
  });

  it('Verifica se a função ao receber uma parâmetro existente nas chaves do objeto "elephants" retorna o valor da chave', () => {
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('location')).toEqual('NW');
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('Verifica se a função ao receber como parâmetro count, names ou averageAge retorna os resultados experados', () => {
    expect(handlerElephants('count')).toEqual(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
    expect(handlerElephants('best')).toEqual(null);
  });
});
