import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface NavbarProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
  toggleSidebar: () => void; // Add toggleSidebar prop
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onRegisterClick, toggleSidebar }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.logo}>Bleslink</Text>
      <View style={styles.buttonsContainer}>
        {/* Sidebar Toggle Button */}
        <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
          <Text style={styles.buttonText}>☰</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={onLoginClick}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={onRegisterClick}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 15,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: 10,
    backgroundColor: '#005BB5',
    padding: 10,
    borderRadius: 8,
  },
  loginButton: {
    backgroundColor: '#005BB5',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  registerButton: {
    backgroundColor: '#00CFFF',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default Navbar;
