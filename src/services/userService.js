const UserRepository = require('../repositories/userRepository');

class UserService {
  constructor() {
    this.userRepo = new UserRepository();
  }

  register(name, email, password) {
    if (!name || !email || !password) {
      throw new Error('Campos obrigatórios');
    }

    const existingUser = this.userRepo.findByEmail(email);
    if (existingUser) {
      throw new Error('E-mail já cadastrado');
    }

    const user = { name, email, password };
    this.userRepo.save(user);
    return user;
  }

  login(email, password) {
    const user = this.userRepo.findByEmail(email);
    if (!user || user.password !== password) {
      throw new Error('Credenciais inválidas');
    }

    return 'fake-token'; // Simula retorno de autenticação
  }
}

module.exports = UserService;
