import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Hero: React.FC = () => {
  return (
    <View style={styles.heroContainer}>
      <Image
        source={{
          uri: 'https://raw.githubusercontent.com/Lesliekonlack/images/refs/heads/main/Travelpal.webp',
        }}
        style={styles.heroImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    // backgroundColor: '#007AFF',
    padding: 20,
    alignItems: 'center',
  },
  heroImage: {
    width: 500, // Make the image responsive to the screen width
    height: 350, // Define the height for the image
    resizeMode: 'cover', // Ensure the image covers the space proportionally
    top: -20,
  },
});

export default Hero;
