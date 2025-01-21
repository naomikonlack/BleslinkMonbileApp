import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface SidebarProps {
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar }) => {
  return (
    <View style={styles.sidebar}>
      <TouchableOpacity onPress={closeSidebar} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <Text style={styles.sidebarText}>Home</Text>
      <Text style={styles.sidebarText}>Explore</Text>
      <Text style={styles.sidebarText}>About</Text>
      <Text style={styles.sidebarText}>Contact Us</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: '#F0F8FF',
    padding: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 5,
    marginBottom: 15,
    backgroundColor: '#FF6347',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  sidebarText: {
    fontSize: 18,
    marginVertical: 10,
    color: '#333',
  },
});

export default Sidebar;
