# Polibot – Assistente Virtual para Restaurante 🍕

Este é o repositório do **Polibot**, um aplicativo desenvolvido com [Expo](https://expo.dev) que atua como assistente virtual para um restaurante da escola Poliedro, oferecendo ao cliente uma interface intuitiva para visualizar o cardápio, customizar pizzas e fazer pedidos.

---

## ✨ Funcionalidades do App

- Exibição de cardápio com categorias (pizzas salgadas, doces, bebidas)
- Customização de pizza (borda, molho, adicionais como frango/calabresa)
- Envio de pedidos para o restaurante
- Interface simples e clara com chat interativo

---

## ⚙️ Como rodar o projeto

1. Instale as dependências:
```bash
npm install
```

2. Inicie o aplicativo:
```bash
npx expo start
```

Você poderá abrir o app via:

- [Expo Go](https://expo.dev/go)
- Emulador Android ou iOS
- Navegador (modo web)

---

## 📦 Estrutura do Projeto

```
polibotapp/
├── app/                   # Interface do app (telas e navegação)
│   ├── _layout.tsx
│   └── index.tsx
│
├── src/                   # Lógica da aplicação
│   ├── services/          # Regras de negócio
│   │   └── userService.js
│   └── repositories/      # Simulação de banco (Map)
│       └── userRepository.js
│
├── testes/                # Testes automatizados (Jest)
│   └── userService.test.js
│
├── assets/
├── package.json
├── jest.config.js
└── README.md
```

---

## ✅ Testes Automatizados (TDD)

Implementamos testes com [Jest](https://jestjs.io/) utilizando o ciclo **Red → Green → Refactor** para as seguintes funcionalidades:

### Funcionalidades testadas:

- ✅ Cadastro de usuário com dados válidos
- ✅ Impedimento de cadastro com e-mail duplicado
- ✅ Login com credenciais corretas
- ✅ Login com credenciais inválidas
- ✅ Validação de campos obrigatórios (nome, e-mail, senha)

### Como executar os testes:

1. Instale as dependências de desenvolvimento:
```bash
npm install --save-dev jest ts-jest @types/jest
```

2. Execute os testes:
```bash
npm test
```

---

## 👨‍💻 Sobre o Projeto Integrador

Este projeto foi desenvolvido como parte da disciplina de **Projeto Integrador do curso de Ciência da Computação**, com o objetivo de aplicar os conceitos de:

- Desenvolvimento ágil
- Test-Driven Development (TDD)
- Componentização com React Native
- Simulação de funcionalidades reais de sistema de pedidos

---

## 📚 Recursos úteis

- [Expo Docs](https://docs.expo.dev/)
- [Jest Docs](https://jestjs.io/docs/getting-started)
- [React Native Docs](https://reactnative.dev/)

---

## 👥 Equipe

- Pedro do Couto Rosa Canova
- Victhor das Virgens de Lima Castro
- Robert Kevyn Gonçalves Gomes 

---

Pronto para rodar, testar e evoluir. 🚀
