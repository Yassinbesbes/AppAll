import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Alert,
} from "react-native";
import styles from "./style.js";

// Sample login credentials (for demonstration purposes)
const validEmail = "admin@example.com";
const validPassword = "password123";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Check if the entered email and password match the predefined credentials
    if (email === validEmail && password === validPassword) {
      Alert.alert("Login Successful", "Welcome back!", [
        {
          text: "OK",
          onPress: () => navigation.navigate("HomeScreen"), // Navigate to HomeScreen on successful login
        },
      ]);
    } else {
      Alert.alert("Incorrect Login", "Please check your email and password.", [
        {
          text: "OK",
        },
      ]);
    }
  };

  const handleSocialLogin = (platform) => {
    console.log(`${platform} login`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}></TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>
            Welcome back! Admin Glad{"\n"}to see you, Again!
          </Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                {/* Eye Icon (optional) */}
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>Or Login with</Text>

          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handleSocialLogin("Facebook")}
            >
              <Image
                source={{ uri: "https://www.facebook.com/favicon.ico" }}
                style={styles.socialIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handleSocialLogin("Google")}
            >
              <Image
                source={{ uri: "https://www.google.com/favicon.ico" }}
                style={styles.socialIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handleSocialLogin("Apple")}
            >
              <Image
                source={{ uri: "https://www.apple.com/favicon.ico" }}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have an account? </Text>
            <TouchableOpacity
              style={styles.guestButton}
              onPress={() => navigation.navigate("RegisterAdmin1")}
            >
              <Text style={styles.registerLink}>Register Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
