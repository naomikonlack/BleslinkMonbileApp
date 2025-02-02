import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppLoading from '../../components/AppLoading';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import * as AppleAuthentication from 'expo-apple-authentication';


// ✅ Configure Google Sign-In once
GoogleSignin.configure({
  webClientId: "123693303152-4h154so7hf636d4j9q8c35log97jh1f4.apps.googleusercontent.com",
  iosClientId: "123693303152-gt421vd8445o8tnssg3ff6j806dpicbc.apps.googleusercontent.com",
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  offlineAccess: true,
  forceCodeForRefreshToken: true,
});

const LandingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  // ✅ Functionality for Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices(); // Ensure Google Play Services is available
      const response = await GoogleSignin.signIn(); // Trigger sign-in
      console.log('Full Response:', response);

      const user = response.data?.user; // Safely access user information
      if (user) {
        console.log('User Info:', user);
        Alert.alert('Success', `Welcome, ${user.name}!`);
      } else {
        console.error("User information not found in response");
      }
    } catch (error: any) {
      console.error("Google Sign-In Error:", error);

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Error', 'Sign-in was cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Error', 'Sign-in is already in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Error', 'Google Play Services not available');
      } else {
        Alert.alert('Error', 'An unknown error occurred');
      }
    }
  };

  // ✅ Functionality for Apple Sign-In
  const handleAppleSignIn = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      console.log({
        id: credential.identityToken,
        authorization_code: credential.authorizationCode,
      });

      Alert.alert('Success', `Welcome, ${credential.fullName?.givenName || 'User'}!`);
    } catch (e: any) {
      if (e.code === 'ERR_REQUEST_CANCELED') {
        console.log("User canceled the sign-in process.");
      } else {
        console.log("Error occurred during Apple Sign-In:", e.message);
      }
    }
  };

  if (isLoading) {
    return <AppLoading onAnimationEnd={() => setIsLoading(false)} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Block */}
      <View style={styles.topBlock}>
        <Text style={styles.language}>English 🌐</Text>
        <View style={styles.titleContainer}>
          <Image source={require('../../assets/images/logo2.png')} style={styles.logo} />
          <Text style={styles.projectName}>Bleslink</Text>
        </View>
      </View>

      {/* Sign-Up Options */}
      <View style={styles.signUpBlock}>
        {/* Google Sign-In Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={handleGoogleSignIn}>
          <Icon name="google" size={20} color="#DB4437" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>Sign up with Google</Text>
          </View>
        </TouchableOpacity>

        {/* Apple Sign-In Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={handleAppleSignIn}>
          <Icon name="apple" size={20} color="#000000" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>Sign up with Apple</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Sign-Up with Email Block */}
      <View style={styles.emailBlock}>
        <TouchableOpacity style={styles.emailButton}>
          <Icon name="envelope" size={20} color="#555" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.emailText}>Sign up with email</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Sign-In Link */}
      <View style={styles.signInBlock}>
        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.signInLink}>Sign in</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};
// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    justifyContent: 'space-between',
  },
  topBlock: {
    alignItems: 'center',
    marginTop: 10,
  },
  language: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
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
  signUpBlock: {
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  signUpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    marginVertical: 5,
    width: '90%',
  },
  icon: {
    marginRight: 15, // Keep the icon on the left
  },
  textContainer: {
    flex: 1, // Allow the text container to take up remaining space
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center', // Center the text within the container
  },
  emailBlock: {
    marginHorizontal: 20,
    alignItems: 'center',
    marginVertical: 20,
    marginBottom: -100,
  },
  emailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    width: '90%',
  },
  emailText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  signInBlock: {
    alignItems: 'center',
    marginBottom: 100,
  },
  signInText: {
    fontSize: 14,
    color: '#777',
  },
  signInLink: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
});
export default LandingPage;
