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

      </View>


      <View style={styles.content}>
        {/* Buttons Section */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("LoginAdmin")}
          >
            <Text style={styles.loginButtonText}>Continue as admin</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate("Loginpatient")}
          >
            <Text style={styles.registerButtonText}>Continue as Patient</Text>
          </TouchableOpacity>
 <TouchableOpacity
            style={styles.guestButton}
            onPress={() => navigation.navigate("HomeScreen")}
          >
          </TouchableOpacity> 
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreenfirstpage;
