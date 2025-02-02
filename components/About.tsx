import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About: React.FC = () => {
  return (
    <View style={styles.container}>
      { <Text style={styles.title}>About Us</Text> }
      <Text style={styles.description}>
        Bleslink leverages blockchain technology to connect individuals or businesses needing to
        ship goods with travelers who have available luggage space. Our platform provides secure,
        affordable, and efficient shipping solutions.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#005BBB',

  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#023e8a',
  },
});

export default About;
