import {
  formatCellphone,
  formatCpf,
  hideEmail,
  hidePhone,
  removeSpecialCharacters,
} from '../string';

describe('string', () => {
  it('format cellphone', () => {
    expect(formatCellphone('34999999999')).toBe('(34) 99999-9999');
    expect(formatCellphone('3499999999')).toBe('(34) 9999-9999');
    expect(formatCellphone('349999')).toBe('349999');
  });

  it('format cpf', () => {
    expect(formatCpf('02098873034')).toBe('020.988.730-34');
    expect(formatCpf('0209887303')).toBe('0209887303');
  });

  it('hide cellphone', () => {
    expect(hidePhone('11987611064')).toBe('(**)98761-****');
    expect(hidePhone('1187611064')).toBe('(**)8761-****');
    expect(hidePhone('349999')).toBe('349999');
  });

  it('hide email', () => {
    expect(hideEmail('teste.teste@deno.com.br')).toBe('tes*******@deno.com.br');
  });

  it('remove special characters', () => {
    expect(removeSpecialCharacters('Batata@Banana:Casa_Colchão')).toBe(
      'BatataBananaCasaColchão'
    );
  });
});
