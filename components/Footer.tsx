import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const Footer: React.FC = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>© 2025 MyApp. All rights reserved.</Text>
      <View style={styles.linksContainer}>
        <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/terms')}>
          Terms of Service
        </Text>
        <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/privacy')}>
          Privacy Policy
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    padding: 20,
    backgroundColor: '#2E3B55',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  footerText: {
    color: '#FFF',
    fontSize: 14,
    marginBottom: 10,
  },
  linksContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  link: {
    color: '#4CAF50',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default Footer;
