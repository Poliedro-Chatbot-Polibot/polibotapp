const UserService = require('../src/services/userService.js');

describe('UserService - Cadastro e Login', () => {
  let userService;

  beforeEach(() => {
    userService = new UserService(); // novo para cada teste
  });

  test('Deve cadastrar usuário com dados válidos', () => {
    const user = userService.register('Pedro', 'pedro@mail.com', '123456');
    expect(user).toHaveProperty('email', 'pedro@mail.com');
  });

  test('Não deve permitir e-mail já cadastrado', () => {
    userService.register('Pedro', 'pedro@mail.com', '123456');
    expect(() => {
      userService.register('Outro', 'pedro@mail.com', '654321');
    }).toThrow('E-mail já cadastrado');
  });

  test('Login com credenciais válidas deve funcionar', () => {
    userService.register('Pedro', 'pedro@mail.com', '123456');
    const token = userService.login('pedro@mail.com', '123456');
    expect(token).toBeDefined(); // ou toEqual('fake-token')
  });

  test('Login com senha errada deve falhar', () => {
    userService.register('Pedro', 'pedro@mail.com', '123456');
    expect(() => {
      userService.login('pedro@mail.com', 'errada');
    }).toThrow('Credenciais inválidas');
  });

  test('Deve validar campos obrigatórios', () => {
    expect(() => {
      userService.register('', '', '');
    }).toThrow('Campos obrigatórios');
  });
});
