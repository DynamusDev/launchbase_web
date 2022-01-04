export function removeSpecialCharacters(string: string) {
  return string.replace(/[&\\#,+()$~%.'":*?<>{}@_-]/g, '');
}

export const formatCpf = (cpf: string) => {
  const regex = /(\d{3})(\d{3})(\d{3})(\d{2})/;
  const match = cpf.match(regex);
  if (!match || match.length === 11) return cpf;
  return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
};

export const formatCellphone = (telefone: string) => {
  const regex = /(\d{2})(\d{4,5})(\d{4})/;
  const match = telefone.match(regex);
  if (!match || match.length < 4) return telefone;
  return `(${match[1]}) ${match[2]}-${match[3]}`;
};

export const hidePhone = (telefone: string) => {
  if (telefone.length < 10) return telefone;

  const firstNumbers = telefone.substr(0, 2);
  const lastNumbers = telefone.slice(telefone.length === 11 ? 7 : 6);

  return telefone.replace(firstNumbers, '(**)').replace(lastNumbers, '-****');
};

export const hideEmail = (email: string) => {
  return email.replace(email.split('@')[0].substr(3), '*******');
};
