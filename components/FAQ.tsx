import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const faqData = [
  {
    id: '1',
    question: 'What is this app about?',
    answer: 'Bleslink connects senders with travelers for affordable, secure cross-border shipping.',
  },
  {
    id: '2',
    question: 'How does the escrow system work?',
    answer: 'Payments are held securely until the delivery is confirmed by the recipient.',
  },
  {
    id: '3',
    question: 'Can I trust the travelers?',
    answer: 'Yes, travelers go through a verification process, and both parties can leave ratings.',
  },

  {
    id: '4',
    question: 'Is my data secure?',
    answer: 'Absolutely! We use advanced encryption to ensure your data is safe and private.',
  },

  {
    id: '5',
    question: 'How do I reset my password?',
    answer: 'You can reset your password by going to Settings > Account > Reset Password.',
  },

  

  
];

const FAQ: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      <FlatList
        data={faqData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.faqItem}>
            <TouchableOpacity onPress={() => toggleExpand(item.id)}>
              <Text style={styles.question}>{item.question}</Text>
            </TouchableOpacity>
            {expanded === item.id && <Text style={styles.answer}>{item.answer}</Text>}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#EAF4F4',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#175676',
    textAlign: 'center',
  },
  faqItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#C3E0E5',
    paddingBottom: 10,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#175676',
  },
  answer: {
    marginTop: 5,
    fontSize: 16,
    color: '#333',
  },
});

export default FAQ;
