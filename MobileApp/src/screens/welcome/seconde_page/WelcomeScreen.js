import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import BackButton from '../../../components/button/BackButton.js'

import styles from "./styles.js";

const WelcomeScreenSecondepage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
    {/* Back Button */}
    <BackButton to="Welcome1" backgroundColor="#B490FC" />

    {/* Logo/Brand Section */}
    <View style={styles.brandContainer}>
      <Image
        source={require("../../../../assets/icon.png")}
        style={styles.logo}
      />
    </View>
    <Text style={styles.brandText}>
      Aller<Text style={styles.brandHighlight}>Check</Text>
    </Text>

    <View style={styles.content}>
      {/* Buttons Section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
  );
};



export default WelcomeScreenSecondepage;