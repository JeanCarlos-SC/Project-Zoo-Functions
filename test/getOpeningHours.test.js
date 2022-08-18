const getOpeningHours = require('../src/getOpeningHours');

console.log(getOpeningHours());
describe('Testes da função getOpeningHours', () => {
  it('Testa se a função ao não receber nenhum parâmetro retorna todos os dias e horários do zoo', () => {
    expect(typeof getOpeningHours()).toEqual('object');
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('Testa se a função ao receber valores inválidos lança erros', () => {
    expect(() => getOpeningHours('thu', '09:00-PM')).toThrow('The day must be valid. Example: Monday');
    expect(() => getOpeningHours('Tuesday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Tuesday', 'C9:00-PM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Wednesday', '09:c0-PM')).toThrow('The minutes should represent a number');
  });

  it('Testa se a função retorna os resultados esperados ao receber alguns dias e horários', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });

  it('Testa se a função ao receber horários e dias fora dos intervalos corretos lança erros', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Tuesday', '09:60-PM')).toThrow('The minutes must be between 0 and 59');
  });
});
