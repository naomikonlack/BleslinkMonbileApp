import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const LandingPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleGuestAccess = () => {
    console.log('Browsing as Guest');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Sidebar closeSidebar={toggleSidebar} />}

      <ScrollView>
        {/* HERO */}
        <Hero />

        {/* FEATURES */}
        <About />

        {/* "Visit as Guest" - moved below About */}
        <TouchableOpacity style={styles.guestButton} onPress={handleGuestAccess}>
          <Text style={styles.guestButtonText}>Get Started</Text>
        </TouchableOpacity>

        {/* Testimonials */}
        {/* <Testimonials /> */}

        {/* FAQ */}
        <FAQ />
      </ScrollView>

      {/* Footer */}
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFC',
  },
  guestButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 25,
    marginVertical: 20,
    marginHorizontal: 16,
    alignSelf: 'center',
  },
  guestButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default LandingPage;
