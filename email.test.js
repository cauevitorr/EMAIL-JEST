const testadorEmail = require('./index');

describe('Testar escrita do email', () => {
  test('Verifica se o email está de acordo com o regex', () => {
    expect(testadorEmail('emial@email.com')).toBe(true);
  });
});
