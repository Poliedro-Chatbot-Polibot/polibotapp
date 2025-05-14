import React, { useEffect, useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}

export default function Index() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const welcome: Message = {
      id: '1',
      sender: 'bot',
      text:
        'Olá! 👋 Eu sou o assistente virtual do restaurante Poliedro.\n\n' +
        'Posso te ajudar com:\n' +
        '1️⃣ Ver cardápio\n' +
        '2️⃣ Fazer pedido (incluindo customização)\n' +
        '3️⃣ Horário de funcionamento\n\n' +
        'Digite um número ou escreva o que deseja!',
    };
    setMessages([welcome]);
  }, []);

  const sendMessage = () => {
    if (input.trim() === '') return;
    const userInput = input.trim();
    const newMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userInput,
    };
    setMessages(prev => [...prev, newMsg]);
    setInput('');

    // Opção 1: Cardápio
    if (userInput === '1') {
      const menu: Message = {
        id: Date.now().toString() + '-bot',
        sender: 'bot',
        text:
          '🍕 *Cardápio Poliedro* 🍕\n\n' +
          '📂 *Pizzas Salgadas:*\n' +
          '- Calabresa\n' +
          '- Portuguesa\n' +
          '- Frango com Catupiry\n\n' +
          '📂 *Pizzas Doces:*\n' +
          '- Chocolate com Morango\n' +
          '- Prestígio\n' +
          '- Doce de Leite\n\n' +
          '🥤 *Bebidas:*\n' +
          '- Coca-Cola\n' +
          '- Guaraná\n' +
          '- Suco de Laranja',
      };
      setTimeout(() => setMessages(prev => [...prev, menu]), 500);

    // Opção 2: Fazer pedido + customização
    } else if (userInput === '2') {
      const orderPrompt: Message = {
        id: Date.now().toString() + '-bot',
        sender: 'bot',
        text:
          '🛒 *Fazer Pedido* (incluindo customização)\n\n' +
          'Envie seu pedido no formato:\n' +
          '`Nome da Pizza – Qtd`\n' +
          'E, na mesma mensagem, inclua suas preferências de customização:\n' +
          '`Borda: Recheada; Queijo extra: Sim; Molho: Branco; Coberturas: Bacon, Cebola`\n\n' +
          'Exemplo completo:\n' +
          '`Frango com Catupiry – 1\nBorda: Tradicional; Queijo extra: Não; Molho: Tomate; Coberturas: Cebola, Bacon`',
      };
      setTimeout(() => setMessages(prev => [...prev, orderPrompt]), 500);

    // Opção 3: Horário de funcionamento
    } else if (userInput === '3') {
      const hours: Message = {
        id: Date.now().toString() + '-bot',
        sender: 'bot',
        text:
          '⏰ *Horário de Funcionamento*\n\n' +
          '• Segunda a Sexta: 18:00 – 23:00\n' +
          '• Sábado: 17:00 – 23:30\n' +
          '• Domingo: 17:00 – 22:00',
      };
      setTimeout(() => setMessages(prev => [...prev, hours]), 500);

    // Fallback
    } else {
      const fallback: Message = {
        id: Date.now().toString() + '-bot',
        sender: 'bot',
        text:
          '🤔 Desculpe, não entendi. Digite 1, 2 ou 3, ou escreva sua dúvida.',
      };
      setTimeout(() => setMessages(prev => [...prev, fallback]), 500);
    }
  };

  const renderItem = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.message,
        item.sender === 'user' ? styles.userMsg : styles.botMsg
      ]}
    >
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite sua mensagem..."
          style={styles.input}
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.button}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  chatContainer: { padding: 10 },
  message: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    maxWidth: '80%',
  },
  userMsg: {
    backgroundColor: '#d1f7c4',
    alignSelf: 'flex-end',
  },
  botMsg: {
    backgroundColor: '#eee',
    alignSelf: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  button: {
    marginLeft: 10,
    backgroundColor: '#007bff',
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
