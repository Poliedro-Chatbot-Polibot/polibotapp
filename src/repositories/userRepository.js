class UserRepository {
  constructor() {
    this.users = new Map(); // Armazena os usuários com o e-mail como chave
  }

  save(user) {
    this.users.set(user.email, user);
  }

  findByEmail(email) {
    return this.users.get(email);
  }
}

module.exports = UserRepository;
