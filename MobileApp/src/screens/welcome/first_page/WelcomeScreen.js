import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import styles from "./styles.js";

const WelcomeScreenfirstpage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
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
            <Text style={styles.loginButtonText}>Continue as Doctor</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.registerButtonText}>Continue as Patient</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.guestButton}
            onPress={() => navigation.navigate("Guest")}
          >
            <Text style={styles.guestButtonText}>Continue as a Guest</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreenfirstpage;
