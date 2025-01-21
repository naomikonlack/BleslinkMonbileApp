import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const testimonials = [
  {
    name: 'Jane Doe',
    feedback: 'This app has completely changed the way I organize my shipments. Highly recommend it!',
  },
  {
    name: 'John Smith',
    feedback: 'A seamless experience from start to finish. The platform is easy to use and very reliable.',
  },
  {
    name: 'Alice Johnson',
    feedback: 'Bleslink is a game-changer in affordable logistics!',
  },
];

const Testimonials: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What Our Users Say</Text>
      {testimonials.map((testimonial, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.name}>{testimonial.name}</Text>
          <Text style={styles.feedback}>{testimonial.feedback}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFF5E6',
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF8C00',
    marginBottom: 12,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontWeight: 'bold',
    color: '#333',
  },
  feedback: {
    color: '#666',
    marginTop: 6,
  },
});

export default Testimonials;
