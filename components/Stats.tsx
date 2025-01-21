import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Stats: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Achievements</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>10K+</Text>
          <Text style={styles.statLabel}>Users</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>99%</Text>
          <Text style={styles.statLabel}>Satisfaction</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Awards</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#E8F5FF',
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
    color: '#1D3557',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    alignItems: 'center',
    padding: 10,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#457B9D',
  },
  statLabel: {
    fontSize: 16,
    color: '#1D3557',
  },
});

export default Stats;
