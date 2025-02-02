import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

const AppLoading: React.FC<{ onAnimationEnd: () => void }> = ({ onAnimationEnd }) => {
  const planeX = useRef(new Animated.Value(-100)).current; // Plane starts off-screen to the left
  const planeY = useRef(new Animated.Value(height / 2 - 50)).current; // Plane's vertical position
  const planeScale = useRef(new Animated.Value(1)).current; // For growing effect
  const nameOpacity = useRef(new Animated.Value(0)).current; // Fade in the app name
  const nameY = useRef(new Animated.Value(0)).current; // App name vertical position
  const colisX = useRef(new Animated.Value(-100)).current; // Colis trail starts off-screen
  const colisY = useRef(new Animated.Value(height / 2 - 50)).current; // Colis trail's vertical position
  const fadeAnim = useRef(new Animated.Value(1)).current; // Opacity for plane and colis fade-out

  useEffect(() => {
    // First animation: Plane, colis, and initial app name fade-in
    Animated.parallel([
      Animated.timing(planeX, {
        toValue: width / 2 - 25, // Move to the center horizontally
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(planeY, {
        toValue: height / 4, // Move diagonally upwards
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(planeScale, {
        toValue: 2, // Make the plane twice as big
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(colisX, {
        toValue: width / 2 - 60, // Move near the center
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(colisY, {
        toValue: height / 4 + 40, // Slightly below the plane
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start();

    // Fade in the app name
    Animated.timing(nameOpacity, {
      toValue: 1,
      duration: 2000,
      delay: 2000, // Delay to sync with plane animation
      useNativeDriver: true,
    }).start(() => {
      // Second animation: Move app name, plane, and colis upwards with fading
      Animated.parallel([
        // Move app name upward
        Animated.timing(nameY, {
          toValue: -height / 2, // Move upward off-screen
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(nameOpacity, {
          toValue: 0, // Fade out as it moves up
          duration: 2000,
          useNativeDriver: true,
        }),
        // Move plane diagonally upward and fade out
        Animated.timing(planeX, {
          toValue: width + 100, // Move off-screen to the right
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(planeY, {
          toValue: -100, // Move upward off-screen
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0, // Fade out the plane and colis
          duration: 2000,
          useNativeDriver: true,
        }),
        // Move colis diagonally upward and fade out
        Animated.timing(colisX, {
          toValue: width + 100, // Move off-screen to the right
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(colisY, {
          toValue: -50, // Move upward off-screen
          duration: 2000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        onAnimationEnd(); // Transition to static content
      });
    });
  }, [planeX, planeY, planeScale, colisX, colisY, nameOpacity, nameY, fadeAnim, onAnimationEnd]);

  return (
    <View style={styles.container}>
      {/* Logo and App Name */}
      <Animated.View
        style={[
          styles.logoNameContainer,
          {
            opacity: nameOpacity,
            transform: [{ translateY: nameY }], // Vertical movement
          },
        ]}
      >
        <Image
          source={require('../assets/images/logo2.png')} // Corrected image path
          style={styles.logo}
        />
        <Text style={styles.projectName}>Bleslink</Text>
      </Animated.View>

      {/* Plane Animation */}
      <Animated.View
        style={[
          styles.plane,
          {
            opacity: fadeAnim, // Fade out plane
            transform: [
              { translateX: planeX }, // Move horizontally
              { translateY: planeY }, // Move diagonally and then upward
              { scale: planeScale }, // Gradually grow in size
            ],
          },
        ]}
      >
        <Icon name="plane" size={50} color="#005BBB" />
      </Animated.View>

      {/* Colis Trail */}
      <Animated.View
        style={[
          styles.colis,
          {
            opacity: fadeAnim, // Fade out colis
            transform: [
              { translateX: colisX }, // Follow horizontally
              { translateY: colisY }, // Follow vertically
            ],
          },
        ]}
      >
        <Icon name="cube" size={30} color="#FF5733" /> {/* Colis icon */}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9', // White background
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, // Space between logo/name and animations
  },
  logo: {
    width: 65,
    height: 50,
    marginRight: -20,
    marginBottom: -30,
    marginLeft: -20,
  },
  projectName: {
    fontSize: 30,
    fontWeight: '900',
    color: '#005BBB',
    textAlign: 'center',
    letterSpacing: 3,
    padding: 10,
    overflow: 'hidden',
    marginTop: 20,
    marginLeft: 5,
  },
  plane: {
    position: 'absolute',
    left: 0, // Start off-screen to the left
  },
  colis: {
    position: 'absolute',
    left: 0, // Start off-screen to the left
  },
});

export default AppLoading;
